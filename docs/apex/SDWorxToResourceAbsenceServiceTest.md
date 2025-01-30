# SDWorxToResourceAbsenceServiceTest Class

`ISTEST`

Created by Frederik on 12/18/2024.

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * Created by Frederik on 12/18/2024.
 */

@IsTest
private class SDWorxToResourceAbsenceServiceTest {
    @IsTest
    static void testcreateAbsenceRecords() {

        User testUser;
        System.runAs(new User(Id = UserInfo.getUserId())) {
            testUser = FieldServiceTestData.createTestUser('TestUser', 'Standard User', true);
            FieldServiceTestData.assignFieldServicePermissionSetLicense(testUser.Id);
        }

        System.runAs(testUser) {
            ServiceResource resource = FieldServiceTestData.createTestServiceResource('Test Resource', null, true, testUser.Id);
            TimeSheet timeSheet = FieldServiceTestData.createTestTimeSheet(resource.Id, Date.today(), true);
            List<SD_Import__c> importDataList = new List<SD_Import__c>();
            SD_Import__c importData = new SD_Import__c();
            importData.ArbeidsContractWerknemer__c = 'ATAK';
            importData.KalenderdagDat__c = String.valueOf(Date.today());
            importData.AfwezigheidDagdeelKode__c = 'Voormiddag';
            importData.AfwezigheidPresturen__c = 4;
            importData.PersoonId__c = 12345;
            importData.AfwezigheidscodelabelCode__c = 'RAND1';
            importDataList.add(importData);

            SD_Import__c importData2 = new SD_Import__c();
            importData2.ArbeidsContractWerknemer__c = 'ATAK';
            importData2.KalenderdagDat__c = String.valueOf(Date.today());
            importData2.AfwezigheidDagdeelKode__c = 'Volledige dag';
            importData2.AfwezigheidPresturen__c = 8;
            importData2.PersoonId__c = 12345;
            importData2.AfwezigheidscodelabelCode__c = 'RAND2';
            importDataList.add(importData2);

            SD_Import__c importData3 = new SD_Import__c();
            importData3.ArbeidsContractWerknemer__c = 'ATAK';
            importData3.KalenderdagDat__c = String.valueOf(Date.today());
            importData3.AfwezigheidDagdeelKode__c = 'Namiddag';
            importData3.AfwezigheidPresturen__c = 4;
            importData3.PersoonId__c = 12345;
            importData3.AfwezigheidscodelabelCode__c = 'RAND3';
            importDataList.add(importData3);

            insert importDataList;

            SDWorxToResourceAbsenceService.createAbsenceRecords(importDataList);
        }
    }
}
```

## Methods
### `testcreateAbsenceRecords()`

`ISTEST`

#### Signature
```apex
private static void testcreateAbsenceRecords()
```

#### Return Type
**void**