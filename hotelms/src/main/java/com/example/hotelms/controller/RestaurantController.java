package com.example.hotelms.controller;
import com.example.hotelms.Entities.Restaurant;
import com.example.hotelms.Entities.Room;
import com.example.hotelms.Services.RestaurantService;
import com.example.hotelms.Services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "https://hotelmsplus.herokuapp.com/")
@RestController
@RequestMapping(path ="api/Restaurant")
public class RestaurantController {
    private RestaurantService restaurantService;

    @Autowired
    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }
    @GetMapping
    public List<Restaurant> getRestaurants() {
        return restaurantService.getRestaurants();
    }

    @GetMapping(path = "{restaurantId}")
    public Optional<Restaurant> getRestaurant(@PathVariable(name = "restaurantId") String restaurantId) {
        return restaurantService.getRestaurant(restaurantId);
    }

    @PostMapping(path = "add")
    public void registerNewRestaurant(@RequestBody Restaurant restaurant) {
        restaurantService.addNewRestaurant(restaurant);
    }


    @DeleteMapping(path = "delete/{restaurantId}")
    public void deleteRestaurant(@PathVariable ("restaurantId") String restaurantId){
        restaurantService.deleteRestaurant(restaurantId);
    }


}
