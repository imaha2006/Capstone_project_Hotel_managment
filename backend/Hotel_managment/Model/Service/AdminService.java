package com.example.Hotel_managment.Model.Service;

import com.example.Hotel_managment.Model.Entities.Admin;
import com.example.Hotel_managment.Model.Repository.AdminRepository;
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

    public Optional<Admin> getAdmin(Integer adminId) {
        return adminRepository.findById(adminId);

    }

    public List<Admin> getAdmins() {
        return adminRepository.findAll();
    }
    public void addNewAdmin(Admin admin) {
        adminRepository.save(admin);
    }
    public void deleteUser(Integer adminId) {
        adminRepository.deleteById(adminId);

    }

}

