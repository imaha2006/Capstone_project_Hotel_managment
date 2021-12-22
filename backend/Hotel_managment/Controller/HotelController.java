package com.example.Hotel_managment.Controller;

import com.example.Hotel_managment.Model.Entities.Admin;
import com.example.Hotel_managment.Model.Entities.Hotel;
import com.example.Hotel_managment.Model.Service.AdminService;
import com.example.Hotel_managment.Model.Service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/hotel")

public class HotelController {

    private HotelService hotelService;


    @Autowired
    public HotelController(HotelService hotelService) {
        this.hotelService = hotelService;
    }

    @GetMapping
    public List<Hotel> getHotels() {
        return hotelService.getHotels();
    }
    @GetMapping(path = "{hotelId}")
    public Optional<Hotel> getHotels(@PathVariable(name = "hotelId") Integer hotelId) {
        return hotelService.getHotel(hotelId);
    }
    @PostMapping(path = "add")
    public void registerNewHotel(@RequestBody Hotel hotel){
        hotelService.addNewHotel(hotel);
    }

    @DeleteMapping(path = "delete/{hotelId}")
    public void deleteHotel(@PathVariable ("hotelId") Integer hotelId){
        hotelService.deleteUser(hotelId);
    }
}
