package com.example.Hotel_managment.Model.Entities;


import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class Hotel {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;
    private String name;
    private String email;
    private int address;
    private int numberRoom;
    private int tel;
    @OneToMany(mappedBy = "hotel")
    private List<Admin> admins;

    public Hotel(int id, String name, String email, int address, int numberRoom, int tel, List<Admin> admins) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.numberRoom = numberRoom;
        this.tel = tel;
        this.admins = admins;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public int getAddress() {
        return address;
    }

    public int getNumberRoom() {
        return numberRoom;
    }

    public int getTel() {
        return tel;
    }

    public List<Admin> getAdmins() {
        return admins;
    }
}