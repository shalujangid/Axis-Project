package com.example.job_search_platform.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@AllArgsConstructor
@Getter
@Setter
public class InterviewDTO {
    @NotNull
    private long recruiter_id;
    @NotNull
    private long jseeker_id;
    @NotNull
    private long job_id;
    @NotNull
    private  Date interview_date;
    @NotNull
    private String interview_type;
    private String feedback;

    @Override
    public String toString() {
        return "InterviewDTO{" +
                "recruiter_id=" + recruiter_id +
                ", jseeker_id=" + jseeker_id +
                ", job_id=" + job_id +
                ", interview_date=" + interview_date +
                ", interview_type='" + interview_type + '\'' +
                ", feedback='" + feedback + '\'' +
                '}';
    }

}
