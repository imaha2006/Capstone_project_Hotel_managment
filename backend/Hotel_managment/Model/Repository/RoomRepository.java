package com.example.Hotel_managment.Model.Repository;

import com.example.Hotel_managment.Model.Entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room,Integer> {
}
