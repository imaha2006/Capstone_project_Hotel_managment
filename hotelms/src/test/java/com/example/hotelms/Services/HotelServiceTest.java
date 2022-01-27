package com.example.hotelms.Services;

import com.example.hotelms.Entities.Admin;
import com.example.hotelms.Entities.Branch;
import com.example.hotelms.Entities.Hotel;
import com.example.hotelms.Entities.Room;
import com.example.hotelms.Repository.HotelRepository;
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

class HotelServiceTest {
    @Mock
    HotelRepository hotelRepository;
    @InjectMocks
    HotelService hotelService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGethotels() {
        List<Hotel> result = hotelService.gethotels();
        Assertions.assertEquals(Arrays.<Hotel>asList(new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null)))))), result);
    }

    @Test
    void testGetHotel() {
        Optional<Hotel> result = hotelService.getHotel(Integer.valueOf(0));
        Assertions.assertEquals(null, result);
    }

    @Test
    void testAddNewHotel() {
        hotelService.addNewHotel(new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null))))));
    }

    @Test
    void testDeleteAdmin() {
        hotelService.deleteAdmin(Integer.valueOf(0));
    }

    @Test
    void testDeleteHotel() {
        hotelService.deleteHotel(Integer.valueOf(0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme