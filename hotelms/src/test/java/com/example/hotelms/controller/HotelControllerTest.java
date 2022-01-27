package com.example.hotelms.controller;

import com.example.hotelms.Entities.Admin;
import com.example.hotelms.Entities.Branch;
import com.example.hotelms.Entities.Hotel;
import com.example.hotelms.Entities.Room;
import com.example.hotelms.Services.HotelService;
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

class HotelControllerTest {
    @Mock
    HotelService hotelService;
    @InjectMocks
    HotelController hotelController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetHotels() {
        when(hotelService.gethotels()).thenReturn(Arrays.<Hotel>asList(new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null)))))));

        List<Hotel> result = hotelController.getHotels();
        Assertions.assertEquals(Arrays.<Hotel>asList(new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null)))))), result);
    }

    @Test
    void testGetHotel() {
        when(hotelService.getHotel(anyInt())).thenReturn(null);

        Optional<Hotel> result = hotelController.getHotel(Integer.valueOf(0));
        Assertions.assertEquals(null, result);
    }

    @Test
    void testRegisterNewHotel() {
        hotelController.registerNewHotel(new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null))))));
    }

    @Test
    void testDeleteHotel() {
        hotelController.deleteHotel(Integer.valueOf(0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme