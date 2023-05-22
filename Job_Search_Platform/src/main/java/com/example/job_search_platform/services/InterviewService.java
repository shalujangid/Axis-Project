package com.example.job_search_platform.services;

import com.example.job_search_platform.dto.InterviewDTO;
import com.example.job_search_platform.entities.Interview;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface InterviewService {
    String addinterview(InterviewDTO interviewDTO);

    List<Interview> getallinterview(long id);
    List<Interview> getallinterviewbyjobseeker(long id);
}
