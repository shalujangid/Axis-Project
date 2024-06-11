package com.example.job_search_platform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins="http://localhost:3000")
@SpringBootApplication
public class JobSearchPlatformApplication {

    public static void main(String[] args) {
        SpringApplication.run(JobSearchPlatformApplication.class, args);
//        System.out.println("Coming alert");
    }

}
