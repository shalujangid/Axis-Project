package com.example.job_search_platform.serviceImpl;

import com.example.job_search_platform.dto.BookmarkedJobDTO;
import com.example.job_search_platform.dto.BookmarkedJobListDTO;
import com.example.job_search_platform.entities.BookmarkedJob;
import com.example.job_search_platform.entities.JobSeeker;
import com.example.job_search_platform.exception.InvalidBookmarkedJobException;
import com.example.job_search_platform.repositories.BookmarkedJobDao;
import com.example.job_search_platform.repositories.JobPostingDao;
import com.example.job_search_platform.repositories.JobSeekerDao;
import com.example.job_search_platform.services.BookmarkedJobService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookmarkedJobServiceImpl implements BookmarkedJobService {
    @Autowired
    BookmarkedJobDao bookmarkedjobdao;
    @Autowired
    JobSeekerDao jobSeekerDao;

    @Autowired
    JobPostingDao jobPostingDao;
    @Override
    public BookmarkedJob savejob(BookmarkedJobDTO bookmarkedJobDTO) {
        BookmarkedJob bookmarkedJob=new BookmarkedJob();
        System.out.println(bookmarkedJobDTO);
        if (jobPostingDao.existsById(bookmarkedJobDTO.getSeekerId()) &&
            jobSeekerDao.existsById(bookmarkedJobDTO.getSeekerId()))
        {
            bookmarkedJob.setJobSeeker(jobSeekerDao.findById(bookmarkedJobDTO.getSeekerId()).get());
            bookmarkedJob.setJobPosting(jobPostingDao.findById(bookmarkedJobDTO.getJobId()).get());
            return bookmarkedjobdao.save(bookmarkedJob);
        }
        else
        {
            throw new InvalidBookmarkedJobException();
        }
    }

    @Override
    public List<BookmarkedJob> findByJobSeeker(JobSeeker jobSeeker) {
        return bookmarkedjobdao.findAllByJobSeeker(jobSeeker);
    }

}
