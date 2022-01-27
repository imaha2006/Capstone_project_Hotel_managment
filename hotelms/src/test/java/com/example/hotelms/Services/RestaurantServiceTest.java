package com.example.hotelms.Services;

import com.example.hotelms.Entities.*;
import com.example.hotelms.Repository.RestaurantRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

class RestaurantServiceTest {
    @Mock
    RestaurantRepository restaurantRepository;
    @InjectMocks
    RestaurantService restaurantService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetRestaurants() {
        List<Restaurant> result = restaurantService.getRestaurants();
        Assertions.assertEquals(Arrays.<Restaurant>asList(new Restaurant("nameMeal", "price", "type", "img", new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null))))), new Branch(0, "branchName", "address", 0, new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null)), Arrays.<Branch>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(null), Arrays.<Branch>asList(null)), null))))), result);
    }

    @Test
    void testGetRestaurant() {
        Optional<Restaurant> result = restaurantService.getRestaurant("restaurantId");
        Assertions.assertEquals(null, result);
    }

    @Test
    void testAddNewRestaurant() {
        restaurantService.addNewRestaurant(new Restaurant("nameMeal", "price", "type", "img", new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null))))), new Branch(0, "branchName", "address", 0, new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null)), Arrays.<Branch>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(null), Arrays.<Branch>asList(null)), null)))));
    }

    @Test
    void testDeleteRestaurant() {
        restaurantService.deleteRestaurant("restaurantId");
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme