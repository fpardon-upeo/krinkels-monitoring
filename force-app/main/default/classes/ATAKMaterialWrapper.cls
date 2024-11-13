/**
 * Created by fpardon on 12/11/2024.
 */

public class ATAKMaterialWrapper {
    public String Type;
    public List<Data> data;
    public class Data {
        public String dossier;
        public String code;
        public String depot_code;
        public String depot_name;
        public String department_code;
        public String description;
        public Integer rate;
        public String license_plate;
        public String date_use_end;
        public String date_out_of_service;
        public String group_code;
        public String group_description;
        public String means_categorie;
        public String means_code;
        public String means_description;
        public String department_name;
        public String actie;
    }

    public static ATAKMaterialWrapper parse(String json) {
        return (ATAKMaterialWrapper) System.JSON.deserialize(json, ATAKMaterialWrapper.class);
    }
}