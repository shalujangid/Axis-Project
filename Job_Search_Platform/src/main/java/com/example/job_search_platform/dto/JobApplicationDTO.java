package com.example.job_search_platform.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;

@AllArgsConstructor
@Getter
@Setter
public class JobApplicationDTO {
    @NotNull()
    private long job_id;

    private String skills;

    private int experience;

    @NotNull()
    private long seeker_id;

    public JobApplicationDTO() {
        super();
    }

    @Override
    public String toString() {
        return "JobApplicationDTO{" +
                "job_id=" + job_id +
                ", skills='" + skills + '\'' +
                ", experience=" + experience +
                ", seeker_id=" + seeker_id +
                '}';
    }
}
