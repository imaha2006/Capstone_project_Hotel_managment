package com.example.Hotel_managment.Model.Service;

import com.example.Hotel_managment.Model.Entities.Hotel;
import com.example.Hotel_managment.Model.Repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HotelService {

    private HotelRepository hotelRepository;
    @Autowired
    public HotelService(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    public Optional<Hotel> getHotel(Integer hotelId) {
        return hotelRepository.findById(hotelId);

    }

    public List<Hotel> getHotels() {
        return hotelRepository.findAll();
    }
    public void addNewHotel(Hotel hotel) {
        hotelRepository.save(hotel);
    }
    public void deleteUser(Integer hotelId) {
        hotelRepository.deleteById(hotelId);

    }

}

