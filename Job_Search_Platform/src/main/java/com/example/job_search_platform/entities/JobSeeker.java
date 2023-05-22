package com.example.job_search_platform.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "job_seeker")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class JobSeeker {
//    public enum Gender{
//        FEMALE,MALE,OTHER
//    }
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(nullable = false)
    private long jseeker_id;
    @Column(nullable = false)
    private String first_name;
    @Column(nullable = false)
    private String last_name;
    @Column(nullable = false)
    @JsonFormat(pattern="yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dob;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Gender gender;
    @Column(nullable = false)
    private long contact_number;
    @Column(nullable = false)
    private String location;
    @Column(nullable = false)
    private String industry;
    @Column(nullable = false)
    private String resume;
//    @ManyToMany(cascade=CascadeType.ALL,mappedBy = "jobSeekers")
//    private List<JobPosting> jobPostings;

    @Override
    public String toString() {
        return "JobSeeker{" +
                "jseeker_id=" + jseeker_id +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", dob=" + dob +
                ", gender=" + gender +
                ", contact_number=" + contact_number +
                ", location='" + location + '\'' +
                ", industry='" + industry + '\'' +
                ", resume='" + resume + '\'' +
                '}';
    }
}
