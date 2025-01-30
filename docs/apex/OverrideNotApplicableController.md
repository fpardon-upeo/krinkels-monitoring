# OverrideNotApplicableController Class

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
public with sharing class OverrideNotApplicableController {
    public WorkStep workStep { get; set; }
    private final ApexPages.StandardController stdCtrl;

    // Constructor
    public OverrideNotApplicableController(ApexPages.StandardController stdController) {
        this.stdCtrl = stdController;
        workStep = (WorkStep)stdController.getRecord();
    }

    // Preload data when page is opened
    public PageReference init() {
        // Fetch the record if not already preloaded
        if (workStep.Id != null) {
            workStep = [SELECT Id, Not_Applicable_Reasons__c, Not_Applicable_Comments__c, Status 
                        FROM WorkStep 
                        WHERE Id = :workStep.Id
                        LIMIT 1];
        }
        return null;
    }

    // Save Method
    public PageReference save() {
        try {
            workStep.Status = 'Not Applicable'; // Update the Status field
            update workStep;

            // Redirect back to the Work Step record
            PageReference pageRef = new PageReference('/' + workStep.Id);
            pageRef.setRedirect(true);
            return pageRef;
        } catch (DmlException e) {
            ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR, e.getMessage()));
            return null;
        }
    }

    // Cancel Method
    public PageReference cancel() {
        return new PageReference('/' + workStep.Id); // Redirect back to Work Step record
    }
}
```

## Fields
### `stdCtrl`

#### Signature
```apex
private final stdCtrl
```

#### Type
ApexPages.StandardController

## Properties
### `workStep`

#### Signature
```apex
public workStep
```

#### Type
[WorkStep](../objects/WorkStep.md)

## Constructors
### `OverrideNotApplicableController(stdController)`

#### Signature
```apex
public OverrideNotApplicableController(ApexPages.StandardController stdController)
```

#### Parameters
| Name | Type | Description |
|------|------|-------------|
| stdController | ApexPages.StandardController |  |

## Methods
### `init()`

#### Signature
```apex
public PageReference init()
```

#### Return Type
**PageReference**

---

### `save()`

#### Signature
```apex
public PageReference save()
```

#### Return Type
**PageReference**

---

### `cancel()`

#### Signature
```apex
public PageReference cancel()
```

#### Return Type
**PageReference**