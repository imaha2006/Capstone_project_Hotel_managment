package com.example.hotelms.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Hotel {
    @Id
    private int idHotel;
    private String name;
    private String address;
    private int phone;
    private String email;

    @ManyToOne
    @JoinColumn(name = "admin_id" , referencedColumnName = "username")
    private Admin admin;


    @OneToMany(mappedBy = "hotel")
    @JsonIgnore
    private List<Room> items= new ArrayList<>();

    public Hotel() {
    }


    public Hotel(int idHotel, String name, String address, int phone, String email, Admin admin, List<Room> items) {
        this.idHotel = idHotel;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.admin = admin;
        this.items = items;
    }



    public int getIdHotel() {
        return idHotel;
    }

    public void setIdHotel(int idHotel) {
        this.idHotel = idHotel;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public List<Room> getItems() {
        return items;
    }

    public void setItems(List<Room> items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return "Hotel{" +
                "idHotel=" + idHotel +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", phone=" + phone +
                ", email='" + email + '\'' +
                ", admin=" + admin +
                ", items=" + items +
                '}';
    }
}
