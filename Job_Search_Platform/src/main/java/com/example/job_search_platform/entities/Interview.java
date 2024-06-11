package com.example.job_search_platform.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name ="interview")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Interview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name ="interview_id", unique = true, nullable = false)
    private long interview_id;

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = Recruiter.class)
    @JoinColumn(name = "recruiter_id")
    private Recruiter createdBy;

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = JobSeeker.class)
    @JoinColumn(name = "jseeker_id")
    private JobSeeker createdFor;

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = JobPosting.class)
    @JoinColumn(name = "job_id")
    private JobPosting job;

    @Column(name ="interview_date", nullable = false)
    private Date interview_date;
    @Column(name ="datetime", nullable = false)
    private String interview_type;
    @Column(name ="feedback")
    private String feedback;

}

