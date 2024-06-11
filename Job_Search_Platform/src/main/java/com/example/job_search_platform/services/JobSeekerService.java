package com.example.job_search_platform.services;

import com.example.job_search_platform.entities.BookmarkedJob;
import com.example.job_search_platform.entities.JobApplication;
import com.example.job_search_platform.entities.JobSeeker;
import com.example.job_search_platform.entities.Users;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface JobSeekerService {

    List<JobSeeker> getall();
    List<BookmarkedJob> getbyid(long id);

    List<JobApplication> getbyjobseekerid(long id);

    List<JobSeeker> findusersbyskillsandqualifications(String search);
}
