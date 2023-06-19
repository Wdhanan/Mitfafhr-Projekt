package demo.model;


import javax.persistence.*;
import java.io.Serializable;

import java.util.Objects;


@Table(name = "timetable_weekday")
@NamedQueries({
        @NamedQuery(name = "TimetableWeekday.findById", query = "SELECT u FROM TimetableWeekday  u WHERE u.user_id = :user_id GROUP BY u.weekday "),
})
@Entity

public class TimetableWeekday implements Serializable {
    @Id
    private Integer user_id;
   @Id
    private Integer weekday;
    @Column(name = "start_time", nullable = false)
    private String startTime;
    @Column(name = "end_time", nullable = false)
    private String endTime;
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
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	@Override
	public String toString() {
		return "TimetableWeekday [user_id=" + user_id + ", weekday=" + weekday + ", startTime=" + startTime
				+ ", endTime=" + endTime + "]";
	}
	@Override
	public int hashCode() {
		return Objects.hash(endTime, startTime, user_id, weekday);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TimetableWeekday other = (TimetableWeekday) obj;
		return Objects.equals(endTime, other.endTime) && Objects.equals(startTime, other.startTime)
				&& Objects.equals(user_id, other.user_id) && Objects.equals(weekday, other.weekday);
	}



}
