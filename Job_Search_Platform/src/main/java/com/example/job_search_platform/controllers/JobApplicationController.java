package com.example.job_search_platform.controllers;

import com.example.job_search_platform.dto.JobApplicationDTO;
import com.example.job_search_platform.entities.JobApplication;
import com.example.job_search_platform.exception.InvalidJobApplicationException;
import com.example.job_search_platform.services.JobApplicationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins="http://localhost:3000/")
@RequestMapping("/application")
@RestController
public class JobApplicationController {
    @Autowired
    JobApplicationService jobApplicationService;
    @PostMapping("/apply")
    public String saveapplication(@RequestBody JobApplicationDTO jobApplicationDTO){
        return jobApplicationService.saveJobApplication(jobApplicationDTO);
    }

    @GetMapping(value = "/findAll")
    public ResponseEntity<Object> findAll() {
        try {
            return new ResponseEntity<>(jobApplicationService.findAll(), HttpStatus.OK);
        } catch (InvalidJobApplicationException e) {
            throw new InvalidJobApplicationException("Job Application Id Not Found");
        }
    }

    @DeleteMapping(value = "/delete")
    public ResponseEntity<Object> remove(@Valid @RequestParam Long id) {
        try {
            jobApplicationService.remove(id);
            return new ResponseEntity<>("deleted", HttpStatus.OK);
        } catch (InvalidJobApplicationException e) {
            throw new InvalidJobApplicationException("Invalid Job Application Id");
        }
    }
}
