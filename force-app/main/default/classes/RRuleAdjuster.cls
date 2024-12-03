public class RRuleAdjuster {
    private String originalRRule;
    private DateTime originalStartDate;

    private static final String FREQ_WEEKLY = 'WEEKLY';
    private static final String FREQ_MONTHLY = 'MONTHLY';
    private static final String FREQ_YEARLY = 'YEARLY';
    private static final String FREQ_DAILY = 'DAILY';


    public class RRuleResult {
        public String newRRule;
        public List<DateTime> newDates;

        public RRuleResult(String rrule, List<DateTime> dates) {
            this.newRRule = rrule;
            this.newDates = dates;
        }
    }

    public RRuleAdjuster(String rrule, DateTime startDate) {
        this.originalRRule = rrule;
        this.originalStartDate = startDate;
    }

    /**
    * Calculates the number of occurrences between start and end dates based on the RRULE
    * @param startDate The start date to begin counting from
    * @param endDate The end date to stop counting at (inclusive)
    * @param rrule The recurrence rule in RRULE format
    * @return The number of occurrences that fall within the date range
    */
    public Integer calculateInstanceCount(DateTime startDate, DateTime endDate, String rrule) {
        // Validate inputs
        if (startDate == null || endDate == null || String.isEmpty(rrule)) {
            return 0;
        }
        if (startDate > endDate) {
            return 0;
        }

        // Parse the RRULE
        Map<String, String> ruleParams = parseRRule(rrule);
        String freq = ruleParams.get('FREQ');
        Integer interval = Integer.valueOf(ruleParams.get('INTERVAL'));

        // Handle UNTIL constraint
        if (ruleParams.containsKey('UNTIL')) {
            try {
                DateTime untilDate = parseUntilDate(ruleParams.get('UNTIL'));
                if (untilDate < endDate) {
                    endDate = untilDate;
                }
            } catch (Exception e) {
                System.debug('Error parsing UNTIL date: ' + e.getMessage());
            }
        }

        // Calculate instances based on frequency
        Integer instances = 0;

        // Get total milliseconds between dates
        Long startMillis = startDate.getTime();
        Long endMillis = endDate.getTime();
        Long totalMillis = endMillis - startMillis;

        if (freq == 'DAILY') {
            // For daily frequency, calculate number of days and divide by interval
            Long totalDays = totalMillis / (1000 * 60 * 60 * 24);
            instances = ((Integer)totalDays / interval) + 1; // +1 to include start date
        }
        else if (freq == 'WEEKLY') {
            // For weekly frequency
            Long totalWeeks = totalMillis / (1000 * 60 * 60 * 24 * 7);
            instances = ((Integer)totalWeeks / interval) + 1;

            // If BYDAY is specified, adjust for specific days
            if (ruleParams.containsKey('BYDAY')) {
                String byday = ruleParams.get('BYDAY');
                List<String> days = byday.split(',');
                instances *= days.size(); // Multiply by number of days per week
            }
        }
        else if (freq == 'MONTHLY') {
            // Calculate full months between dates
            Integer monthsDiff = (endDate.year() * 12 + endDate.month()) -
                    (startDate.year() * 12 + startDate.month());
            instances = (monthsDiff / interval) + 1;

            // Adjust if we're past the day of month in the end date
            if (endDate.day() < startDate.day()) {
                instances--;
            }
        }
        else if (freq == 'YEARLY') {
            Integer yearsDiff = endDate.year() - startDate.year();
            instances = (yearsDiff / interval) + 1;

            // Adjust if we haven't reached the anniversary date yet
            if (endDate.month() < startDate.month() ||
                    (endDate.month() == startDate.month() && endDate.day() < startDate.day())) {
                instances--;
            }
        }

        // Apply COUNT constraint if it exists
        if (ruleParams.containsKey('COUNT')) {
            Integer maxCount = Integer.valueOf(ruleParams.get('COUNT'));
            instances = Math.min(instances, maxCount);
        }

        // Ensure we don't return negative counts
        return Math.max(0, instances);
    }

    /**
 * Parses the UNTIL date from RRULE format to DateTime
 * @param untilStr The UNTIL date string from RRULE (e.g., '20240531T235959Z')
 * @return DateTime representation of the UNTIL date
 */
    private DateTime parseUntilDate(String untilStr) {
        // Format: YYYYMMDD[T]HHMMSS[Z]
        Integer year = Integer.valueOf(untilStr.substring(0, 4));
        Integer month = Integer.valueOf(untilStr.substring(4, 6));
        Integer day = Integer.valueOf(untilStr.substring(6, 8));

        Integer hour = 0, minute = 0, second = 0;
        if (untilStr.length() > 8) {
            hour = Integer.valueOf(untilStr.substring(9, 11));
            minute = Integer.valueOf(untilStr.substring(11, 13));
            second = Integer.valueOf(untilStr.substring(13, 15));
        }

        return DateTime.newInstanceGmt(year, month, day, hour, minute, second);
    }



    public RRuleResult calculateAdjustment(DateTime originalInstance, DateTime newDate) {
        //System.debug('Original Instance: ' + originalInstance);
        //System.debug('New Date: ' + newDate);
        // Parse the original RRULE
        Map<String, String> ruleParams = parseRRule(originalRRule);
        String freq = ruleParams.get('FREQ');
        Integer interval = Integer.valueOf(ruleParams.get('INTERVAL'));

        // Just get the new day of week directly
        String newDayOfWeek = getDayOfWeekCode(newDate);  // Should return "WE" for Wednesday

        // Adjust parameters based on frequency
        Map<String, String> newParams = new Map<String, String>(ruleParams);

        if (freq == FREQ_WEEKLY) {
            // Simply set the new day of week
            newParams.put('BYDAY', newDayOfWeek);
        } else if (freq == FREQ_MONTHLY) {
            adjustMonthlyParams(newParams, originalInstance, newDate);
        } else if (freq == FREQ_YEARLY) {
            adjustYearlyParams(newParams, originalInstance, newDate);
        }

        // Generate new dates
        List<DateTime> newDates = generateDates(newParams, newDate);
        String newRRule = buildRRule(newParams);

        System.debug('New RRULE: ' + newRRule);
        System.debug('New Dates: ' + newDates);

        return new RRuleResult(newRRule, newDates);
    }

    private static String getDayOfWeekCode(DateTime dt) {

        List<String> days = new List<String>{'SU','MO','TU','WE','TH','FR','SA'};
        DateTime startOfWeek = DateTime.newInstance(1970, 1, 4); // This was a Sunday
        Integer daysDiff = Math.mod(
                (dt.getTime() - startOfWeek.getTime()) / (1000 * 60 * 60 * 24),
                7
        ).intValue();

        //System.debug('Calculated day index: ' + daysDiff);
        return days[daysDiff];
    }

    private Map<String, String> parseRRule(String rrule) {
        Map<String, String> params = new Map<String, String>();
        for (String part : rrule.split(';')) {
            List<String> keyValue = part.split('=');
            if (keyValue.size() == 2) {
                params.put(keyValue[0], keyValue[1]);
            }
        }
        return params;
    }

    private void adjustWeeklyParams(Map<String, String> params, Integer dayShift) {
        if (params.containsKey('BYDAY')) {
            List<String> days = params.get('BYDAY').split(',');
            List<String> newDays = new List<String>();

            for (String day : days) {
                Integer dayNum = getDayNumber(day);
                Integer newDayNum = Math.mod(dayNum + dayShift, 7);
                newDays.add(getDayCode(newDayNum));
            }

            params.put('BYDAY', String.join(newDays, ','));
        }
    }

    private void adjustMonthlyParams(Map<String, String> params, DateTime original, DateTime newDate) {
        if (params.containsKey('BYMONTHDAY')) {
            // If it's a specific day of month
            params.put('BYMONTHDAY', String.valueOf(newDate.day()));
        } else if (params.containsKey('BYDAY')) {
            // If it's something like "1MO" (first Monday)
            Integer weekNum = (Integer)((newDate.day() - 1) / 7) + 1;
            String dayCode = getDayCode(getDayOfWeek(newDate));
            params.put('BYDAY', weekNum + dayCode);
        }
    }

    private void adjustYearlyParams(Map<String, String> params, DateTime original, DateTime newDate) {
        if (params.containsKey('BYMONTH')) {
            params.put('BYMONTH', String.valueOf(newDate.month()));
        }
        if (params.containsKey('BYMONTHDAY')) {
            params.put('BYMONTHDAY', String.valueOf(newDate.day()));
        }
    }

    private List<DateTime> generateDates(Map<String, String> params, DateTime startDate) {
        List<DateTime> dates = new List<DateTime>();
        String freq = params.get('FREQ');
        Integer interval = Integer.valueOf(params.get('INTERVAL'));
        DateTime currentDate = startDate;

        // Generate next X occurrences (limit this based on your needs)
        for (Integer i = 0; i < 104; i++) { // Example: Generate two years of bi-weekly occurrences
            if (meetsCriteria(currentDate, params)) {
                dates.add(currentDate);
            }

            currentDate = advanceDate(currentDate, freq, interval);
        }

        return dates;
    }

    private DateTime advanceDate(DateTime dt, String freq, Integer interval) {
        if (freq == FREQ_DAILY) {
            return dt.addDays(interval);
        } else if (freq == FREQ_WEEKLY) {
            return dt.addDays(7 * interval);
        } else if (freq == FREQ_MONTHLY) {
            return dt.addMonths(interval);
        } else if (freq == FREQ_YEARLY) {
            return dt.addYears(interval);
        }
        return dt;
    }

    /**
     *@description: Enhanced meetsCriteria method to properly check all RRULE constraints
     * @param dt The date to check
     * @param params The RRULE parameters
     * @return True if the date meets all RRULE criteria, false otherwise
    **/
    private Boolean meetsCriteria(DateTime dt, Map<String, String> params) {
        // Check BYMONTHDAY
        if (params.containsKey('BYMONTHDAY')) {
            Integer monthDay = Integer.valueOf(params.get('BYMONTHDAY'));
            if (dt.day() != monthDay) {
                return false;
            }
        }

        // Check BYMONTH
        if (params.containsKey('BYMONTH')) {
            Integer month = Integer.valueOf(params.get('BYMONTH'));
            if (dt.month() != month) {
                return false;
            }
        }

        // Check BYDAY
        if (params.containsKey('BYDAY')) {
            String byday = params.get('BYDAY');
            String dayCode = getDayOfWeekCode(dt);

            // Handle cases like '1MO' (first Monday) vs just 'MO'
            if (byday.length() > 2) {
                Integer weekNum = Integer.valueOf(byday.substring(0, 1));
                String dayPart = byday.substring(1);

                // Calculate which week of the month this date falls on
                Integer currentWeek = ((dt.day() - 1) / 7) + 1;

                return dayPart == dayCode && currentWeek == weekNum;
            } else {
                // Simple day of week match
                return byday == dayCode;
            }
        }

        return true;
    }

    private Integer getDayOfWeek(DateTime dt) {
        // Returns 0-6 for Sunday-Saturday
        return Math.mod(Integer.valueOf(dt.format('u')) + 6, 7);
    }

    private String getDayCode(Integer dayNum) {
        List<String> days = new List<String>{'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'};
        return days[dayNum];
    }

    private Integer getDayNumber(String dayCode) {
        Map<String, Integer> dayMap = new Map<String, Integer>{
                'SU' => 0, 'MO' => 1, 'TU' => 2, 'WE' => 3,
                'TH' => 4, 'FR' => 5, 'SA' => 6
        };
        return dayMap.get(dayCode.right(2));
    }

    private String buildRRule(Map<String, String> params) {
        List<String> parts = new List<String>();
        for (String key : params.keySet()) {
            parts.add(key + '=' + params.get(key));
        }
        return String.join(parts, ';');
    }
}