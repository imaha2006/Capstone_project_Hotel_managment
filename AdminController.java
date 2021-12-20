package com.example.Hotel_managment.Controller;

import com.example.Hotel_managment.Model.Entities.Admin;
import com.example.Hotel_managment.Model.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(path = "admin")
public class AdminController<شadminController> {

    private AdminService adminService;


    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping
    public List<Admin> getAdmins() {
        return adminService.getAdmins();
    }
    @GetMapping(path = "{adminId}")
    public Optional<Admin> getAdmins(@PathVariable(name = "adminId") Integer adminId) {
        return adminService.getAdmin(adminId);
    }
    @PostMapping(path = "add")
    public void registerNewAdmin(@RequestBody Admin admin){
        adminService.addNewAdmin(admin);
    }

    @DeleteMapping(path = "delete/{adminId}")
    public void deleteAdmin(@PathVariable ("adminId") Integer adminId){
        adminService.deleteUser(adminId);
    }
}