/**
 * Created by fpardon on 05/11/2024.
 */

public class ATAKProjectWrapper {
    public String Type;
    public List<Data> data;
    public class Data {
        public String dossier;
        public String projectcode;
        public String project_description;
        public String costcenter_code;
        public String costcenter_name;
        public String department_code;
        public String department_name;
        public String depot_code;
        public String depot_name;
        public String project_create_date;
        public String dim_projecttype;
        public String dim_clienttype;
        public String dim_branche;
        public String dim_group;
        public String dim_discipline;
        public String project_startdate;
        public String project_enddate;
        public String dim_tendertype;
        public String dim_language;
        public String actie;
        public List<Projectfunctionaris> projectfunctionaris;
        public List<Adrescodes> adrescodes;
        public List<Projectavtiviteiten> projectavtiviteiten;
    }
    public class Projectfunctionaris {
        public String func_initial;
        public String func_name;
        public String func_type;
    }
    public class Adrescodes {
        public String project_addresscode;
    }
    public class Projectavtiviteiten {
        public String project_activiteit;
    }

    public static ATAKProjectWrapper parse(String json) {
        return (ATAKProjectWrapper) System.JSON.deserialize(json, ATAKProjectWrapper.class);
    }


}