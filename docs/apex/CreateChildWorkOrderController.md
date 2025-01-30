# CreateChildWorkOrderController Class

## AI-Generated description

Activate [AI configuration](https://sfdx-hardis.cloudity.com/salesforce-ai-setup/) to generate AI description

## Apex Code

```java
public class CreateChildWorkOrderController {
    public String serviceAppointmentId { get; set; }
    public ServiceAppointment sa { get; set; }
    public WorkOrder parentWorkOrder { get; set; }
    public WorkOrder childWorkOrder { get; set; }
    public Boolean success { get; set; } // Add success flag

    public CreateChildWorkOrderController() {
        // Get service appointment ID from URL parameter
        serviceAppointmentId = ApexPages.currentPage().getParameters().get('id');
        success = false; // Initialize success flag

        if (String.isNotBlank(serviceAppointmentId)) {
            // Query the Service Appointment
            sa = [
                    SELECT Id, ParentRecordId, SchedStartTime, SchedEndTime
                    FROM ServiceAppointment
                    WHERE Id = :serviceAppointmentId
                    LIMIT 1
            ];

            // Query the parent Work Order
            parentWorkOrder = [
                    SELECT Id, Subject
                    FROM WorkOrder
                    WHERE Id = :sa.ParentRecordId
                    LIMIT 1
            ];

            // Initialize the child work order
            childWorkOrder = new WorkOrder(
                    ParentWorkOrderId = parentWorkOrder.Id,
                    Subject = 'Child of: ' + parentWorkOrder.Subject,
                    StartDate = sa.SchedStartTime.date()
            );
        }
    }

    public PageReference createChildWorkOrder() {
        try {
            // Insert the child work order
            insert childWorkOrder;

            // Create service appointment for the child work order
            ServiceAppointment childSA = new ServiceAppointment(
                    ParentRecordId = childWorkOrder.Id,
                    SchedStartTime = sa.SchedStartTime,
                    SchedEndTime = sa.SchedEndTime,
                    EarliestStartTime = sa.SchedStartTime,
                    DueDate = sa.SchedEndTime
            );
            insert childSA;

            // Query for assigned resources
            List<AssignedResource> assignedResources = [
                    SELECT ServiceResourceId
                    FROM AssignedResource
                    WHERE ServiceAppointmentId = :sa.Id
                    ORDER BY CreatedDate DESC
                    LIMIT 1
            ];

            // If there's an assigned resource on the parent SA, assign the same resource to child
            if (!assignedResources.isEmpty()) {
                AssignedResource ar = new AssignedResource(
                        ServiceAppointmentId = childSA.Id,
                        ServiceResourceId = assignedResources[0].ServiceResourceId
                );
                insert ar;
            }
            success = true; // Set success flag to true
            // Close the lightbox
            return null;
        } catch (Exception e) {
            success = false; // Set success flag to false
            ApexPages.addMessage(new ApexPages.Message(
                    ApexPages.Severity.ERROR,
                    'Error creating child work order: ' + e.getMessage()
            ));
            return null;
        }
    }
}
```

## Properties
### `serviceAppointmentId`

#### Signature
```apex
public serviceAppointmentId
```

#### Type
String

---

### `sa`

#### Signature
```apex
public sa
```

#### Type
[ServiceAppointment](../objects/ServiceAppointment.md)

---

### `parentWorkOrder`

#### Signature
```apex
public parentWorkOrder
```

#### Type
[WorkOrder](../objects/WorkOrder.md)

---

### `childWorkOrder`

#### Signature
```apex
public childWorkOrder
```

#### Type
[WorkOrder](../objects/WorkOrder.md)

---

### `success`

#### Signature
```apex
public success
```

#### Type
Boolean

## Constructors
### `CreateChildWorkOrderController()`

#### Signature
```apex
public CreateChildWorkOrderController()
```

## Methods
### `createChildWorkOrder()`

#### Signature
```apex
public PageReference createChildWorkOrder()
```

#### Return Type
**PageReference**