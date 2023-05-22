package com.example.job_search_platform.serviceImpl;

import com.example.job_search_platform.dto.JobApplicationDTO;
import com.example.job_search_platform.dto.JobApplicationsListDTO;
import com.example.job_search_platform.entities.JobApplication;
import com.example.job_search_platform.entities.JobPosting;
import com.example.job_search_platform.exception.InvalidJobApplicationException;
import com.example.job_search_platform.repositories.JobApplicationDao;
import com.example.job_search_platform.repositories.JobPostingDao;
import com.example.job_search_platform.repositories.JobSeekerDao;
import com.example.job_search_platform.services.JobApplicationService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@Transactional
public class JobApplicationServiceImpl implements JobApplicationService {
    @Autowired
    JobApplicationDao jobApplicationDao;

    @Autowired
    JobSeekerDao jobSeekerDao;

    @Autowired
    JobPostingDao jobPostingDao;

    @Override
    public String saveJobApplication(JobApplicationDTO jobApplicationDTO) {
        System.out.println(jobApplicationDTO);
//        System.out.println(jobPostingDao.findById(jobApplicationDTO.getJob_id()).get());
        JobApplication jobApplication=new JobApplication();
        if(jobApplicationDTO.getJob_id()!=0  && jobApplicationDTO.getSeeker_id()!=0){
//            jobApplication.setCoverLetter(jobApplicationDTO.getCover_letter());
//            if(jobApplicationDao.findByJobSeeker(jobSeekerDao.findById(jobApplicationDTO.getSeeker_id()))){
//                return "error";
//            }else{
                jobApplication.setJobPosting(jobPostingDao.findById(jobApplicationDTO.getJob_id()).get());
                jobApplication.setJobSeeker(jobSeekerDao.findById(jobApplicationDTO.getSeeker_id()).get());
                jobApplication.setSkills(jobApplicationDTO.getSkills());
                jobApplication.setExperience(jobApplicationDTO.getExperience());
                System.out.println(jobApplication);
//                JobApplication j=jobApplicationDao.findJobApplicationByJobSeekerAndJobPosting_JobId(jobSeekerDao.findById(jobApplicationDTO.getSeeker_id()).get(),jobApplicationDTO.getJob_id());
//                System.out.println(j);
//                if(jobApplicationDao.findJobApplicationByJobSeekerAndJobPosting_JobId(jobSeekerDao.findById(jobApplicationDTO.getSeeker_id()).get(),jobApplicationDTO.getSeeker_id())
//                {
//                    return "error";
//                }else{
                    jobApplicationDao.save(jobApplication);
                    return "Congratulations! You have successfully applied for this job!";
//                }
//                jobApplicationDao.save(jobApplication);
//            }
        }else{
            throw new InvalidJobApplicationException("Cannot apply for this job. Some error occured");
        }

    }

    @Override
    public List<JobApplication> findAll() {
        return jobApplicationDao.findAll();

    }

    @Override
    public String remove(Long id) {
        if (jobApplicationDao.existsById(id)) {
            jobApplicationDao.deleteById(id);
            return "deleted";
        } else {
            throw new InvalidJobApplicationException();
        }

    }
}
