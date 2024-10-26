/**
* Created by Frederik on 10/25/2024.
* Description:
* Change Log:
* Dependencies:
*/
public class MapsGeoCodeWrapper {
    public Plus_code plus_code;
    public List<Results> results;
    public String status;
    public class Plus_code {
        public String compound_code;
        public String global_code;
    }
    public class Results {
        public List<Address_components> address_components;
        public String formatted_address;
        public Geometry geometry;
        public String place_id;
        public List<String> types;
    }
    public class Address_components {
        public String long_name;
        public String short_name;
        public List<String> types;
    }
    public class Geometry {
        public Location location;
        public String location_type;
        public Viewport viewport;
    }
    public class Location {
        public Double lat;
        public Double lng;
    }
    public class Viewport {
        public Northeast northeast;
        public Southwest southwest;
    }
    public class Northeast {
        public Double lat;
        public Double lng;
    }
    public class Southwest {
        public Double lat;
        public Double lng;
    }

    public static MapsGeoCodeWrapper parse(String json) {
        return (MapsGeoCodeWrapper) System.JSON.deserialize(json, MapsGeoCodeWrapper.class);
    }

}