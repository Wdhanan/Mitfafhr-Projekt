package demo.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

import demo.model.converter.PositionConverter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "user")
@NamedQueries({ 
	@NamedQuery(name = "User.findAll", query = "SELECT u FROM User u"),
	@NamedQuery(name = "User.findByUserName", query = "SELECT u FROM User u WHERE u.username = :username"),
    @NamedQuery(name = "User.SelectByNameOne",query = "SELECT u FROM User u WHERE u.username  = :username")
})
@SuppressWarnings("serial")
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false)
    private Integer userId;

    @Column(length = 20, nullable = true, unique = true)
    private String username;

    @Column(length = 50, nullable = true)
    private String email;
    
    @Column(length = 50, nullable = true)
    private String street; 
    
    @Column(length = 50, nullable = true)
    private String street_number;
    
    @Column(length = 50, nullable = true)
    private String zip;
    
    @Column(length = 50, nullable = true)
    private String city;

    @Column(length = 20, nullable = true)
    private String firstname;

    @Column(length = 20, nullable = true)
    private String lastname;

    @Convert(converter = PositionConverter.class)
    @Column(nullable = true, columnDefinition = "GEOMETRY")
    private Position position;

    @Column(name = "password_hash", nullable = true, columnDefinition = "BINARY")
    private byte[] passwordHash;

    @Column(name = "password_salt", nullable = true, columnDefinition = "BINARY")
    private byte[] passwordSalt;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "create_dt", updatable = false, insertable = false, nullable = true)
    private Date createDate;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "modify_dt", updatable = false, insertable = false, nullable = true)
    private Date modifyDate;


    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getStreetNumber() {
		return street_number;
	}

	public void setStreetNumber(String street_number) {
		this.street_number = street_number;
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

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position location) {
        this.position = location;
    }

    public byte[] getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(byte[] passwordHash) {
        this.passwordHash = passwordHash;
    }

    public byte[] getPasswordSalt() {
        return passwordSalt;
    }

    public void setPasswordSalt(byte[] passwordSalt) {
        this.passwordSalt = passwordSalt;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getModifyDate() {
        return modifyDate;
    }

    public void setModifyDate(Date modifyDate) {
        this.modifyDate = modifyDate;
    }

	@Override
	public String toString() {
		return "User [userId=" + userId + ", username=" + username + ", email=" + email + ", firstname=" + firstname
				+ ", lastname=" + lastname + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(userId, username);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(userId, other.userId) && Objects.equals(username, other.username);
	}

}
