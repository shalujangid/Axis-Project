package com.example.job_search_platform.repositories;

import com.example.job_search_platform.entities.Company;
import com.example.job_search_platform.entities.JobPosting;
import com.example.job_search_platform.entities.JobSeeker;
import com.example.job_search_platform.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobSeekerDao extends JpaRepository<JobSeeker, Long> {

    @Query("select j from JobSeeker j where j.jseeker_id =:jid")
    JobSeeker getbyif(@Param("jid")long id);

    List<JobSeeker> findAllByResume(String search);
}
