# AccountImagesController Class

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
public with sharing class AccountImagesController {
    public class ImageWrapper {
        @AuraEnabled public String Id;
        @AuraEnabled public String Title;
        @AuraEnabled public String contentVersionId;  // Added to store the version ID
        @AuraEnabled public String contentUrl;        // URL to load the image
    }

    @AuraEnabled
    public static List<ImageWrapper> getAccountImages(Id accountId) {
        System.debug('Account Id: ' + accountId);

        List<ContentDocumentLink> links = [
                SELECT ContentDocumentId
                FROM ContentDocumentLink
                WHERE LinkedEntityId = :accountId
        ];

        Set<Id> documentIds = new Set<Id>();
        for(ContentDocumentLink link : links) {
            documentIds.add(link.ContentDocumentId);
        }

        List<ContentVersion> versions = [
                SELECT Id, Title, FileType, ContentDocumentId
                FROM ContentVersion
                WHERE ContentDocumentId IN :documentIds
                AND IsLatest = true
                AND FileType IN ('PNG', 'JPG', 'JPEG', 'GIF')
                ORDER BY LastModifiedDate DESC
                LIMIT 10
        ];

        List<ImageWrapper> wrappers = new List<ImageWrapper>();
        String baseUrl = URL.getOrgDomainUrl().toExternalForm();

        for(ContentVersion version : versions) {
            try {
                ImageWrapper wrapper = new ImageWrapper();
                wrapper.Id = version.ContentDocumentId;
                wrapper.Title = version.Title;
                wrapper.contentVersionId = version.Id;
                // Create a URL that will serve the image content
                wrapper.contentUrl = baseUrl + '/sfc/servlet.shepherd/version/download/' + version.Id;
                wrappers.add(wrapper);
            } catch(Exception e) {
                System.debug('Error processing image: ' + version.Title + ' - ' + e.getMessage());
                continue;
            }
        }

        return wrappers;
    }
}
```

## Methods
### `getAccountImages(accountId)`

`AURAENABLED`

#### Signature
```apex
public static List<ImageWrapper> getAccountImages(Id accountId)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| accountId | Id |  |

#### Return Type
**List&lt;ImageWrapper&gt;**

## Classes
### ImageWrapper Class

#### Fields
##### `Id`

`AURAENABLED`

###### Signature
```apex
public Id
```

###### Type
String

---

##### `Title`

`AURAENABLED`

###### Signature
```apex
public Title
```

###### Type
String

---

##### `contentVersionId`

`AURAENABLED`

###### Signature
```apex
public contentVersionId
```

###### Type
String

---

##### `contentUrl`

`AURAENABLED`

###### Signature
```apex
public contentUrl
```

###### Type
String