package com.example.job_search_platform.controllers;

import com.example.job_search_platform.dto.JobPostingDTO;
import com.example.job_search_platform.entities.JobApplication;
import com.example.job_search_platform.entities.JobPosting;
import com.example.job_search_platform.services.CompanyService;
import com.example.job_search_platform.services.JobPostingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000/")
@RequestMapping("/JobPosting")
public class JobPostingController {
	@Autowired
	JobPostingService jobPostingService;

	@Autowired
	CompanyService companyService;

	@PostMapping ("/savejobpost")
	public String savejobpost(@RequestBody JobPostingDTO jobPostingDTO, BindingResult bindingResult)
	{
		 jobPostingService.savejobpost(jobPostingDTO);
		 return "Job posted!";
	}
	@PutMapping  ("/update/job/post")
	public String updatejobpostbyobject(@RequestBody JobPostingDTO jobPostingDTO, BindingResult bindingResult)
	{
		jobPostingService.savejobpost(jobPostingDTO);
		return "updated";
	}
	@GetMapping ("/get/all/post/myloc")
	public ResponseEntity<Object> getBylocation(@RequestParam String location)
	{
		return new ResponseEntity<>(jobPostingService.getJobpostingAcLocation(location), HttpStatus.OK);
	}
	@GetMapping ("/get/all/post/industry")
	public ResponseEntity<Object> getByIndustry(@RequestParam String industry)
	{
		return new ResponseEntity<>(jobPostingService.findByIndustry(industry), HttpStatus.OK);
	}

	@GetMapping ("/get/all/post/keywords")
	public ResponseEntity<Object> getByKeywords(@RequestParam String keywords)
	{
		return new ResponseEntity<>(jobPostingService.findByKeywords(keywords), HttpStatus.OK);
	}

	@GetMapping ("/get/all/post")
	public ResponseEntity<Object> getallpost()
	{
		return new ResponseEntity<>(jobPostingService.findalljobs(), HttpStatus.OK);
	}

	@GetMapping("/companyJobPost")
	public ResponseEntity<Object> getjobpostbycompany(@RequestParam int cid)
	{
		return new ResponseEntity<>(companyService.findjobpostingbycompany(cid), HttpStatus.OK);
	}
	@DeleteMapping ("/delete/job/post")
	public String deletethisjob(@RequestParam long id)
	{
		jobPostingService.delete(id);
		return "deleted";
	}
	@GetMapping("/getalljobseeker/by/appliedjobs")
	public List<JobApplication> getallapplications(@RequestParam long jid){
		return jobPostingService.getbyjobpostid(jid);
	}
	@GetMapping("/get/job/post")
	public JobPosting getpostbyid(@RequestParam long jid){
		return jobPostingService.getbyid(jid);
	}

}
