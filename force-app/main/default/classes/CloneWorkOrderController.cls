public class CloneWorkOrderController {
    public String resourceId { get; set; }

    public CloneWorkOrderController() {
        // Get parameters from URL
        resourceId = ApexPages.currentPage().getParameters().get('id');
    }
}