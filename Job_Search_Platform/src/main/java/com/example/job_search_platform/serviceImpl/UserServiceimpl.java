package com.example.job_search_platform.serviceImpl;

import com.example.job_search_platform.entities.Users;
import com.example.job_search_platform.repositories.UserDao;
import com.example.job_search_platform.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserServiceimpl implements UserService {
    @Autowired
    UserDao userDao;

    @Override
    public List<Users> GetAll() {
        return userDao.findAll();
    }

    @Override
    public Users getByEmail(String email) {
        return userDao.findByEmail(email);
    }

    @Override
    public Users saveuser(Users users) {
        return userDao.save(users);
    }

}
