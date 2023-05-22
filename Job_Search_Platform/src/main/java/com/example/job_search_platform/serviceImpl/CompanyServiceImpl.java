package com.example.job_search_platform.serviceImpl;

import com.example.job_search_platform.entities.JobPosting;
import com.example.job_search_platform.repositories.CompanyDao;
import com.example.job_search_platform.repositories.JobPostingDao;
import com.example.job_search_platform.services.CompanyService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@Transactional
public class CompanyServiceImpl implements CompanyService {
    @Autowired
    CompanyDao companyDao;

    @Autowired
    JobPostingDao jobPostingDao;
    @Override
    public List<JobPosting> findjobpostingbycompany(int cid) {
        System.out.println("cominf in c service");
        companyDao.findjobbycompany(cid);
        return jobPostingDao.findAllByCompany(companyDao.findjobbycompany(cid));
    }
}
