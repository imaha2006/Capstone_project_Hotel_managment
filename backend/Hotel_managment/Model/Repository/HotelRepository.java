package com.example.Hotel_managment.Model.Repository;

import com.example.Hotel_managment.Model.Entities.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelRepository extends JpaRepository<Hotel, Integer> {
}
