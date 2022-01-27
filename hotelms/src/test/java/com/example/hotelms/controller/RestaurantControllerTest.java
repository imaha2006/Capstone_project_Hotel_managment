package com.example.hotelms.controller;

import com.example.hotelms.Entities.*;
import com.example.hotelms.Services.RestaurantService;
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

class RestaurantControllerTest {
    @Mock
    RestaurantService restaurantService;
    @InjectMocks
    RestaurantController restaurantController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetRestaurants() {
        when(restaurantService.getRestaurants()).thenReturn(Arrays.<Restaurant>asList(new Restaurant("nameMeal", "price", "type", "img", new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null))))), new Branch(0, "branchName", "address", 0, new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null)), Arrays.<Branch>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(null), Arrays.<Branch>asList(null)), null))))));

        List<Restaurant> result = restaurantController.getRestaurants();
        Assertions.assertEquals(Arrays.<Restaurant>asList(new Restaurant("nameMeal", "price", "type", "img", new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null))))), new Branch(0, "branchName", "address", 0, new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null)), Arrays.<Branch>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(null), Arrays.<Branch>asList(null)), null))))), result);
    }

    @Test
    void testGetRestaurant() {
        when(restaurantService.getRestaurant(anyString())).thenReturn(null);

        Optional<Restaurant> result = restaurantController.getRestaurant("restaurantId");
        Assertions.assertEquals(null, result);
    }

    @Test
    void testRegisterNewRestaurant() {
        restaurantController.registerNewRestaurant(new Restaurant("nameMeal", "price", "type", "img", new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(null)))), Arrays.<Branch>asList(new Branch(0, "branchName", "address", 0, null, Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null))))), new Branch(0, "branchName", "address", 0, new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", null, null)), Arrays.<Branch>asList(null)), Arrays.<Room>asList(new Room("numberRoom", "typeRoom", "price", "img", new Hotel(0, "name", "address", 0, "email", "img", new Admin("username", "password", Arrays.<Hotel>asList(null)), Arrays.<Room>asList(null), Arrays.<Branch>asList(null)), null)))));
    }

    @Test
    void testDeleteRestaurant() {
        restaurantController.deleteRestaurant("restaurantId");
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme