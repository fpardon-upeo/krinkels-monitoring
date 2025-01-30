# PDFButler_ConvertService Class

Created by Frederik on 1/7/2025. 
Description: 
Change Log: 
Dependencies:

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
/**
* Created by Frederik on 1/7/2025.
* Description:
* Change Log:
* Dependencies:
*/

public without sharing class PDFButler_ConvertService {

    public static void createServiceReport(String recordId, String docConfig, String language){

        Boolean success = false;

        try {
        cadmus_core.ConvertController.ConvertDataModel cdm = new cadmus_core.ConvertController.ConvertDataModel();

        String altName = 'Dutch';
        if(language == 'nl'){
            altName = 'Dutch';
        } else if(language == 'fr'){
            altName = 'French';
        } else if(language == 'en'){
            altName = 'English';
        }
        cdm.objectId = recordId;
        cdm.docConfigId = docConfig;
        cdm.language = language;
        cdm.alternativeName = altName;

        cadmus_core.DocGenerationWrapper wrapper = cadmus_core.ConvertController.convertWithWrapper(cdm);

        System.debug('wrapper result: ' + wrapper.result);

        if(wrapper.result == 'SUCCESS' || wrapper.result == 'SUCCESS_WITH_WARNINGS')
            success = true;
        } catch (Exception e) {
            System.debug('Error in PDFButler_ConvertService.createServiceReport: ' + e.getMessage());
        }

        if(success)
            System.debug('Service report created successfully');
        else
            updateWorkOrderPDFStatus(recordId, 'Failed'
        );
    }

    public static void updateWorkOrderPDFStatus(String recordId, String status){
        try {
            WorkOrder wo = new WorkOrder(Id = recordId, PDF_Status__c = status);
            update wo;
        } catch (Exception e) {
            System.debug('Error in PDFButler_ConvertService.updateWorkOrderPDFStatus: ' + e.getMessage());
        }
    }
}
```

## Methods
### `createServiceReport(recordId, docConfig, language)`

#### Signature
```apex
public static void createServiceReport(String recordId, String docConfig, String language)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| recordId | String |  |
| docConfig | String |  |
| language | String |  |

#### Return Type
**void**

---

### `updateWorkOrderPDFStatus(recordId, status)`

#### Signature
```apex
public static void updateWorkOrderPDFStatus(String recordId, String status)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| recordId | String |  |
| status | String |  |

#### Return Type
**void**