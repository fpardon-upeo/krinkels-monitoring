# AccountTriggerHandlerTest Class

`ISTEST`

Created by Frederik on 12/18/2024. 
Description: 
Change Log: 
Dependencies:

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
* Created by Frederik on 12/18/2024.
* Description:
* Change Log:
* Dependencies:
*/

@IsTest
public  class AccountTriggerHandlerTest {

    @IsTest
    public static void testCreateOperatingHoursAndSlots(){

        Id operationalCustomerRTId = Schema.SObjectType.Account.getRecordTypeInfosByDeveloperName()
                .get('Operational_Account')
                .getRecordTypeId();



        Account acc = new Account();
        acc.Name = 'Test Account';
        acc.RecordTypeId = operationalCustomerRTId;

        insert acc;

        Test.startTest();
        Account insertedAccount = [SELECT Id, OperatingHoursId FROM Account WHERE Id = :acc.Id];
        System.assertNotEquals(insertedAccount.OperatingHoursId, null);

    }

}
```

## Methods
### `testCreateOperatingHoursAndSlots()`

`ISTEST`

#### Signature
```apex
public static void testCreateOperatingHoursAndSlots()
```

#### Return Type
**void**