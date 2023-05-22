package com.example.job_search_platform.services;

import com.example.job_search_platform.dto.JobApplicationDTO;
import com.example.job_search_platform.dto.JobApplicationsListDTO;
import com.example.job_search_platform.entities.JobApplication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface JobApplicationService {
    String saveJobApplication(JobApplicationDTO jobApplicationDTO);
    List<JobApplication> findAll();
    String remove(Long id);
}
