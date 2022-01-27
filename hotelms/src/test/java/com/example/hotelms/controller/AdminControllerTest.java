package com.example.hotelms.controller;

import com.example.hotelms.Entities.Admin;
import com.example.hotelms.Entities.Branch;
import com.example.hotelms.Entities.Hotel;
import com.example.hotelms.Entities.Room;
import com.example.hotelms.Services.AdminService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

class AdminControllerTest {
    @Mock
    AdminService adminService;
    @InjectMocks
    AdminController adminController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAdmins() {
        when(adminService.getAdmins()).thenReturn(Arrays.<Admin>asList(new Admin("username", "password", Arrays.<Hotel>asList(new Hotel(0, "name", "address", 0, "email", "img", null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null)))))))));

        List<Admin> result = adminController.getAdmins();
        Assertions.assertEquals(Arrays.<Admin>asList(new Admin("username", "password", Arrays.<Hotel>asList(new Hotel(0, "name", "address", 0, "email", "img", null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null)))))))), result);
    }

    @Test
    void testGetAdmin() {
        when(adminService.getAdmin(anyString())).thenReturn(null);

        Optional<Admin> result = adminController.getAdmin("adminId");
        Assertions.assertEquals(null, result);
    }

    @Test
    void testRegisterNewAdmin() {
        adminController.registerNewAdmin(new Admin("username", "password", Arrays.<Hotel>asList(new Hotel(0, "name", "address", 0, "email", "img", null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null))))))));
    }

    @Test
    void testCheckLogin() {
        when(adminService.getCheck(anyString(), anyString())).thenReturn("getCheckResponse");

        String result = adminController.checkLogin("username", "password");
        Assertions.assertEquals("replaceMeWithExpectedResult", result);
    }

    @Test
    void testDeleteAdmin() {
        adminController.deleteAdmin("adminId");
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme