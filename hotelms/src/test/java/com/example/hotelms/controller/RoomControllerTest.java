package com.example.hotelms.controller;

import com.example.hotelms.Entities.Admin;
import com.example.hotelms.Entities.Branch;
import com.example.hotelms.Entities.Hotel;
import com.example.hotelms.Entities.Room;
import com.example.hotelms.Services.RoomService;
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

class RoomControllerTest {
    @Mock
    RoomService roomService;
    @InjectMocks
    RoomController roomController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetRooms() {
        when(roomService.getRooms()).thenReturn(Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(null), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), new Branch(0, "branchName", "address", 0, new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(null), Arrays.<Branch>asList(null)), Arrays.<Room>asList(null)))));

        List<Room> result = roomController.getRooms();
        Assertions.assertEquals(Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(null), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), new Branch(0, "branchName", "address", 0, new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(null), Arrays.<Branch>asList(null)), Arrays.<Room>asList(null)))), result);
    }

    @Test
    void testGetRoom() {
        when(roomService.getRoom(anyString())).thenReturn(null);

        Optional<Room> result = roomController.getRoom("roomId");
        Assertions.assertEquals(null, result);
    }

    @Test
    void testRegisterNewRoom() {
        roomController.registerNewRoom(new Room("numberRoom", "typeRoom", "price", "img", new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(null), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), new Branch(0, "branchName", "address", 0, new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(null), Arrays.<Branch>asList(null)), Arrays.<Room>asList(null))));
    }

    @Test
    void testDeleteRoom() {
        roomController.deleteRoom("roomId");
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme