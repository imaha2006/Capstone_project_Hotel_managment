package com.example.hotelms.Repository;

import com.example.hotelms.Entities.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant ,String> {
}
