public class RRuleCriteria {
    private static final Map<String, Integer> WEEKDAY_MAP = new Map<String, Integer>{
            'SU' => 0, 'MO' => 1, 'TU' => 2, 'WE' => 3, 'TH' => 4, 'FR' => 5, 'SA' => 6
    };

    public static Boolean meetsCriteria(DateTime dt, Map<String, String> params) {
        System.debug('Checking criteria for date: ' + dt + ' with params: ' + params);

        if (params == null || params.isEmpty()) {
            return true;
        }

        Boolean frequencyMatch = checkFrequency(dt, params);
        System.debug('Frequency match: ' + frequencyMatch);

        Boolean monthDayMatch = checkByMonthDay(dt, params);
        System.debug('MonthDay match: ' + monthDayMatch);

        Boolean dayMatch = checkByDay(dt, params);
        System.debug('Day match: ' + dayMatch);

        Boolean monthMatch = checkByMonth(dt, params);
        System.debug('Month match: ' + monthMatch);

        return frequencyMatch && monthDayMatch && dayMatch && monthMatch;
    }

    private static Boolean checkFrequency(DateTime dt, Map<String, String> params) {
        String freq = params.get('FREQ');
        if (freq == null) return true;

        Integer interval = params.containsKey('INTERVAL') ?
                Integer.valueOf(params.get('INTERVAL')) : 1;

        // For validation purposes, we mainly care if the date fits the pattern
        // Actual interval calculations happen during date generation
        return true;
    }

    private static Boolean checkByMonth(DateTime dt, Map<String, String> params) {
        if (!params.containsKey('BYMONTH')) return true;

        Set<Integer> validMonths = new Set<Integer>();
        for (String month : params.get('BYMONTH').split(',')) {
            validMonths.add(Integer.valueOf(month));
        }

        return validMonths.contains(dt.month());
    }

    private static Boolean checkByMonthDay(DateTime dt, Map<String, String> params) {
        if (!params.containsKey('BYMONTHDAY')) return true;

        Set<Integer> validDays = new Set<Integer>();
        for (String day : params.get('BYMONTHDAY').split(',')) {
            Integer dayNum = Integer.valueOf(day);
            if (dayNum < 0) {
                // Handle negative days (counting from end of month)
                dayNum = getDaysInMonth(dt.year(), dt.month()) + dayNum + 1;
            }
            validDays.add(dayNum);
        }

        return validDays.contains(dt.day());
    }

    private static Boolean checkByDay(DateTime dt, Map<String, String> params) {
        if (!params.containsKey('BYDAY')) return true;

        List<String> byDaySpecs = params.get('BYDAY').split(',');

        for (String spec : byDaySpecs) {
            if (matchesByDaySpec(dt, spec)) {
                return true;
            }
        }
        return false;
    }

    private static Boolean matchesByDaySpec(DateTime dt, String spec) {
        // Handle both simple day specs (MO) and positioned ones (1MO, -1MO)
        String dayCode;
        Integer position = null;

        if (spec.length() > 2) {
            // Has a position specifier
            String posStr = spec.substring(0, spec.length() - 2);
            dayCode = spec.substring(spec.length() - 2);
            position = Integer.valueOf(posStr);
        } else {
            dayCode = spec;
        }

        // First check if it's the right day of the week
        String actualDayCode = getDayOfWeekCode(dt);
        if (dayCode != actualDayCode) {
            return false;
        }

        // If no position specified, we're done
        if (position == null) {
            return true;
        }

        // Calculate which occurrence of this day it is in the month
        Integer occurrence = getOccurrenceInMonth(dt);

        if (position > 0) {
            return occurrence == position;
        } else {
            // Negative position counts from end of month
            Integer totalOccurrences = getTotalOccurrencesInMonth(dt);
            return occurrence == (totalOccurrences + position + 1);
        }
    }

    private static Integer getDaysInMonth(Integer year, Integer month) {
        Date lastDay = Date.newInstance(year, month + 1, 1).addDays(-1);
        return lastDay.day();
    }

    private static String getDayOfWeekCode(DateTime dt) {
        List<String> days = new List<String>{'SU','MO','TU','WE','TH','FR','SA'};
        Integer dayIndex = Math.mod(Integer.valueOf(dt.format('u')) + 6, 7);
        return days[dayIndex];
    }

    private static Integer getOccurrenceInMonth(DateTime dt) {
        return ((dt.day() - 1) / 7) + 1;
    }

    private static Integer getTotalOccurrencesInMonth(DateTime dt) {
        Integer year = dt.year();
        Integer month = dt.month();
        String dayCode = getDayOfWeekCode(dt);
        Integer daysInMonth = getDaysInMonth(year, month);

        Integer count = 0;
        for (Integer day = 1; day <= daysInMonth; day++) {
            DateTime testDate = DateTime.newInstance(year, month, day, 0, 0, 0);
            if (getDayOfWeekCode(testDate) == dayCode) {
                count++;
            }
        }
        return count;
    }
}