package com.example.job_search_platform.repositories;


import com.example.job_search_platform.entities.Company;
import com.example.job_search_platform.entities.JobPosting;
import com.example.job_search_platform.entities.JobSeeker;
import com.example.job_search_platform.entities.Recruiter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface JobPostingDao extends JpaRepository<JobPosting, Long> {

    List<JobPosting> findByLocationContainingAllIgnoreCase(String location);
    List<JobPosting> findByIndustryAllIgnoreCase(String industry);
    List<JobPosting> findByKeywordsContainingAllIgnoreCase(String keyword);
    List<JobPosting> findAllByCompany(Company company);
    @Query("select j from JobPosting j where j.jobId =:jid")
    JobPosting getbyjobid(@Param("jid")long id);


}