package com.example.hotelms.Repository;

import com.example.hotelms.Entities.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin,String> {
    @Query("SELECT password FROM Admin WHERE username = :username")
    String findByUsername(@Param("username") String username);
}
