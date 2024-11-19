/**
 * Created by fpardon on 18/11/2024.
 */

public class ATAKPerformanceWrapper {
    public String personnelcode_writer;
    public List<Data> data;
    public class Data {
        public Integer day_id;
        public String registration_timestamp;
        public String dossier;
        public String performance_date;
        public String start_timestamp;
        public String end_timestamp;
        public String performance_resource_code;
        public String performance_resource_type;
        public String projectcode;
        public String quantity_registration_unit;
        public String quantity;
        public String remarks;
    }

    public static ATAKPerformanceWrapper parse(String json) {
        return (ATAKPerformanceWrapper) System.JSON.deserialize(json, ATAKPerformanceWrapper.class);
    }

}