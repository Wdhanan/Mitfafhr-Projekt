package demo.api.access;

import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import javax.inject.Inject;
import javax.inject.Singleton;

import demo.dao.UserDAO;

@Singleton
public class AccessManager 
{	
	@Inject
	private UserDAO userDAO;
	
	
	private final Map<String, UUID> users = new ConcurrentHashMap<>();

	
	public boolean deregister(String username)
	{
		return users.remove(username) != null ? true : false;
	}
	
	public UUID register(String username, String password)
	{
		if( userDAO.checkUserPassword(username, password) == false )
		{
			throw new RuntimeException("ERROR: username and password do not correspond");
		}
		
		UUID uuid = UUID.randomUUID();
		if( users.putIfAbsent(username, uuid) == null )
		{
			return uuid;
		}
		else
		{
			throw new RuntimeException("ERROR: register user");
		}		
	}
	
	public UUID getUuid(String username)
	{
		return users.get(username);
	}
	
	public String getUsername(UUID uuid)
	{
		Optional<String> username = users.entrySet()
			      .stream()
			      .filter(entry -> uuid.equals(entry.getValue()))
			      .map(Map.Entry::getKey).findFirst();
		
		return username.isPresent() ? username.get() : null;
	}
	
	public boolean hasAccess(UUID uuid)
	{
		return users.containsValue(uuid);
	}
}
