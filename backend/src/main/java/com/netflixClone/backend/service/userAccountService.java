package com.netflixClone.backend.service;

import com.netflixClone.backend.model.userAccount;

import java.util.Optional;


public interface userAccountService {
    userAccount userRegister(userAccount newUser);
    boolean emailExists(String email);
    boolean userAuthentication(String email,String password);
}
