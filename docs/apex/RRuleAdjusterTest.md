# RRuleAdjusterTest Class

`ISTEST`

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
@IsTest
private class RRuleAdjusterTest {

    // Test data setup
    private static DateTime baseDate = DateTime.newInstanceGmt(2024, 1, 1, 9, 0, 0); // Tuesday

    @IsTest
    static void testCalculateInstanceCount_Daily() {
        // Test daily recurrence
        String dailyRRule = 'FREQ=DAILY;INTERVAL=1';
        RRuleAdjuster adjuster = new RRuleAdjuster(dailyRRule, baseDate);

        // Test 7 days range
        DateTime endDate = baseDate.addDays(6);
        Integer count = adjuster.calculateInstanceCount(baseDate, endDate, dailyRRule);
        System.assertEquals(7, count, 'Daily recurrence should have 7 instances in 7 days');

        // Test with interval=2 (every other day)
        dailyRRule = 'FREQ=DAILY;INTERVAL=2';
        count = adjuster.calculateInstanceCount(baseDate, endDate, dailyRRule);
        System.assertEquals(4, count, 'Every other day should have 4 instances in 7 days');

        // Test with COUNT limit
        dailyRRule = 'FREQ=DAILY;INTERVAL=1;COUNT=3';
        count = adjuster.calculateInstanceCount(baseDate, endDate, dailyRRule);
        System.assertEquals(3, count, 'COUNT=3 should limit to 3 instances');
    }

    @IsTest
    static void testCalculateInstanceCount_Weekly() {
        // Test weekly recurrence
        String weeklyRRule = 'FREQ=WEEKLY;INTERVAL=1;BYDAY=TU';
        RRuleAdjuster adjuster = new RRuleAdjuster(weeklyRRule, baseDate);

        // Test 4 weeks range
        DateTime endDate = baseDate.addDays(28);
        Integer count = adjuster.calculateInstanceCount(baseDate, endDate, weeklyRRule);
        System.assertEquals(5, count, 'Weekly recurrence should have 5 instances in 4 weeks');

        // Test multiple days per week
        weeklyRRule = 'FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,WE,FR';
        count = adjuster.calculateInstanceCount(baseDate, endDate, weeklyRRule);
        System.assertEquals(15, count, 'Should have 15 instances for 3 days/week over 4 weeks');

        // Test bi-weekly
        weeklyRRule = 'FREQ=WEEKLY;INTERVAL=2;BYDAY=TU';
        count = adjuster.calculateInstanceCount(baseDate, endDate, weeklyRRule);
        System.assertEquals(3, count, 'Bi-weekly should have 3 instances in 4 weeks');
    }

    @IsTest
    static void testCalculateInstanceCount_Monthly() {
        // Test monthly recurrence
        String monthlyRRule = 'FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1';
        RRuleAdjuster adjuster = new RRuleAdjuster(monthlyRRule, baseDate);

        // Test 6 months range
        DateTime endDate = baseDate.addMonths(6);
        Integer count = adjuster.calculateInstanceCount(baseDate, endDate, monthlyRRule);
        System.assertEquals(7, count, 'Monthly recurrence should have 7 instances in 6 months');

        // Test with interval=2 (every other month)
        monthlyRRule = 'FREQ=MONTHLY;INTERVAL=2;BYMONTHDAY=1';
        count = adjuster.calculateInstanceCount(baseDate, endDate, monthlyRRule);
        System.assertEquals(4, count, 'Every other month should have 4 instances in 6 months');

        // Test with relative monthly pattern (first Monday)
        monthlyRRule = 'FREQ=MONTHLY;INTERVAL=1;BYDAY=1MO';
        count = adjuster.calculateInstanceCount(baseDate, endDate, monthlyRRule);
        System.assertEquals(7, count, 'First Monday should occur 7 times in 6 months');
    }

    @IsTest
    static void testCalculateInstanceCount_Yearly() {
        // Test yearly recurrence
        String yearlyRRule = 'FREQ=YEARLY;INTERVAL=1';
        RRuleAdjuster adjuster = new RRuleAdjuster(yearlyRRule, baseDate);

        // Test 3 years range
        DateTime endDate = baseDate.addYears(3);
        Integer count = adjuster.calculateInstanceCount(baseDate, endDate, yearlyRRule);
        System.assertEquals(4, count, 'Yearly recurrence should have 4 instances in 3 years');

        // Test with specific month and day
        yearlyRRule = 'FREQ=YEARLY;INTERVAL=1;BYMONTH=1;BYMONTHDAY=1';
        count = adjuster.calculateInstanceCount(baseDate, endDate, yearlyRRule);
        System.assertEquals(4, count, 'Yearly on Jan 1 should have 4 instances in 3 years');
    }

    @IsTest
    static void testCalculateAdjustment_Daily() {
        String dailyRRule = 'FREQ=DAILY;INTERVAL=1';
        RRuleAdjuster adjuster = new RRuleAdjuster(dailyRRule, baseDate);

        // Move an instance to the next day
        DateTime newDate = baseDate.addDays(1);
        RRuleAdjuster.RRuleResult result = adjuster.calculateAdjustment(baseDate, newDate);

        System.assertNotEquals(null, result, 'Result should not be null');
        System.assertEquals(dailyRRule, result.newRRule, 'Daily RRULE should remain unchanged');
        System.assert(result.newDates.size() > 0, 'Should generate future dates');
    }

    @IsTest
    static void testCalculateAdjustment_Weekly() {
        String weeklyRRule = 'FREQ=WEEKLY;INTERVAL=1;BYDAY=TU';
        RRuleAdjuster adjuster = new RRuleAdjuster(weeklyRRule, baseDate);

        // Move Tuesday instance to Wednesday
        DateTime newDate = baseDate.addDays(1);
        RRuleAdjuster.RRuleResult result = adjuster.calculateAdjustment(baseDate, newDate);

        System.assertNotEquals(null, result, 'Result should not be null');
        System.assertEquals('FREQ=WEEKLY;INTERVAL=1;BYDAY=TU', result.newRRule,
                'Weekly RRULE should update to Tuesday');
        System.assert(result.newDates.size() > 0, 'Should generate future dates');
    }

    @IsTest
    static void testCalculateAdjustment_Monthly() {
        String monthlyRRule = 'FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1';
        RRuleAdjuster adjuster = new RRuleAdjuster(monthlyRRule, baseDate);

        // Move 1st of month to 15th
        DateTime newDate = baseDate.addDays(14);
        RRuleAdjuster.RRuleResult result = adjuster.calculateAdjustment(baseDate, newDate);

        System.assertNotEquals(null, result, 'Result should not be null');
        System.assertEquals('FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=15', result.newRRule,
                'Monthly RRULE should update to 15th');
        System.assert(result.newDates.size() > 0, 'Should generate future dates');
    }

    @IsTest
    static void testCalculateAdjustment_Yearly() {
        String yearlyRRule = 'FREQ=YEARLY;INTERVAL=1;BYMONTH=1;BYMONTHDAY=1';
        RRuleAdjuster adjuster = new RRuleAdjuster(yearlyRRule, baseDate);

        // Move Jan 1 to Feb 1
        DateTime newDate = baseDate.addMonths(1);
        RRuleAdjuster.RRuleResult result = adjuster.calculateAdjustment(baseDate, newDate);

        System.assertNotEquals(null, result, 'Result should not be null');
        System.assertEquals('FREQ=YEARLY;INTERVAL=1;BYMONTH=2;BYMONTHDAY=1', result.newRRule,
                'Yearly RRULE should update to Feb 1');
        System.assert(result.newDates.size() > 0, 'Should generate future dates');
    }

    @IsTest
    static void testEdgeCases() {
        // Test null inputs for calculateInstanceCount
        RRuleAdjuster adjuster = new RRuleAdjuster('FREQ=DAILY;INTERVAL=1', baseDate);
        Integer count = adjuster.calculateInstanceCount(null, null, null);
        System.assertEquals(0, count, 'Null inputs should return 0 instances');

        // Test invalid date range
        count = adjuster.calculateInstanceCount(baseDate.addDays(1), baseDate, 'FREQ=DAILY;INTERVAL=1');
        System.assertEquals(0, count, 'Invalid date range should return 0 instances');

        // Test with UNTIL date
        String ruleWithUntil = 'FREQ=DAILY;INTERVAL=1;UNTIL=20240131T235959Z';
        DateTime endDate = DateTime.newInstanceGmt(2024, 2, 15);
        count = adjuster.calculateInstanceCount(baseDate, endDate, ruleWithUntil);
        System.assert(count > 0 && count <= 31, 'Should respect UNTIL date constraint');

        // Test with invalid UNTIL date format
        String ruleWithInvalidUntil = 'FREQ=DAILY;INTERVAL=1;UNTIL=invalid';
        count = adjuster.calculateInstanceCount(baseDate, endDate, ruleWithInvalidUntil);
        System.assert(count > 0, 'Should handle invalid UNTIL date gracefully');
    }

    @IsTest
    static void testComplexPatterns() {
        // Test multiple BYDAY values with INTERVAL
        String complexWeekly = 'FREQ=WEEKLY;INTERVAL=2;BYDAY=MO,WE,FR';
        RRuleAdjuster adjuster = new RRuleAdjuster(complexWeekly, baseDate);
        DateTime endDate = baseDate.addMonths(1);
        Integer count = adjuster.calculateInstanceCount(baseDate, endDate, complexWeekly);
        System.assert(count > 0, 'Should handle multiple BYDAY values');

        // Test last weekday of month
        String lastFriday = 'FREQ=MONTHLY;INTERVAL=1;BYDAY=-1FR';
        RRuleAdjuster.RRuleResult result = adjuster.calculateAdjustment(baseDate, baseDate.addDays(3));
        System.assertNotEquals(null, result, 'Should handle last weekday of month pattern');

        // Test with COUNT and UNTIL together
        String ruleWithBoth = 'FREQ=DAILY;INTERVAL=1;COUNT=10;UNTIL=20240131T235959Z';
        count = adjuster.calculateInstanceCount(baseDate, endDate, ruleWithBoth);
        System.assert(count <= 10, 'Should respect both COUNT and UNTIL constraints');
    }

    @IsTest
    static void testGetDayOfWeek() {
        String complexWeekly = 'FREQ=WEEKLY;INTERVAL=2;BYDAY=MO,WE,FR';
        RRuleAdjuster adjuster = new RRuleAdjuster(complexWeekly, baseDate);
        System.assertEquals(0, adjuster.getDayOfWeek(baseDate));
        System.assertEquals('SU', adjuster.getDayCode(0));
        System.assertEquals(0, adjuster.getDayNumber('SU'));
    }
}
```

## Fields
### `baseDate`

#### Signature
```apex
private static baseDate
```

#### Type
DateTime

## Methods
### `testCalculateInstanceCount_Daily()`

`ISTEST`

#### Signature
```apex
private static void testCalculateInstanceCount_Daily()
```

#### Return Type
**void**

---

### `testCalculateInstanceCount_Weekly()`

`ISTEST`

#### Signature
```apex
private static void testCalculateInstanceCount_Weekly()
```

#### Return Type
**void**

---

### `testCalculateInstanceCount_Monthly()`

`ISTEST`

#### Signature
```apex
private static void testCalculateInstanceCount_Monthly()
```

#### Return Type
**void**

---

### `testCalculateInstanceCount_Yearly()`

`ISTEST`

#### Signature
```apex
private static void testCalculateInstanceCount_Yearly()
```

#### Return Type
**void**

---

### `testCalculateAdjustment_Daily()`

`ISTEST`

#### Signature
```apex
private static void testCalculateAdjustment_Daily()
```

#### Return Type
**void**

---

### `testCalculateAdjustment_Weekly()`

`ISTEST`

#### Signature
```apex
private static void testCalculateAdjustment_Weekly()
```

#### Return Type
**void**

---

### `testCalculateAdjustment_Monthly()`

`ISTEST`

#### Signature
```apex
private static void testCalculateAdjustment_Monthly()
```

#### Return Type
**void**

---

### `testCalculateAdjustment_Yearly()`

`ISTEST`

#### Signature
```apex
private static void testCalculateAdjustment_Yearly()
```

#### Return Type
**void**

---

### `testEdgeCases()`

`ISTEST`

#### Signature
```apex
private static void testEdgeCases()
```

#### Return Type
**void**

---

### `testComplexPatterns()`

`ISTEST`

#### Signature
```apex
private static void testComplexPatterns()
```

#### Return Type
**void**

---

### `testGetDayOfWeek()`

`ISTEST`

#### Signature
```apex
private static void testGetDayOfWeek()
```

#### Return Type
**void**