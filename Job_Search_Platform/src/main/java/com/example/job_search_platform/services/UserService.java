package com.example.job_search_platform.services;

import com.example.job_search_platform.entities.Users;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    List<Users> GetAll();
    Users getByEmail(String email);
    Users saveuser(Users users);
}
