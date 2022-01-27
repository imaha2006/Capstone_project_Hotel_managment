package com.example.hotelms.Services;


import com.example.hotelms.Entities.Hotel;
import com.example.hotelms.Repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HotelService {

    private HotelRepository hotelRepository;

    @Autowired
    public HotelService (HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    public List<Hotel> gethotels() {
        return hotelRepository.findAll();
    }

    public Optional<Hotel> getHotel(Integer hotelId) {
        return hotelRepository.findById(hotelId);

    }

    public void addNewHotel(Hotel hotel) {
        hotelRepository.save(hotel);

    }


    public void deleteAdmin(Integer hotelId) {
        hotelRepository.deleteById(hotelId);
    }


    public void deleteHotel(Integer hotelId) {
        hotelRepository.deleteById(hotelId);

    }

}


