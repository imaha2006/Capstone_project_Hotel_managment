package com.example.Hotel_managment.Controller;


import com.example.Hotel_managment.Model.Entities.Room;
import com.example.Hotel_managment.Model.Service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/room")
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
    public Optional<Room> getRooms(@PathVariable(name = "roomId") Integer roomId) {
        return roomService.getRoom(roomId);
    }
    @PostMapping(path = "add")
    public void registerNewRoom(@RequestBody Room room){
        roomService.addNewRoom(room);
    }

    @DeleteMapping(path = "delete/{roomId}")
    public void deleteRoom(@PathVariable ("roomId") Integer roomId){
        roomService.deleteUser(roomId);
    }
}


