package com.example.Hotel_managment.Model.Config;

import com.example.Hotel_managment.Model.Entities.Admin;
import com.example.Hotel_managment.Model.Repository.AdminRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class AdminConfig {
@Bean
    CommandLineRunner commandLineRunner(AdminRepository repository){
    return args -> {
        Admin hh = new Admin(1,"hh","ttt@jj",888,9765);
              repository.saveAll(List.of(hh ));
    };
}
}
