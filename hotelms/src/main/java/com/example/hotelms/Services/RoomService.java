package com.example.hotelms.Services;
import com.example.hotelms.Entities.Hotel;
import com.example.hotelms.Entities.Room;
import com.example.hotelms.Repository.HotelRepository;
import com.example.hotelms.Repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {
    private RoomRepository roomRepository;

    @Autowired
    public RoomService (RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public List<Room> getRooms() {
        return roomRepository.findAll();
    }

    public Optional<Room> getRoom(String roomId) {
        return roomRepository.findById(roomId);

    }
    /*public Optional<Room> getRoomByBranchId(Integer branchId) {
        return roomRepository.findByBranchId(branchId);

    }*/

    public void addNewRoom(Room room) {
        roomRepository.save(room);

    }


    public void deleteRoom(String roomId) {
        roomRepository.deleteById(roomId);
    }

}
