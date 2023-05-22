package com.example.job_search_platform.serviceImpl;

import com.example.job_search_platform.entities.BookmarkedJob;
import com.example.job_search_platform.entities.JobApplication;
import com.example.job_search_platform.entities.JobSeeker;
import com.example.job_search_platform.entities.Users;
import com.example.job_search_platform.repositories.BookmarkedJobDao;
import com.example.job_search_platform.repositories.JobApplicationDao;
import com.example.job_search_platform.repositories.JobSeekerDao;
import com.example.job_search_platform.services.JobSeekerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class JobSeekerServiceImpl implements JobSeekerService {
    @Autowired
    JobSeekerDao jobSeekerDao;
    @Autowired
    BookmarkedJobDao bookmarkedJobDao;

    @Autowired
    JobApplicationDao jobApplicationDao;

    @Override
    public List<JobSeeker> getall() {
        return jobSeekerDao.findAll();
    }

    @Override
    public List<BookmarkedJob> getbyid(long id) {
            jobSeekerDao.getbyif(id);
         return bookmarkedJobDao.findAllByJobSeeker(jobSeekerDao.getbyif(id));
    }

    @Override
    public List<JobApplication> getbyjobseekerid(long id) {
        jobSeekerDao.getbyif(id);
        return jobApplicationDao.findAllByJobSeeker( jobSeekerDao.getbyif(id));
    }

    @Override
    public List<JobSeeker> findusersbyskillsandqualifications(String search) {
        return jobSeekerDao.findAllByResume(search);
    }

}
