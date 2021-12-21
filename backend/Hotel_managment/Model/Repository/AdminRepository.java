package com.example.Hotel_managment.Model.Repository;

import com.example.Hotel_managment.Model.Entities.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
                                   // اسم الجدول - ونوع pk
public interface AdminRepository extends JpaRepository<Admin , Integer> {

}
