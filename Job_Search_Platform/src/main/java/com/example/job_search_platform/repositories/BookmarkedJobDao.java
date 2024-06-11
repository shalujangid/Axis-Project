package com.example.job_search_platform.repositories;

import com.example.job_search_platform.dto.BookmarkedJobListDTO;
import com.example.job_search_platform.entities.BookmarkedJob;
import com.example.job_search_platform.entities.Company;
import com.example.job_search_platform.entities.JobSeeker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookmarkedJobDao extends JpaRepository<BookmarkedJob, Long> {
//    @Query(" com.example.job_search_platform.dto.BookmarkedJobListDTO(bj.id, bj.skill.id, bj.skill.name, bj.freelancer.id, CONCAT(bj.freelancer.firstName,' ', bj.freelancer.lastName) as freelancerName, bj.job.id, bj.job.jobTitle) from BookmarkedJob bj where bj.freelancer.id = :frId order by bj.id")
//    List<BookmarkedJobListDTO> findAllBookmarks(@Param("frId") Long frId);

//    @Query("select jobp from BookmarkedJob bk join bk.jobp join JobSeeker  js on bk.js where bk.freelancer_id=js.jseeker_id ")
//    List<BookmarkedJob> findBookmarkedJobByJobSeekerJseeker_idContaining();

    List<BookmarkedJob> findAllByJobSeeker(JobSeeker jobSeeker);


}
