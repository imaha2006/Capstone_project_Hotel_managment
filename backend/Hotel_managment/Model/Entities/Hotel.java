package com.example.Hotel_managment.Model.Entities;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Hotel {
//    عشان افتراضي ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int idHotel;
    private String name;
    private String email;
    private String address;
    private int numberRoom;
    private int tel;

    @ManyToOne()
    //f-key
    @JoinColumn( referencedColumnName = "id")
    private Admin admin;

//    @OneToMany(mappedBy = "hotel")
//    @JsonIgnore
//
//    private List<Admin> items = new ArrayList<>();

    public Hotel() {
    }

    public Hotel(int idHotel, String name, String email, String address, int numberRoom, int tel, Admin admin) {
        this.idHotel = idHotel;
        this.name = name;
        this.email = email;
        this.address = address;
        this.numberRoom = numberRoom;
        this.tel = tel;
        this.admin = admin;
    }

    public int getId() {
        return idHotel;
    }

    public void setId(int idHotel) {
        this.idHotel = idHotel;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getNumberRoom() {
        return numberRoom;
    }

    public void setNumberRoom(int numberRoom) {
        this.numberRoom = numberRoom;
    }

    public int getTel() {
        return tel;
    }

    public void setTel(int tel) {
        this.tel = tel;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }
}