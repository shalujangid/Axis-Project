package com.example.job_search_platform.services;

import com.example.job_search_platform.entities.JobPosting;

import java.util.List;

public interface CompanyService {
    List<JobPosting> findjobpostingbycompany(int id);
}
