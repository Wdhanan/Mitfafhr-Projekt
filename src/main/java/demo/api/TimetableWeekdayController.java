package demo.api;

import demo.api.access.AccessManager;
import demo.api.dto.TimetableWeekdayDtoIn;
import demo.api.dto.TimetableWeekdayDtoOut;
import demo.dao.TimetableWeekdayDAO;
import demo.model.TimetableWeekday;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.parameters.RequestBody;


import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Path("/weekday")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TimetableWeekdayController {

    @Inject
    private AccessManager accessManager;
    @Inject
    private TimetableWeekdayDAO timetableWeekdayDAO;

    @GET
    @Path("/get")
    public List<TimetableWeekdayDtoOut> getWeekdayById(@QueryParam("id") Integer id, @QueryParam("token") UUID token) {
        List<TimetableWeekday> timetableWeekday = null;
        try {
            if (!accessManager.hasAccess(token)) {
                throw new RuntimeException("ERROR: Access not granted");
            }
            timetableWeekday = new ArrayList<>();
            timetableWeekday = timetableWeekdayDAO.findWeekdayById(id);
            if (!timetableWeekday.isEmpty()) {
                return timetableWeekday.stream().map( TimetableWeekdayDtoOut::new ).collect(Collectors.toList() );
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        assert timetableWeekday != null;
        return timetableWeekday.stream().map( TimetableWeekdayDtoOut::new ).collect(Collectors.toList() );
    }


     @PUT
     @Path("/save")
     public Response saveStundenPlan(@RequestBody(
             description="Create Week day",required=true,
             content = @Content(schema = @Schema(implementation = TimetableWeekdayDtoIn.class))
     ) TimetableWeekdayDtoIn tDtoIn)  {
        System.out.println(tDtoIn);
        
        try {
            timetableWeekdayDAO.createWeakday(
                    tDtoIn.getUser_id(),
                    tDtoIn.getWeekday(),
                    tDtoIn.getStart_time(),
                    tDtoIn.getEnd_time());
        }catch (Exception e){
            System.out.println(e.getMessage());
        }

         
        return Response.ok().build();
      }


}
