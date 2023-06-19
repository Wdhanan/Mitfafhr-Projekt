package demo.api.dto;





import javax.persistence.Id;

import java.io.Serializable;



@SuppressWarnings("serial")

public class TimetableWeekdayDtoIn implements Serializable {

    public TimetableWeekdayDtoIn() {
		
	}

	@Id
    private Integer user_id;
    @Id
    private Integer weekday;
    public String start_time;
    public String end_time;

    @Override
    public String toString() {
        return "TimetableWeekdayDtoIn{" +
                "user_id=" + user_id +
                ", weekday=" + weekday +
                ", startTime='" + start_time + '\'' +
                ", endTime='" + end_time + '\'' +
                '}';
    }

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

	public String getStart_time() {
		return start_time;
	}

	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}

	public String getEnd_time() {
		return end_time;
	}

	public void setEnd_time(String end_time) {
		this.end_time = end_time;
	}

}
