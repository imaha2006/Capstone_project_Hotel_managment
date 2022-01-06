package com.example.hotelms.controller;

import com.example.hotelms.Entities.Admin;
import com.example.hotelms.Services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/admin")
public class AdminController {
    private AdminService adminService ;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping
    public List<Admin> getAdmins() {
        return adminService.getAdmins();
    }

    @GetMapping(path = "{adminId}")
    public Optional<Admin> getAdmin(@PathVariable(name = "adminId") String adminId) {
        return adminService.getAdmin(adminId);
    }

    @PostMapping(path= "add")
    public void registerNewAdmin(@RequestBody Admin admin){
        adminService.addNewAdmin(admin);
    }


    @GetMapping(path = "login")
    public String checkLogin(@RequestParam (name = "username") String username ,
                             @RequestParam (name = "password")
            String password ) {
        return adminService.getCheck(username,password);

    }





    @DeleteMapping(path = "delete/{adminId}")
    public void deleteAdmin(@PathVariable ("adminId") String adminId){
        adminService.deleteAdmin(adminId);
    }



}
