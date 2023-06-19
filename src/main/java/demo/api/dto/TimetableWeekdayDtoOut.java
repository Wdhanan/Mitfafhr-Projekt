package demo.api.dto;

import demo.model.TimetableWeekday;

import javax.persistence.Column;

import java.io.Serializable;

public class TimetableWeekdayDtoOut implements Serializable {
    


	public TimetableWeekdayDtoOut() {
		
	}


	private String user_id;
    private Integer weekday;
    @Column(name = "start_time", nullable = false)
    private String startTime;
    @Column(name = "end_time", nullable = false)
    private String endTime;

    public TimetableWeekdayDtoOut(TimetableWeekday t) {
        this.user_id = String.valueOf(t.getUser_id());
        this.weekday = t.getWeekday();
        this.startTime = t.getStartTime();
        this.endTime = t.getEndTime();
    }


    public TimetableWeekdayDtoOut(TimetableWeekday[] t) {
        for (int i = 0; i < t.length; i++) {
            this.user_id = String.valueOf(t[i].getUser_id());
            this.weekday = t[i].getWeekday();
            this.startTime = t[i].getStartTime();
            this.endTime = t[i].getEndTime();
        }
    }


	public String getUser_id() {
		return user_id;
	}


	public void setUser_id(String user_id) {
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
}
