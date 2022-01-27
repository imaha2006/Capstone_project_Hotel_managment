package com.example.hotelms.controller;


import com.example.hotelms.Entities.Hotel;
import com.example.hotelms.Services.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "https://hotelmsplus.herokuapp.com/")
@RestController
@RequestMapping(path ="api/hotel")
public class HotelController {
    private HotelService hotelService;

    @Autowired
    public HotelController(HotelService hotelService) {
        this.hotelService = hotelService;
    }

    @GetMapping
    public List<Hotel> getHotels() {
        return hotelService.gethotels();
    }

    @GetMapping(path = "{hotelId}")
    public Optional<Hotel> getHotel(@PathVariable(name = "hotelId") Integer hotelId) {
        return hotelService.getHotel(hotelId);
    }

    @PostMapping(path = "add")
    public void registerNewHotel(@RequestBody Hotel hotel) {
        hotelService.addNewHotel(hotel);
    }
    //
    @DeleteMapping(path = "delete/{hotelId}")
    public void deleteHotel(@PathVariable ("hotelId") Integer hotelId){
        hotelService.deleteHotel(hotelId);
    }
}