package com.example.hotelms.Services;
import com.example.hotelms.Entities.Hotel;
import com.example.hotelms.Entities.Restaurant;
import com.example.hotelms.Repository.HotelRepository;
import com.example.hotelms.Repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantService {
    private RestaurantRepository restaurantRepository;

    @Autowired
    public RestaurantService (RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    public List<Restaurant> getRestaurants() {
        return restaurantRepository.findAll();
    }

    public Optional<Restaurant> getRestaurant(String restaurantId) {
        return restaurantRepository.findById(restaurantId);

    }

    public void addNewRestaurant(Restaurant restaurant) {
        restaurantRepository.save(restaurant);

    }


    public void deleteRestaurant(String restaurantId) {
        restaurantRepository.deleteById(restaurantId);
    }

}
