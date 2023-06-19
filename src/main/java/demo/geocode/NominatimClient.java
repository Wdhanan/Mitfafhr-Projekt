package demo.geocode;

import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.List;

@RegisterRestClient(configKey = "nominatimClient", baseUri = "https://nominatim.openstreetmap.org")
@Produces(MediaType.APPLICATION_JSON)
public interface NominatimClient {

    @GET
    @Path("search")
    List<NominatimGeoCodeResponse> search(
            @QueryParam("street") String street,
            @QueryParam("city") String city,
            @QueryParam("country") String country,
            @QueryParam("state") String state,
            @QueryParam("postalcode") String postalCode,
            @QueryParam("format") String format,
            @QueryParam("addressdetails") String addressDetails
    );
}
