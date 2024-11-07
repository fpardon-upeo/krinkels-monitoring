public class RRuleDescriptionGenerator {
    private static final Map<String, String> FREQUENCY_DESCRIPTIONS = new Map<String, String>{
            'DAILY' => 'day',
            'WEEKLY' => 'week',
            'MONTHLY' => 'month',
            'YEARLY' => 'year'
    };

    private static final Map<String, String> DAY_NAMES;
    private static final Map<String, String> MONTH_NAMES;
    private static final Map<String, String> ORDINAL_INDICATORS;

    static {
        DAY_NAMES = new Map<String, String>{
                'SU' => 'Sunday',
                'MO' => 'Monday',
                'TU' => 'Tuesday',
                'WE' => 'Wednesday',
                'TH' => 'Thursday',
                'FR' => 'Friday',
                'SA' => 'Saturday'
        };

        MONTH_NAMES = new Map<String, String>{
                '1' => 'January',
                '2' => 'February',
                '3' => 'March',
                '4' => 'April',
                '5' => 'May',
                '6' => 'June',
                '7' => 'July',
                '8' => 'August',
                '9' => 'September',
                '10' => 'October',
                '11' => 'November',
                '12' => 'December'
        };

        ORDINAL_INDICATORS = new Map<String, String>{
                '1' => 'first',
                '2' => 'second',
                '3' => 'third',
                '4' => 'fourth',
                '5' => 'fifth',
                '-1' => 'last'
        };
    }

    /**
     * Converts an RRULE string into a human-readable description
     * @param rrule The RRULE string to parse
     * @return A human-readable description of the recurrence pattern
     */
    public static String generateDescription(String rrule) {
        if (String.isEmpty(rrule)) {
            return 'No recurrence pattern specified';
        }

        Map<String, String> params = parseRRule(rrule);
        String freq = params.get('FREQ');

        if (!FREQUENCY_DESCRIPTIONS.containsKey(freq)) {
            return 'Invalid frequency specified';
        }

        List<String> descriptionParts = new List<String>();

        String frequencyDesc = getFrequencyDescription(params);
        String daysDesc = getDaysDescription(params);
        String monthDayDesc = getMonthDayDescription(params);
        String monthDesc = getMonthDescription(params);
        String endDesc = getEndDescription(params);

        descriptionParts.add(frequencyDesc);

        if (!String.isEmpty(daysDesc)) {
            descriptionParts.add(daysDesc);
        }
        if (!String.isEmpty(monthDayDesc)) {
            descriptionParts.add(monthDayDesc);
        }
        if (!String.isEmpty(monthDesc)) {
            descriptionParts.add(monthDesc);
        }
        if (!String.isEmpty(endDesc)) {
            descriptionParts.add(endDesc);
        }

        return String.join(descriptionParts, ' ');
    }

    private static Map<String, String> parseRRule(String rrule) {
        Map<String, String> params = new Map<String, String>();
        for (String part : rrule.split(';')) {
            List<String> keyValue = part.split('=');
            if (keyValue.size() == 2) {
                params.put(keyValue[0], keyValue[1]);
            }
        }
        return params;
    }

    private static String getFrequencyDescription(Map<String, String> params) {
        String freq = params.get('FREQ');
        String interval = params.get('INTERVAL');
        String freqUnit = FREQUENCY_DESCRIPTIONS.get(freq);

        if (String.isEmpty(interval) || interval == '1') {
            return 'Every ' + freqUnit;
        }

        return 'Every ' + interval + ' ' + freqUnit + 's';
    }

    private static String getDaysDescription(Map<String, String> params) {
        if (!params.containsKey('BYDAY')) {
            return '';
        }

        List<String> dayDescriptions = new List<String>();
        String byday = params.get('BYDAY');

        for (String day : byday.split(',')) {
            if (day.length() > 2) {
                // Handle cases like 1MO, -1FR
                String ordinal = day.substring(0, day.length() - 2);
                String dayCode = day.substring(day.length() - 2);
                dayDescriptions.add(ORDINAL_INDICATORS.get(ordinal) + ' ' +
                        DAY_NAMES.get(dayCode).toLowerCase());
            } else {
                dayDescriptions.add(DAY_NAMES.get(day));
            }
        }

        return 'on ' + String.join(dayDescriptions, ', ');
    }

    private static String getMonthDayDescription(Map<String, String> params) {
        if (!params.containsKey('BYMONTHDAY')) {
            return '';
        }

        String monthDay = params.get('BYMONTHDAY');
        return 'on day ' + monthDay;
    }

    private static String getMonthDescription(Map<String, String> params) {
        if (!params.containsKey('BYMONTH')) {
            return '';
        }

        List<String> monthNames = new List<String>();
        for (String month : params.get('BYMONTH').split(',')) {
            monthNames.add(MONTH_NAMES.get(month));
        }

        return 'in ' + String.join(monthNames, ', ');
    }

    private static String getEndDescription(Map<String, String> params) {
        if (params.containsKey('COUNT')) {
            String count = params.get('COUNT');
            return 'for ' + count + ' occurrence' + (count == '1' ? '' : 's');
        }

        if (params.containsKey('UNTIL')) {
            try {
                String untilStr = params.get('UNTIL');
                // Parse YYYYMMDD
                String year = untilStr.substring(0, 4);
                String month = untilStr.substring(4, 6);
                String day = untilStr.substring(6, 8);
                return 'until ' + MONTH_NAMES.get(month) + ' ' + Integer.valueOf(day) + ', ' + year;
            } catch (Exception e) {
                return 'until ' + params.get('UNTIL');
            }
        }

        return '';
    }
}