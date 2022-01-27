package com.example.hotelms.Services;

import com.example.hotelms.Entities.Admin;
import com.example.hotelms.Entities.Branch;
import com.example.hotelms.Entities.Hotel;
import com.example.hotelms.Entities.Room;
import com.example.hotelms.Repository.BranchRepository;
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

class BranchServiceTest {
    @Mock
    BranchRepository branchRepository;
    @InjectMocks
    BranchService branchService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetbranchs() {
        List<Branch> result = branchService.getbranchs();
        Assertions.assertEquals(Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null)), Arrays.<Branch>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(null), Arrays.<Branch>asList(null)), null)))), result);
    }

    @Test
    void testGetBranch() {
        Optional<Branch> result = branchService.getBranch(Integer.valueOf(0));
        Assertions.assertEquals(null, result);
    }

    @Test
    void testAddNewBranch() {
        branchService.addNewBranch(new Branch(0, "branchName", "address", 0, new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null)), Arrays.<Branch>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(null), Arrays.<Branch>asList(null)), null))));
    }

    @Test
    void testDeleteAdmin() {
        branchService.deleteAdmin(Integer.valueOf(0));
    }

    @Test
    void testDeleteBranch() {
        branchService.deleteBranch(Integer.valueOf(0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme