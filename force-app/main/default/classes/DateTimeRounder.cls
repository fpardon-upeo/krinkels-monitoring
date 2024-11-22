public class DateTimeRounder {

    @InvocableMethod(label='Round DateTime to Interval'
            description='Rounds a DateTime to the nearest interval (in minutes)')
    public static List<DateTime> roundToInterval(List<RoundingRequest> requests) {
        List<DateTime> results = new List<DateTime>();

        for(RoundingRequest req : requests) {
            results.add(roundSingle(req.inputDateTime, req.intervalMinutes));
        }

        return results;
    }

    public static DateTime roundSingle(DateTime dt, Integer intervalMinutes) {
        // Convert to milliseconds since epoch
        Long milliseconds = dt.getTime();

        // Convert interval to milliseconds
        Long intervalMs = intervalMinutes * 60 * 1000L;

        // Calculate rounded milliseconds
        Long remainder = Math.mod(milliseconds, intervalMs);
        Long halfInterval = intervalMs / 2;

        Long roundedMs;
        if (remainder >= halfInterval) {
            // Round up
            roundedMs = milliseconds + (intervalMs - remainder);
        } else {
            // Round down
            roundedMs = milliseconds - remainder;
        }

        // Convert back to DateTime
        return DateTime.newInstance(roundedMs);
    }

    public class RoundingRequest {
        @InvocableVariable(required=true label='Input DateTime')
        public DateTime inputDateTime;

        @InvocableVariable(required=true label='Interval (Minutes)')
        public Integer intervalMinutes;
    }
}