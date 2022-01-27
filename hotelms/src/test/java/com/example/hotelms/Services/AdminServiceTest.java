package com.example.hotelms.Services;

import com.example.hotelms.Entities.Admin;
import com.example.hotelms.Entities.Branch;
import com.example.hotelms.Entities.Hotel;
import com.example.hotelms.Entities.Room;
import com.example.hotelms.Repository.AdminRepository;
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

class AdminServiceTest {
    @Mock
    AdminRepository adminRepository;
    @InjectMocks
    AdminService adminService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAdmins() {
        List<Admin> result = adminService.getAdmins();
        Assertions.assertEquals(Arrays.<Admin>asList(new Admin("username", "password", Arrays.<Hotel>asList(new Hotel(0, "name", "address", 0, "email", "img", null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null)))))))), result);
    }

    @Test
    void testGetAdmin() {
        Optional<Admin> result = adminService.getAdmin("adminId");
        Assertions.assertEquals(null, result);
    }

    @Test
    void testAddNewAdmin() {
        adminService.addNewAdmin(new Admin("username", "password", Arrays.<Hotel>asList(new Hotel(0, "name", "address", 0, "email", "img", null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null))))))));
    }

    @Test
    void testDeleteAdmin() {
        adminService.deleteAdmin("adminId");
    }

    @Test
    void testGetCheck() {
        when(adminRepository.findByUsername(anyString())).thenReturn("findByUsernameResponse");

        String result = adminService.getCheck("username", "password");
        Assertions.assertEquals("replaceMeWithExpectedResult", result);
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme