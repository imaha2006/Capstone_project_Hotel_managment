package com.example.hotelms.Services;

import com.example.hotelms.Entities.Admin;
import com.example.hotelms.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

        private AdminRepository adminRepository;

        @Autowired
        public AdminService(AdminRepository adminRepository) {
            this.adminRepository = adminRepository;
        }

        public List<Admin> getAdmins() {
            return adminRepository.findAll();
        }

        public Optional<Admin> getAdmin(String adminId) {
            return adminRepository.findById(adminId);

        }

        public void addNewAdmin(Admin admin) {
            adminRepository.save(admin);

        }


        public void deleteAdmin(String adminId) {
            adminRepository.deleteById(adminId);
        }


    public String getCheck(String username ,String password) {
        if( adminRepository.existsById(username)  ) {

            String Admin = adminRepository.findByUsername(username);
            if (Admin.equals(password)) {
                return "welcome you Authentication";
            } else {
                return " sorry not  Authentication";
            }
        }
        return "sorry not  Authentication";
    }
}

