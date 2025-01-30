# CloneWorkOrderController Class

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
public class CloneWorkOrderController {
    public String resourceId { get; set; }

    public CloneWorkOrderController() {
        // Get parameters from URL
        resourceId = ApexPages.currentPage().getParameters().get('id');
    }
}
```

## Properties
### `resourceId`

#### Signature
```apex
public resourceId
```

#### Type
String

## Constructors
### `CloneWorkOrderController()`

#### Signature
```apex
public CloneWorkOrderController()
```