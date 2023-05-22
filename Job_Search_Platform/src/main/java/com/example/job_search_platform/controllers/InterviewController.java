package com.example.job_search_platform.controllers;

import com.example.job_search_platform.dto.InterviewDTO;
import com.example.job_search_platform.entities.Interview;
import com.example.job_search_platform.services.InterviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000/")
@RequestMapping("/interview")
@RestController
public class InterviewController {
    @Autowired
    InterviewService interviewService;
    @PostMapping("/schedule")
    public void saveinterview(@RequestBody InterviewDTO interviewDTO){
        interviewService.addinterview(interviewDTO);
    }
    @GetMapping ("/get/all/interview/list")
    public List<Interview> getinterviewbyrecruiter(@RequestParam long id){
        return interviewService.getallinterview(id);
    }
    @GetMapping("/get/all/interview")
    public List<Interview> getinterviewbyjobseeker(@RequestParam long id){
        return interviewService.getallinterviewbyjobseeker(id);
    }
}
