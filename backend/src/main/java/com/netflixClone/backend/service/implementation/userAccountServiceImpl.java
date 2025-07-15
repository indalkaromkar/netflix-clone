package com.netflixClone.backend.service.implementation;

import com.netflixClone.backend.model.userAccount;
import com.netflixClone.backend.repository.userAccountRepo;
import com.netflixClone.backend.service.userAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class userAccountServiceImpl implements userAccountService{
    @Autowired
    private userAccountRepo userAccountRepository;

    public userAccount userRegister(userAccount newUser){
        return  userAccountRepository.save(newUser);
    }
    public boolean emailExists(String email){
        Optional<userAccount> userEmail= userAccountRepository.findByEmail(email);
        return userEmail.isPresent();
    }
    public boolean userAuthentication(String email,String password){
        Optional<userAccount> userAccount= userAccountRepository.findByEmail(email);
        String correctPassword=userAccount.get().getPassword();
        return correctPassword.equals(password);
    }
}
