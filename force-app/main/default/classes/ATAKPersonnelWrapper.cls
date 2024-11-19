/**
 * Created by fpardon on 12/11/2024.
 */

public class ATAKPersonnelWrapper {
    public String Type;
    public List<Data> data;
    public class Data {
        public String dossier;
        public String code;
        public String name;
        public String phone;
        public String mobile;
        public String email;
        public String depot_code;
        public String depot_name;
        public String department_code;
        public String statute;
        public String startdate;
        public String enddate;
        public String department_name;
        public String sitemanager_code;
        public String sitemanager_name;
        public String employment_agency;
        public String actie;
    }

    public static ATAKPersonnelWrapper parse(String json) {
        return (ATAKPersonnelWrapper) System.JSON.deserialize(json, ATAKPersonnelWrapper.class);
    }
}