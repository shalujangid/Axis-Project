package com.example.job_search_platform.controllers;


import com.example.job_search_platform.dto.BookmarkedJobDTO;
import com.example.job_search_platform.entities.BookmarkedJob;
import com.example.job_search_platform.entities.Gender;
import com.example.job_search_platform.entities.JobSeeker;
import com.example.job_search_platform.exception.InvalidBookmarkedJobException;
import com.example.job_search_platform.services.BookmarkedJobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;


@RestController
@RequestMapping("/bmark/job")
@CrossOrigin(origins = "*")
public class BookmarkedJobController {
	@Autowired
	BookmarkedJobService bookmarkedJobService;

	@PostMapping("/add")
	public ResponseEntity<Object> createBookmark(@RequestBody BookmarkedJobDTO bookmarkedJobDTO)
	{
		try {
			bookmarkedJobService.savejob(bookmarkedJobDTO);
		} catch (InvalidBookmarkedJobException exception) {
			throw new InvalidBookmarkedJobException("One or more entered fields contain invalid objects.");
		}
		return new ResponseEntity<>("Added successfully", HttpStatus.OK);

	}

	@GetMapping("/getbookmarkedjobs")
	public List<BookmarkedJob> getbookmarked(@RequestParam long id,Date dob,Gender gender,String
			industry,String resume,long contact,String first,String last,String location)
	{
		System.out.println(id);
		System.out.println(contact);
		JobSeeker j =new JobSeeker();
		j.setJseeker_id(id);
		j.setDob(dob);
		j.setGender(gender);
		j.setIndustry(industry);
		j.setLocation(location);
		j.setResume(resume);
		j.setContact_number(contact);
		j.setFirst_name(first);
		j.setLast_name(last);
		return bookmarkedJobService.findByJobSeeker(j);

	}


}
