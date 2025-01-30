# FieldServiceTestData Class

`ISTEST`

Created by Frederik on 11/5/2024.

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
 * Created by Frederik on 11/5/2024.
 */

@IsTest
public class FieldServiceTestData {
    public static Account createTestAccount(String name, String recordTypeName, Boolean doInsert) {
        Account account = new Account();
        account.Name = name;
        account.RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get(recordTypeName).getRecordTypeId();
        if (doInsert) {
            insert account;
        }
        return account;
    }

    public static Contact createTestContact(String name, Boolean doInsert) {
        Contact contact = new Contact();
        contact.FirstName = name;
        contact.LastName = name;
        if (doInsert) {
            insert contact;
        }
        return contact;
    }

    public static Product2 createTestProduct(String name, String recordTypeName, Boolean doInsert) {
        Product2 product = new Product2();
        product.Name = name;
        product.RecordTypeId = Schema.SObjectType.Product2.getRecordTypeInfosByName().get(recordTypeName).getRecordTypeId();
        product.IsActive = true;
        if (doInsert) {
            insert product;
        }
        return product;
    }

    public static Product2 linkServiceToPackageProduct(String mainProduct, String serviceProduct, Boolean doInsert) {

        Product2 serviceProd = new Product2(Id = serviceProduct, Service_Package_Product__c = mainProduct);
        if (doInsert) {
            update serviceProd;
        }
        return serviceProd;

    }

    public static String createATAKProject(String name, String ATAKProjectId, Boolean doInsert) {
        ATAK_Project__c atakProject = new ATAK_Project__c();
        atakProject.SubProject_ATAK__c = ATAKProjectId;
        atakProject.Subproject_Name__c = ATAKProjectId;
        if (doInsert) {
            insert atakProject;
        }
        return atakProject.SubProject_ATAK__c;
    }

    public static List<PricebookEntry> createTestPricebookEntries( List<Product2> products, Double unitPrice, Boolean doInsert) {
        List<PricebookEntry> pricebookEntries = new List<PricebookEntry>();
        String pricebookId = getStandardPricebookId();
        for (Product2 product : products) {
            PricebookEntry pricebookEntry = createTestPricebookEntry(pricebookId, product.Id, unitPrice);
            pricebookEntries.add(pricebookEntry);
        }
        if (doInsert) {
            insert pricebookEntries;
        }
        return pricebookEntries;
    }

    public static PricebookEntry createTestPricebookEntry(String pricebookId, String productId, Double unitPrice) {
        PricebookEntry pricebookEntry = new PricebookEntry();
        pricebookEntry.Pricebook2Id = pricebookId;
        pricebookEntry.Product2Id = productId;
        pricebookEntry.UnitPrice = unitPrice;
        pricebookEntry.IsActive = true;
        pricebookEntry.UseStandardPrice = false;
        return pricebookEntry;
    }

    public static String getStandardPricebookId() {
        String pricebookId = Test.getStandardPricebookId();
        Pricebook2 pb = new Pricebook2(Id = pricebookId, IsActive = true);
        update pb;
        return pb.Id;
    }

    public static User createTestUser(String name, String profileName, Boolean doInsert) {
        Profile profile = [SELECT Id FROM Profile WHERE Name = :profileName LIMIT 1];
        User user = new User();
        user.FirstName = name;
        user.LastName = name;
        user.Email = name + '@test.com';
        user.Username = name + '@krinkels.com.'+ String.valueOf(System.currentTimeMillis());
        user.Alias = name.substring(0, 5);
        user.CommunityNickname = name;
        user.LocaleSidKey = 'en_US';
        user.TimeZoneSidKey = 'America/Los_Angeles';
        user.EmailEncodingKey = 'UTF-8';
        user.ProfileId = profile.Id;
        user.LanguageLocaleKey = 'en_US';
        user.TimeZoneSidKey = 'America/Los_Angeles';
        user.EmailEncodingKey = 'ISO-8859-1';
        user.ATAK_Code__c = 'GATAK';
        user.ATAK_Id__c = 'GATAK';
        user.ProfileId = profile.Id;
        if (doInsert) {
            insert user;
        }
        return user;
    }

    public static void assignFieldServicePermissionSetLicense(Id userId) {
        // Assign FSL Permission Set License
        List<PermissionSet> permissionSets = [SELECT Id FROM PermissionSet WHERE Label IN ('Field Service Mobile License', 'Field Service Resource License', 'Field Service Resource Permissions')];
        List<PermissionSetAssignment> permissionSetAssignments = new List<PermissionSetAssignment>();
        for(PermissionSet permissionSet : permissionSets){
            PermissionSetAssignment permissionSetAssignment = new PermissionSetAssignment();
            permissionSetAssignment.AssigneeId = userId;
            permissionSetAssignment.PermissionSetId = permissionSet.Id;
            permissionSetAssignments.add(permissionSetAssignment);
        }
        insert permissionSetAssignments;
    }

    public static ServiceResource createTestServiceResource(String name, String recordTypeName, Boolean doInsert, String userId) {
        ServiceResource serviceResource = new ServiceResource();
        serviceResource.Name = name;
        serviceResource.ResourceType = 'T';
        serviceResource.IsActive = true;
        serviceResource.RelatedRecordId = userId;
        if (doInsert) {
            insert serviceResource;
        }
        return serviceResource;
    }

    /**
 * Creates a test TimeSheet
 * @param serviceResourceId The Id of the ServiceResource
 * @param startDate The start date of the TimeSheet
 * @param doInsert Whether to insert the record
 * @return TimeSheet The created TimeSheet
 */
    public static TimeSheet createTestTimeSheet(Id serviceResourceId, Date startDate, Boolean doInsert) {
        TimeSheet timeSheet = new TimeSheet(
                ServiceResourceId = serviceResourceId,
                StartDate = startDate,
                EndDate = startDate.addDays(6)  // Weekly timesheet
        );

        if(doInsert) {
            insert timeSheet;
        }
        return timeSheet;
    }


    /**
     * Creates a test TimeSheetEntry
     * @param timeSheetId The Id of the TimeSheet
     * @param startTime The start time of the entry
     * @param endTime The end time of the entry
     * @param doInsert Whether to insert the record
     * @return TimeSheetEntry The created TimeSheetEntry
     */
    public static TimeSheetEntry createTestTimeSheetEntry(Id timeSheetId, DateTime startTime,
            DateTime endTime, Boolean doInsert) {
        TimeSheetEntry entry = new TimeSheetEntry(
                TimeSheetId = timeSheetId,
                StartTime = startTime,
                EndTime = endTime,
                Type = 'Work'  // or other valid types as needed
        );

        if(doInsert) {
            insert entry;
        }
        return entry;
    }

    /**
     * Creates a test ResourceAbsence
     * @param serviceResourceId The Id of the ServiceResource
     * @param startTime The start time of the absence
     * @param endTime The end time of the absence
     * @param doInsert Whether to insert the record
     * @return ResourceAbsence The created ResourceAbsence
     */
    public static ResourceAbsence createTestResourceAbsence(Id serviceResourceId, DateTime startTime,
            DateTime endTime, Boolean doInsert) {
        ResourceAbsence absence = new ResourceAbsence(
                ResourceId = serviceResourceId,
                Start = startTime,
                End = endTime,
                Type = 'Break'  // or other valid types as needed
        );

        if(doInsert) {
            insert absence;
        }
        return absence;
    }

    /**
     * Creates a complete set of test data for TimeSheet calculations
     * @return Map<String, Object> Map containing all created test records
     */
    public static Map<String, Object> createTimeSheetTestData() {
        Map<String, Object> testData = new Map<String, Object>();

        // Create user and assign permissions in first transaction
        User testUser;
        System.runAs(new User(Id = UserInfo.getUserId())) {
            testUser = createTestUser('TestFSL', 'Standard User', true);
            assignFieldServicePermissionSetLicense(testUser.Id);
        }
        testData.put('User', testUser);

        // Create regular objects as the test user
        System.runAs(testUser) {
            // Create Service Resource
            ServiceResource resource = createTestServiceResource('Test Resource', null, true, testUser.Id);
            testData.put('ServiceResource', resource);

            ServiceCrew crew = createTestServiceCrew('Test Crew', true);
            testData.put('ServiceCrew', crew);

            ServiceCrewMember crewMember = createTestServiceCrewMember(crew.Id, resource.Id, true);
            testData.put('ServiceCrewMember', crewMember);

            // Create TimeSheet
            TimeSheet timeSheet = createTestTimeSheet(resource.Id, Date.today(), true);
            testData.put('TimeSheet', timeSheet);

            // Create TimeSheet Entry
            DateTime startTime = DateTime.now().addHours(-4);
            DateTime endTime = DateTime.now();
            TimeSheetEntry entry = createTestTimeSheetEntry(timeSheet.Id, startTime, endTime, true);
            testData.put('TimeSheetEntry', entry);

            // Create Resource Absence
            ResourceAbsence absence = createTestResourceAbsence(resource.Id, startTime.addHours(1),
                    startTime.addHours(2), true);
            testData.put('ResourceAbsence', absence);
        }

        return testData;
    }

    // Add these methods to FieldServiceTestData class

    /**
     * Creates a test ServiceTerritory
     * @param name The name of the territory
     * @param isActive Whether the territory is active
     * @param operatingHoursId The ID of the OperatingHours record
     * @param doInsert Whether to insert the record
     * @return ServiceTerritory The created ServiceTerritory
     */
    public static ServiceTerritory createTestServiceTerritory(String name, Boolean isActive, Id operatingHoursId, Boolean doInsert) {
        ServiceTerritory territory = new ServiceTerritory(
                Name = name,
                IsActive = isActive,
                OperatingHoursId = operatingHoursId
        );

        if(doInsert) {
            insert territory;
        }
        return territory;
    }

    public static ServiceCrew createTestServiceCrew(String name, Boolean doInsert) {
        ServiceCrew crew = new ServiceCrew(
                Name = name,
                CrewSize = 1
        );

        if(doInsert) {
            insert crew;
        }
        return crew;
    }

    public static ServiceCrewMember createTestServiceCrewMember(Id crewId, Id resourceId, Boolean doInsert) {
        ServiceCrewMember crewMember = new ServiceCrewMember(
                ServiceCrewId = crewId,
                ServiceResourceId = resourceId,
                IsLeader = true,
                StartDate = Date.today()
        );

        if(doInsert) {
            insert crewMember;
        }
        return crewMember;
    }

    /**
     * Creates a test OperatingHours record
     * @param name The name of the operating hours
     * @param timezone The timezone
     * @param doInsert Whether to insert the record
     * @return OperatingHours The created OperatingHours
     */
    public static OperatingHours createTestOperatingHours(String name, String timezone, Boolean doInsert) {
        OperatingHours oh = new OperatingHours(
                Name = name,
                TimeZone = timezone
        );

        if(doInsert) {
            insert oh;
        }
        return oh;
    }

    /**
     * Creates a test ServiceTerritoryMember
     * @param territoryId The ID of the ServiceTerritory
     * @param resourceId The ID of the ServiceResource
     * @param effectiveStartDate The start date of the membership
     * @param doInsert Whether to insert the record
     * @return ServiceTerritoryMember The created ServiceTerritoryMember
     */
    public static ServiceTerritoryMember createTestServiceTerritoryMember(
            Id territoryId,
            Id resourceId,
            Datetime effectiveStartDate,
            Boolean doInsert
    ) {
        ServiceTerritoryMember stm = new ServiceTerritoryMember(
                ServiceTerritoryId = territoryId,
                ServiceResourceId = resourceId,
                EffectiveStartDate = effectiveStartDate,
                TerritoryType = 'P'  // P for Primary
        );

        if(doInsert) {
            insert stm;
        }
        return stm;
    }
}
```

## Methods
### `createTestAccount(name, recordTypeName, doInsert)`

#### Signature
```apex
public static Account createTestAccount(String name, String recordTypeName, Boolean doInsert)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| name | String |  |
| recordTypeName | String |  |
| doInsert | Boolean |  |

#### Return Type
**[Account](../objects/Account.md)**

---

### `createTestContact(name, doInsert)`

#### Signature
```apex
public static Contact createTestContact(String name, Boolean doInsert)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| name | String |  |
| doInsert | Boolean |  |

#### Return Type
**[Contact](../objects/Contact.md)**

---

### `createTestProduct(name, recordTypeName, doInsert)`

#### Signature
```apex
public static Product2 createTestProduct(String name, String recordTypeName, Boolean doInsert)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| name | String |  |
| recordTypeName | String |  |
| doInsert | Boolean |  |

#### Return Type
**[Product2](../objects/Product2.md)**

---

### `linkServiceToPackageProduct(mainProduct, serviceProduct, doInsert)`

#### Signature
```apex
public static Product2 linkServiceToPackageProduct(String mainProduct, String serviceProduct, Boolean doInsert)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| mainProduct | String |  |
| serviceProduct | String |  |
| doInsert | Boolean |  |

#### Return Type
**[Product2](../objects/Product2.md)**

---

### `createATAKProject(name, ATAKProjectId, doInsert)`

#### Signature
```apex
public static String createATAKProject(String name, String ATAKProjectId, Boolean doInsert)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| name | String |  |
| ATAKProjectId | String |  |
| doInsert | Boolean |  |

#### Return Type
**String**

---

### `createTestPricebookEntries(products, unitPrice, doInsert)`

#### Signature
```apex
public static List<PricebookEntry> createTestPricebookEntries(List<Product2> products, Double unitPrice, Boolean doInsert)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| products | List&lt;Product2&gt; |  |
| unitPrice | Double |  |
| doInsert | Boolean |  |

#### Return Type
**List&lt;PricebookEntry&gt;**

---

### `createTestPricebookEntry(pricebookId, productId, unitPrice)`

#### Signature
```apex
public static PricebookEntry createTestPricebookEntry(String pricebookId, String productId, Double unitPrice)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| pricebookId | String |  |
| productId | String |  |
| unitPrice | Double |  |

#### Return Type
**[PricebookEntry](../objects/PricebookEntry.md)**

---

### `getStandardPricebookId()`

#### Signature
```apex
public static String getStandardPricebookId()
```

#### Return Type
**String**

---

### `createTestUser(name, profileName, doInsert)`

#### Signature
```apex
public static User createTestUser(String name, String profileName, Boolean doInsert)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| name | String |  |
| profileName | String |  |
| doInsert | Boolean |  |

#### Return Type
**[User](../objects/User.md)**

---

### `assignFieldServicePermissionSetLicense(userId)`

#### Signature
```apex
public static void assignFieldServicePermissionSetLicense(Id userId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| userId | Id |  |

#### Return Type
**void**

---

### `createTestServiceResource(name, recordTypeName, doInsert, userId)`

#### Signature
```apex
public static ServiceResource createTestServiceResource(String name, String recordTypeName, Boolean doInsert, String userId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| name | String |  |
| recordTypeName | String |  |
| doInsert | Boolean |  |
| userId | String |  |

#### Return Type
**[ServiceResource](../objects/ServiceResource.md)**

---

### `createTestTimeSheet(serviceResourceId, startDate, doInsert)`

Creates a test TimeSheet

#### Signature
```apex
public static TimeSheet createTestTimeSheet(Id serviceResourceId, Date startDate, Boolean doInsert)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| serviceResourceId | Id | The Id of the ServiceResource |
| startDate | Date | The start date of the TimeSheet |
| doInsert | Boolean | Whether to insert the record |

#### Return Type
**[TimeSheet](../objects/TimeSheet.md)**

TimeSheet The created TimeSheet

---

### `createTestTimeSheetEntry(timeSheetId, startTime, endTime, doInsert)`

Creates a test TimeSheetEntry

#### Signature
```apex
public static TimeSheetEntry createTestTimeSheetEntry(Id timeSheetId, DateTime startTime, DateTime endTime, Boolean doInsert)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| timeSheetId | Id | The Id of the TimeSheet |
| startTime | DateTime | The start time of the entry |
| endTime | DateTime | The end time of the entry |
| doInsert | Boolean | Whether to insert the record |

#### Return Type
**[TimeSheetEntry](../objects/TimeSheetEntry.md)**

TimeSheetEntry The created TimeSheetEntry

---

### `createTestResourceAbsence(serviceResourceId, startTime, endTime, doInsert)`

Creates a test ResourceAbsence

#### Signature
```apex
public static ResourceAbsence createTestResourceAbsence(Id serviceResourceId, DateTime startTime, DateTime endTime, Boolean doInsert)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| serviceResourceId | Id | The Id of the ServiceResource |
| startTime | DateTime | The start time of the absence |
| endTime | DateTime | The end time of the absence |
| doInsert | Boolean | Whether to insert the record |

#### Return Type
**[ResourceAbsence](../objects/ResourceAbsence.md)**

ResourceAbsence The created ResourceAbsence

---

### `createTimeSheetTestData()`

Creates a complete set of test data for TimeSheet calculations

#### Signature
```apex
public static Map<String,Object> createTimeSheetTestData()
```

#### Return Type
**Map&lt;String,Object&gt;**

Map&lt;String, Object&gt; Map containing all created test records

---

### `createTestServiceTerritory(name, isActive, operatingHoursId, doInsert)`

Creates a test ServiceTerritory

#### Signature
```apex
public static ServiceTerritory createTestServiceTerritory(String name, Boolean isActive, Id operatingHoursId, Boolean doInsert)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| name | String | The name of the territory |
| isActive | Boolean | Whether the territory is active |
| operatingHoursId | Id | The ID of the OperatingHours record |
| doInsert | Boolean | Whether to insert the record |

#### Return Type
**[ServiceTerritory](../objects/ServiceTerritory.md)**

ServiceTerritory The created ServiceTerritory

---

### `createTestServiceCrew(name, doInsert)`

#### Signature
```apex
public static ServiceCrew createTestServiceCrew(String name, Boolean doInsert)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| name | String |  |
| doInsert | Boolean |  |

#### Return Type
**[ServiceCrew](../objects/ServiceCrew.md)**

---

### `createTestServiceCrewMember(crewId, resourceId, doInsert)`

#### Signature
```apex
public static ServiceCrewMember createTestServiceCrewMember(Id crewId, Id resourceId, Boolean doInsert)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| crewId | Id |  |
| resourceId | Id |  |
| doInsert | Boolean |  |

#### Return Type
**[ServiceCrewMember](../objects/ServiceCrewMember.md)**

---

### `createTestOperatingHours(name, timezone, doInsert)`

Creates a test OperatingHours record

#### Signature
```apex
public static OperatingHours createTestOperatingHours(String name, String timezone, Boolean doInsert)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| name | String | The name of the operating hours |
| timezone | String | The timezone |
| doInsert | Boolean | Whether to insert the record |

#### Return Type
**OperatingHours**

OperatingHours The created OperatingHours

---

### `createTestServiceTerritoryMember(territoryId, resourceId, effectiveStartDate, doInsert)`

Creates a test ServiceTerritoryMember

#### Signature
```apex
public static ServiceTerritoryMember createTestServiceTerritoryMember(Id territoryId, Id resourceId, Datetime effectiveStartDate, Boolean doInsert)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| territoryId | Id | The ID of the ServiceTerritory |
| resourceId | Id | The ID of the ServiceResource |
| effectiveStartDate | Datetime | The start date of the membership |
| doInsert | Boolean | Whether to insert the record |

#### Return Type
**[ServiceTerritoryMember](../objects/ServiceTerritoryMember.md)**

ServiceTerritoryMember The created ServiceTerritoryMember