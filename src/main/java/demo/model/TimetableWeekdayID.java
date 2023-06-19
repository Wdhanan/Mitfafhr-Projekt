package demo.model;


import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;
@Embeddable

public class TimetableWeekdayID implements Serializable {
    public TimetableWeekdayID() {
		
	}
	public TimetableWeekdayID(Integer user_id, Integer weekday) {
		
		this.user_id = user_id;
		this.weekday = weekday;
	}
	//default serial version id, required for serializable classes.
    private static final long serialVersionUID = 1L;
    @Column(insertable=false, updatable=false)
    private Integer user_id;
    @Column(insertable=true, updatable=true)
    private Integer weekday;
	public Integer getUser_id() {
		return user_id;
	}
	public void setUser_id(Integer user_id) {
		this.user_id = user_id;
	}
	public Integer getWeekday() {
		return weekday;
	}
	public void setWeekday(Integer weekday) {
		this.weekday = weekday;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@Override
	public int hashCode() {
		return Objects.hash(user_id, weekday);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TimetableWeekdayID other = (TimetableWeekdayID) obj;
		return Objects.equals(user_id, other.user_id) && Objects.equals(weekday, other.weekday);
	}


}
