package com.example.job_search_platform.controllers;

import com.example.job_search_platform.entities.Users;
import com.example.job_search_platform.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping(value="/profile")
public class UserController {
    @Autowired
    UserService userService;


    @GetMapping("/getalluser")
    public List<Users> getall(){
        return userService.GetAll();
    }

    @GetMapping("/logmein")
    public Users getbyemail(@RequestParam String email){
        return userService.getByEmail(email);
    }

    @PostMapping ("/saveuser")
    public Users saveuser(@RequestBody Users users){
        return userService.saveuser(users);
    }
}
