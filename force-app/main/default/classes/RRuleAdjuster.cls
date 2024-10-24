public class RRuleAdjuster {
    private String originalRRule;
    private DateTime originalStartDate;

    private static final String FREQ_WEEKLY = 'WEEKLY';
    private static final String FREQ_MONTHLY = 'MONTHLY';
    private static final String FREQ_YEARLY = 'YEARLY';

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

    public RRuleResult calculateAdjustment(DateTime originalInstance, DateTime newDate) {
        System.debug('Original Instance: ' + originalInstance);
        System.debug('New Date: ' + newDate);
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
        System.debug('Getting day code for: ' + dt);
        System.debug('Day of week from format: ' + dt.format('u'));

        List<String> days = new List<String>{'SU','MO','TU','WE','TH','FR','SA'};
        DateTime startOfWeek = DateTime.newInstance(1970, 1, 4); // This was a Sunday
        Integer daysDiff = Math.mod(
                (dt.getTime() - startOfWeek.getTime()) / (1000 * 60 * 60 * 24),
                7
        ).intValue();

        System.debug('Calculated day index: ' + daysDiff);
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
        for (Integer i = 0; i < 52; i++) { // Example: Generate one year of weekly occurrences
            if (meetsCriteria(currentDate, params)) {
                dates.add(currentDate);
            }

            currentDate = advanceDate(currentDate, freq, interval);
        }

        return dates;
    }

    private DateTime advanceDate(DateTime dt, String freq, Integer interval) {
        if (freq == FREQ_WEEKLY) {
            return dt.addDays(7 * interval);
        } else if (freq == FREQ_MONTHLY) {
            return dt.addMonths(interval);
        } else if (freq == FREQ_YEARLY) {
            return dt.addYears(interval);
        }
        return dt;
    }

    private Boolean meetsCriteria(DateTime dt, Map<String, String> params) {
        // Implement criteria checking based on BYMONTHDAY, BYDAY, etc.
        // This would need to check if the date matches all the rule criteria
        return true; // Placeholder implementation
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