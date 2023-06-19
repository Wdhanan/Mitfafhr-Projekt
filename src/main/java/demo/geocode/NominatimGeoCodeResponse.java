package demo.geocode;

import javax.json.bind.annotation.JsonbProperty;

public class NominatimGeoCodeResponse {
    private String lat;
    private String lon;
    @JsonbProperty("display_name")
    private String displayName;

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getLon() {
        return lon;
    }

    public void setLon(String lon) {
        this.lon = lon;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    @Override
    public String toString() {
        return "NominatimResponse{" +
                "lat='" + lat + '\'' +
                ", lon='" + lon + '\'' +
                ", displayName='" + displayName + '\'' +
                '}';
    }
}
