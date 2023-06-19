package demo.api;

import java.util.Optional;
import java.util.UUID;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import demo.api.dto.*;
import demo.model.User;
import org.eclipse.microprofile.metrics.annotation.Timed;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.parameters.RequestBody;

import demo.api.access.AccessManager;
import demo.dao.UserDAO;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

@Path("/access")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AccessController {
	@Inject
	private UserDAO userDAO;
	@Inject
	private AccessManager accessManager;

	@POST
	public Token login(LoginDto loginDto) {
		try {
			UUID uuid = accessManager.register(loginDto.getUsername(), loginDto.getPassword());

			System.out.println("Login : " + loginDto.getUsername());
			System.out.println("  -> " + uuid);

			return new Token(uuid);
		} catch (Throwable thr) {
			throw new RuntimeException("ERROR: login");
		}
	}

	@DELETE
	public Response logout(@QueryParam("tokenId") String token) {
		
		System.out.println("Token: " + token);
		String username = accessManager.getUsername(UUID.fromString(token));	
		System.out.println("Logout: " + username);
		
		return accessManager.deregister(username) ? Response.ok().build() : Response.status(404).build();
	}


	@POST
	@Path("/save")
	public Token register(UserDtoIn user) {
	
		userDAO.createUser(user.getUsername(), user.getPassword(), user.getFirstname(),
				user.getLastname(), user.getEmail(), user.getStreet(), user.getStreetNumber(), user.getZip(), user.getCity());

		UUID uuid = accessManager.register(user.getUsername(), user.getPassword());
		
		return new Token(uuid);
	}

    @GET
	@Path("/{userName}")
	@APIResponse(responseCode = "200",
			description = "GET User",
			content = @Content(mediaType = MediaType.APPLICATION_JSON))
	public UserDtoOut getUserByName(@PathParam("userName") String userName,
									@QueryParam("token") UUID uuid)
	{
		UserDtoOut userDto;

		if( accessManager.hasAccess(uuid) == false )
		{
			throw new RuntimeException("ERROR: Access not granted");
		}

		Optional<User> optUser = userDAO.findUserOne(userName);
		if( optUser.isPresent() )
		{
			userDto = new UserDtoOut(optUser.get());
			return userDto;
		}
		else
			throw new RuntimeException("ERROR: User not found");

	}

}
