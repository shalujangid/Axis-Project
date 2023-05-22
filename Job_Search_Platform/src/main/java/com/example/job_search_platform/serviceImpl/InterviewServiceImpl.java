package com.example.job_search_platform.serviceImpl;

import com.example.job_search_platform.dto.InterviewDTO;
import com.example.job_search_platform.entities.Interview;
import com.example.job_search_platform.entities.JobSeeker;
import com.example.job_search_platform.repositories.InterviewDao;
import com.example.job_search_platform.repositories.JobPostingDao;
import com.example.job_search_platform.repositories.JobSeekerDao;
import com.example.job_search_platform.repositories.RecruiterDao;
import com.example.job_search_platform.services.InterviewService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class InterviewServiceImpl implements InterviewService {

    @Autowired
    InterviewDao interviewDao;
    @Autowired
    JobSeekerDao jobSeekerDao;
    @Autowired
    JobPostingDao jobPostingDao;
    @Autowired
    RecruiterDao recruiterDao;
    @Override
    public String addinterview(InterviewDTO interviewDTO) {
        Interview interview=new Interview();
        if(interviewDTO.getInterview_date()!=null &&
                interviewDTO.getInterview_type()!=null &&
                interviewDTO.getJob_id()!=0
                && interviewDTO.getJseeker_id()!=0 && interviewDTO.getRecruiter_id()!=0 )
        {
            interview.setCreatedBy(recruiterDao.findById(interviewDTO.getRecruiter_id()).get());
            interview.setCreatedFor(jobSeekerDao.findById(interviewDTO.getJseeker_id()).get());
            interview.setJob(jobPostingDao.findById(interviewDTO.getJob_id()).get());
            interview.setInterview_date(interviewDTO.getInterview_date());
            interview.setInterview_type(interviewDTO.getInterview_type());
            interviewDao.save(interview);
            return "inserted";
        }else{
            return "error";
        }
    }

    @Override
    public List<Interview> getallinterview(long id) {
        recruiterDao.findById(id);
        return interviewDao.findAllByCreatedBy(recruiterDao.findById(id).get());
    }

    @Override
    public List<Interview> getallinterviewbyjobseeker(long id) {
        return interviewDao.findAllByCreatedFor(jobSeekerDao.findById(id).get());
    }
}
