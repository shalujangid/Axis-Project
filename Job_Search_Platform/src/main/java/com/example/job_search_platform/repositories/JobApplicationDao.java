package com.example.job_search_platform.repositories;

import com.example.job_search_platform.entities.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobApplicationDao extends JpaRepository<JobApplication, Long> {
    JobApplication findJobApplicationByJobSeekerAndJobPosting(JobSeeker jobSeeker, JobPosting jobPosting);

    List<JobApplication> findAllByJobSeeker(JobSeeker jobSeeker);
    List<JobApplication> findAllByJobPosting(JobPosting jobPosting);
}
