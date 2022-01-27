package com.example.hotelms.controller;

import com.example.hotelms.Entities.Hotel;
import com.example.hotelms.Entities.Room;
import com.example.hotelms.Services.HotelService;
import com.example.hotelms.Services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "https://hotelmsplus.herokuapp.com/")
@RestController
@RequestMapping(path ="api/room")
public class RoomController {
    private RoomService roomService;

    @Autowired
    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }
    @GetMapping
    public List<Room> getRooms() {
        return roomService.getRooms();
    }

    @GetMapping(path = "{roomId}")
    public Optional<Room> getRoom(@PathVariable(name = "roomId") String roomId) {
        return roomService.getRoom(roomId);
    }


    /*@GetMapping(path = "bran/{branchId}")
    public Optional<Room> getRoomByBranchId(@PathVariable(name = "branchId") Integer branchId) {
        return roomService.getRoomByBranchId(branchId);
    }*/



    @PostMapping(path = "add")
    public void registerNewRoom(@RequestBody Room room) {
        roomService.addNewRoom(room);
    }


    @DeleteMapping(path = "delete/{roomId}")
    public void deleteRoom(@PathVariable ("roomId") String roomId){
        roomService.deleteRoom(roomId);
    }

}
