package com.example.job_search_platform.repositories;

import com.example.job_search_platform.entities.Recruiter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecruiterDao extends JpaRepository<Recruiter, Long> {
}
