/**
 * Created by fpardon on 21/11/2024.
 */

@IsTest
private class DateTimeRounderTest {
    @IsTest
    static void testRoundingToFiveMinutes() {
        DateTime dt1 = DateTime.newInstance(2024, 11, 21, 9, 31, 0);
        DateTime dt2 = DateTime.newInstance(2024, 11, 21, 9, 33, 0);

        DateTimeRounder.RoundingRequest req1 = new DateTimeRounder.RoundingRequest();
        req1.inputDateTime = dt1;
        req1.intervalMinutes = 5;

        DateTimeRounder.RoundingRequest req2 = new DateTimeRounder.RoundingRequest();
        req2.inputDateTime = dt2;
        req2.intervalMinutes = 5;

        Test.startTest();
        List<DateTime> results = DateTimeRounder.roundToInterval(new List<DateTimeRounder.RoundingRequest>{req1, req2});
        Test.stopTest();

        // First datetime should round down to 9:30
        System.assertEquals(DateTime.newInstance(2024, 11, 21, 9, 30, 0), results[0]);
        // Second datetime should round up to 9:35
        System.assertEquals(DateTime.newInstance(2024, 11, 21, 9, 35, 0), results[1]);
    }

    @IsTest
    static void testRoundingToTenMinutes() {
        DateTime dt1 = DateTime.newInstance(2024, 11, 21, 9, 31, 0);
        DateTime dt2 = DateTime.newInstance(2024, 11, 21, 9, 36, 0);

        DateTimeRounder.RoundingRequest req1 = new DateTimeRounder.RoundingRequest();
        req1.inputDateTime = dt1;
        req1.intervalMinutes = 10;

        DateTimeRounder.RoundingRequest req2 = new DateTimeRounder.RoundingRequest();
        req2.inputDateTime = dt2;
        req2.intervalMinutes = 10;

        Test.startTest();
        List<DateTime> results = DateTimeRounder.roundToInterval(new List<DateTimeRounder.RoundingRequest>{req1, req2});
        Test.stopTest();

        // First datetime should round down to 9:30
        System.assertEquals(DateTime.newInstance(2024, 11, 21, 9, 30, 0), results[0]);
        // Second datetime should round up to 9:40
        System.assertEquals(DateTime.newInstance(2024, 11, 21, 9, 40, 0), results[1]);
    }
}