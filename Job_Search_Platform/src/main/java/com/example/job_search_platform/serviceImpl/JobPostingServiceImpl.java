package com.example.job_search_platform.serviceImpl;

import com.example.job_search_platform.dto.JobPostingDTO;
import com.example.job_search_platform.entities.Company;
import com.example.job_search_platform.entities.JobApplication;
import com.example.job_search_platform.entities.JobPosting;
import com.example.job_search_platform.entities.Recruiter;
import com.example.job_search_platform.exception.InvalidJobpostException;
import com.example.job_search_platform.repositories.CompanyDao;
import com.example.job_search_platform.repositories.JobApplicationDao;
import com.example.job_search_platform.repositories.JobPostingDao;
import com.example.job_search_platform.repositories.RecruiterDao;
import com.example.job_search_platform.services.JobPostingService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class JobPostingServiceImpl implements JobPostingService {
    @Autowired
    JobPostingDao jobPostingDao;
    @Autowired
    CompanyDao companyDao;
    @Autowired
    RecruiterDao recruiterDao;
    @Autowired
    JobApplicationDao jobApplicationDao;
    @Override
    public JobPosting savejobpost(JobPostingDTO jobPostingDTO){
        JobPosting jobPosting = new JobPosting();
        if ((jobPostingDTO.getCompany_id() != 0) || !jobPostingDTO.getLocation().isEmpty() || !jobPostingDTO.getDescription().isEmpty() || !jobPostingDTO.getTitle().isEmpty() || !jobPostingDTO.getState().isEmpty()
                || !jobPostingDTO.getExperience().isEmpty()  || !jobPostingDTO.getIndustry().isEmpty()   || !jobPostingDTO.getResponsibilties().isEmpty() || !jobPostingDTO.getQualifications().isEmpty() || jobPostingDTO.getSalary() != 0.0 ) {

            jobPosting.setState(jobPostingDTO.getState());
            jobPosting.setCompany(companyDao.findById(jobPostingDTO.getCompany_id()).get());
            jobPosting.setTitle(jobPostingDTO.getTitle());
            jobPosting.setDescription(jobPostingDTO.getDescription());
            jobPosting.setQualifications(jobPostingDTO.getQualifications());
            jobPosting.setResponsibilties(jobPostingDTO.getResponsibilties());
            jobPosting.setLocation(jobPostingDTO.getLocation());
            jobPosting.setSalary(jobPostingDTO.getSalary());
            jobPosting.setIndustry(jobPostingDTO.getIndustry());
            jobPosting.setExperience(jobPostingDTO.getExperience());
            jobPosting.setKeywords(jobPostingDTO.getState()+","+jobPostingDTO.getTitle()+","+jobPostingDTO.getDescription()+","+jobPostingDTO.getExperience()+","+jobPostingDTO.getQualifications());
            return jobPostingDao.save(jobPosting);
        }
        else {
            throw new InvalidJobpostException();
        }
    }
    @Override
    public JobPosting updatejobpost(JobPostingDTO jobPostingDTO){
        JobPosting jobPosting = new JobPosting();
        if ((jobPostingDTO.getCompany_id() != 0) || !jobPostingDTO.getLocation().isEmpty() || !jobPostingDTO.getDescription().isEmpty() || !jobPostingDTO.getTitle().isEmpty() || !jobPostingDTO.getState().isEmpty()
                || !jobPostingDTO.getExperience().isEmpty()  || !jobPostingDTO.getIndustry().isEmpty()   || !jobPostingDTO.getResponsibilties().isEmpty() || !jobPostingDTO.getQualifications().isEmpty() || jobPostingDTO.getSalary() != 0.0 ) {

            jobPosting.setState(jobPostingDTO.getState());
            jobPosting.setCompany(companyDao.findById(jobPostingDTO.getCompany_id()).get());
            jobPosting.setTitle(jobPostingDTO.getTitle());
            jobPosting.setDescription(jobPostingDTO.getDescription());
            jobPosting.setQualifications(jobPostingDTO.getQualifications());
            jobPosting.setResponsibilties(jobPostingDTO.getResponsibilties());
            jobPosting.setLocation(jobPostingDTO.getLocation());
            jobPosting.setSalary(jobPostingDTO.getSalary());
            jobPosting.setIndustry(jobPostingDTO.getIndustry());
            jobPosting.setExperience(jobPostingDTO.getExperience());
            jobPosting.setKeywords(jobPostingDTO.getState()+","+jobPostingDTO.getTitle()+","+jobPostingDTO.getDescription()+","+jobPostingDTO.getExperience()+","+jobPostingDTO.getQualifications());
            return jobPostingDao.save(jobPosting);
        }
        else {
            throw new InvalidJobpostException();
        }
    }

    @Override
    public List<JobPosting> getJobpostingAcLocation(String location) {
        return jobPostingDao.findByLocationContainingAllIgnoreCase(location);
    }

    @Override
    public List<JobPosting> findByIndustry(String industry) {
        return jobPostingDao.findByIndustryAllIgnoreCase(industry);
    }

    @Override
    public List<JobPosting> findByKeywords(String keywords) {
        return jobPostingDao.findByKeywordsContainingAllIgnoreCase(keywords);
    }

    @Override
    public List<JobPosting> findalljobs() {
        return jobPostingDao.findAll();
    }

    @Override
    public String delete(long id) {
        if(jobPostingDao.existsById(id)){
            jobPostingDao.deleteById(id);
            return "true";
        }else{
            return "false";
        }
    }

    @Override
    public List<JobApplication> getbyjobpostid(long id) {
        jobPostingDao.getbyjobid(id);
        return jobApplicationDao.findAllByJobPosting( jobPostingDao.getbyjobid(id));
    }

    @Override
    public JobPosting getbyid(long id) {
        return jobPostingDao.findById(id).get();
    }


}
