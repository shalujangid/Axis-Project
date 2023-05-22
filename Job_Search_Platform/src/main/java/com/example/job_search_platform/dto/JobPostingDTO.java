package com.example.job_search_platform.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;
@AllArgsConstructor
@Getter
@Setter
public class JobPostingDTO {
    @NotNull()
    private int company_id;

    @NotNull()
    private String state;

    @NotNull()
    private String title;

    @NotNull()
    private String description;

    @NotNull()
    private String responsibilties;

    @NotNull()
    private String qualifications;

    @NotNull()
    private String experience;

    @NotNull()
    private String location;

    @NotNull()
    private String industry;

    @NotNull()
    private double salary;

    public JobPostingDTO() {
        super();
    }

    @Override
    public String toString() {
        return "JobPostingDTO{" +
                "company_id=" + company_id +
                ", state='" + state + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", responsibilties='" + responsibilties + '\'' +
                ", qualifications='" + qualifications + '\'' +
                ", experience='" + experience + '\'' +
                ", location='" + location + '\'' +
                ", industry='" + industry + '\'' +
                ", salary=" + salary +
                '}';
    }
}
