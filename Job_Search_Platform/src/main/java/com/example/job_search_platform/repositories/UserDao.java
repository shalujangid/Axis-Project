package com.example.job_search_platform.repositories;

import com.example.job_search_platform.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

@Repository
public interface UserDao extends JpaRepository<Users, Long> {

    List<Users> findAll();

    Users save(Users users);

    Users findByEmail(String email);


}
