package com.example.hotelms.Services;

import com.example.hotelms.Entities.Admin;
import com.example.hotelms.Entities.Branch;
import com.example.hotelms.Entities.Hotel;
import com.example.hotelms.Entities.Room;
import com.example.hotelms.Repository.RoomRepository;
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

class RoomServiceTest {
    @Mock
    RoomRepository roomRepository;
    @InjectMocks
    RoomService roomService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetRooms() {
        List<Room> result = roomService.getRooms();
        Assertions.assertEquals(Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(null), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), new Branch(0, "branchName", "address", 0, new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(null), Arrays.<Branch>asList(null)), Arrays.<Room>asList(null)))), result);
    }

    @Test
    void testGetRoom() {
        Optional<Room> result = roomService.getRoom("roomId");
        Assertions.assertEquals(null, result);
    }

    @Test
    void testAddNewRoom() {
        roomService.addNewRoom(new Room("numberRoom", "typeRoom", "price", "img", new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(null), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), new Branch(0, "branchName", "address", 0, new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(null), Arrays.<Branch>asList(null)), Arrays.<Room>asList(null))));
    }

    @Test
    void testDeleteRoom() {
        roomService.deleteRoom("roomId");
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme