package com.example.job_search_platform.repositories;

import com.example.job_search_platform.entities.Interview;
import com.example.job_search_platform.entities.JobSeeker;
import com.example.job_search_platform.entities.Recruiter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InterviewDao   extends JpaRepository<Interview, Long> {
    List<Interview> findAllByCreatedBy(Recruiter recruiter);
    List<Interview> findAllByCreatedFor(JobSeeker jobSeeker);
}
