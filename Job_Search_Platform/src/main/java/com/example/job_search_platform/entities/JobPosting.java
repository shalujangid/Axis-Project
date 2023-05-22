package com.example.job_search_platform.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.Year;
import java.util.Date;
import java.util.List;

import static java.time.LocalTime.now;

@Entity
@Table(name = "jobposting")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class JobPosting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "jobId", unique = true, nullable = false)
    private long jobId;

    @ManyToOne
    @JoinColumn(name = "companyId")
    private Company company;


    //extra
//    @ManyToOne
//    @JoinColumn(name = "recruiter_id")
//    private Recruiter recruiter;

    @Column(name = "state",nullable = false)
    private String state;

    @Column(name = "title",nullable = false)
    private String title;

    @Column(name = "description",nullable = false)
    private String description;

    @Column(name = "responsibilities",nullable = false)
    private String responsibilties;

    @Column(name = "qualifications",nullable = false)
    private String qualifications;

    @Column(name = "experience",nullable = false)
    private String experience;

    @Column(name = "location",nullable = false)
    private String location;

    @Column(name = "industry",nullable = false)
    private String industry;

    @Column(name = "salary",nullable = false)
    private double salary;

    @Column(name = "keywords",nullable = false)
    private String keywords;

    @Column(name = "posted_date")
    private LocalDate posted_date=LocalDate.now();

//    @ManyToMany (cascade=CascadeType.ALL)
//    private List<JobSeeker> jobSeekers;

    @Override
    public String toString() {
        return "JobPosting{" +
                "jobId=" + jobId +
                ", company=" + company +
                ", state='" + state + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", responsibilties='" + responsibilties + '\'' +
                ", qualifications='" + qualifications + '\'' +
                ", location='" + location + '\'' +
                ", salary=" + salary +
                ", keywords='" + keywords + '\'' +
                ", posted_date=" + posted_date +
                '}';
    }
}
