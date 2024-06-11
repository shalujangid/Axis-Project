package com.example.job_search_platform.services;

import com.example.job_search_platform.dto.JobPostingDTO;
import com.example.job_search_platform.entities.Company;
import com.example.job_search_platform.entities.JobApplication;
import com.example.job_search_platform.entities.JobPosting;

import java.util.List;

public interface JobPostingService {
    JobPosting savejobpost(JobPostingDTO jobPostingDTO);
    JobPosting updatejobpost(JobPostingDTO jobPostingDTO);
    List<JobPosting> getJobpostingAcLocation(String Location);
    List<JobPosting> findByIndustry(String industry);
    List<JobPosting> findByKeywords(String keyword);
    List<JobPosting> findalljobs();
    String delete(long id);
    List<JobApplication> getbyjobpostid(long id);

    JobPosting getbyid(long id);

}
