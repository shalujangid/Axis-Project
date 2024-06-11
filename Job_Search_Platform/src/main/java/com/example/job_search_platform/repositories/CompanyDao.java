package com.example.job_search_platform.repositories;

import java.util.List;

import com.example.job_search_platform.entities.Company;
import com.example.job_search_platform.entities.JobPosting;
import com.example.job_search_platform.entities.JobSeeker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyDao extends JpaRepository<Company, Integer> {
    @Query("select c from Company c where c.company_id =:cid")
    Company findjobbycompany(@Param("cid")int id);
}
