package com.example.job_search_platform.controllers;

import com.example.job_search_platform.entities.BookmarkedJob;
import com.example.job_search_platform.entities.JobApplication;
import com.example.job_search_platform.entities.JobSeeker;
import com.example.job_search_platform.entities.Users;
import com.example.job_search_platform.services.JobSeekerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping(value="/jobseeker")
public class JobSeekerController{
    @Autowired
    JobSeekerService jobSeekerService;
    @GetMapping("/getallseekers")
    public List<JobSeeker> getall(){
        return jobSeekerService.getall();
    }

    @GetMapping("/getbyid")
    public List<BookmarkedJob> getbyid(@RequestParam long jid){
        return jobSeekerService.getbyid(jid);
    }
    @GetMapping("/getallappliedjobs")
    public List<JobApplication> getallapplications(@RequestParam long jid){
        return jobSeekerService.getbyjobseekerid(jid);
    }
    @GetMapping("/filter/jobseekers")
    public List<JobSeeker> getusersbyskills(@RequestParam String search){
        return jobSeekerService.findusersbyskillsandqualifications(search);
    }

}
