package com.example.job_search_platform.services;

import com.example.job_search_platform.dto.BookmarkedJobDTO;
import com.example.job_search_platform.dto.BookmarkedJobListDTO;
import com.example.job_search_platform.entities.BookmarkedJob;
import com.example.job_search_platform.entities.JobSeeker;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BookmarkedJobService {

    BookmarkedJob savejob(BookmarkedJobDTO bookmarkedJobDTO);
    List<BookmarkedJob> findByJobSeeker(JobSeeker jobSeeker);
}
