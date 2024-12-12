public class CreateInternalWorkController {
    public String resourceId { get; set; }
    public String stmId { get; set; }
    public String startDate { get; set; }
    public String endDate { get; set; }

    public CreateInternalWorkController() {
        // Get parameters from URL
        resourceId = ApexPages.currentPage().getParameters().get('id');
        stmId = ApexPages.currentPage().getParameters().get('stm');
        startDate = ApexPages.currentPage().getParameters().get('start');
        endDate = ApexPages.currentPage().getParameters().get('end');
    }

    public String getFormattedStartDate() {
        if(String.isNotBlank(startDate)) {
            List<String> dateParts = startDate.split('-');
            if(dateParts.size() == 3) {
                DateTime now = DateTime.now();
                DateTime dt = DateTime.newInstance(
                        Integer.valueOf(dateParts[2]), // year
                        Integer.valueOf(dateParts[0]), // month
                        Integer.valueOf(dateParts[1]), // day
                        now.hour(),
                        now.minute(),
                        now.second()
                );
                return dt.format('yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'');
            }
        }
        return null;
    }

    public String getFormattedEndDate() {
        if(String.isNotBlank(startDate)) {  // Note: using startDate instead of endDate
            List<String> dateParts = startDate.split('-');  // Using startDate parts
            if(dateParts.size() == 3) {
                DateTime now = DateTime.now().addHours(1);
                DateTime dt = DateTime.newInstance(
                        Integer.valueOf(dateParts[2]), // year
                        Integer.valueOf(dateParts[0]), // month
                        Integer.valueOf(dateParts[1]), // day
                        now.hour(),
                        now.minute(),
                        now.second()
                );
                return dt.format('yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\'');
            }
        }
        return null;
    }

    public String getFlowURL() {
        String baseURL = '/flow/Work_Order_Screen_Flow_Create_Internal_Work';
        String params = '?resourceId=' + resourceId;

        String formattedStart = getFormattedStartDate();
        String formattedEnd = getFormattedEndDate();

        if (String.isNotBlank(formattedStart)) {
            params += '&startDate=' + EncodingUtil.urlEncode(formattedStart, 'UTF-8');
        }
        if (String.isNotBlank(formattedEnd)) {
            params += '&endDate=' + EncodingUtil.urlEncode(formattedEnd, 'UTF-8');
        }

        return baseURL + params;
    }
}