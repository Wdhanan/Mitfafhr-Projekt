package demo.api.dto;

import java.io.Serializable;

import demo.model.Position;
import demo.model.User;
import lombok.Data;

@SuppressWarnings("serial")
@Data
public class UserDtoOut implements Serializable {
	private Integer user_id;
	private String username;
	private String firstname;
	private String lastname;
	private String email;
	private String street;
	private String streetNumber;
	private String zip;
	private String city;

	private Position position;
	
	public UserDtoOut()
	{
	
	}

	public UserDtoOut(User user)
	{
		this.user_id = user.getUserId();
		this.username = user.getUsername();
		this.firstname = user.getFirstname();
		this.lastname = user.getLastname();
		this.email = user.getEmail();
		this.street = user.getStreet();
		this.streetNumber = user.getStreetNumber();
		this.zip = user.getZip();
		this.city = user.getCity();
		this.position = user.getPosition();
	}

	public Position getPosition() {
		return position;
	}

	public void setPosition(Position position) {
		this.position = position;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getStreetNumber() {
		return streetNumber;
	}
	public void setStreetNumber(String streetNumber) {
		this.streetNumber = streetNumber;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	
}
