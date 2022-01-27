package com.example.hotelms.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Branch {
    @Id
    private int id;
    private String branchName;
    private String address;
    private int phone;


    @ManyToOne
    @JoinColumn(name = "H_id" , referencedColumnName = "idHotel")
    private Hotel hotel;
//
//
    @OneToMany(mappedBy = "branch")
    @JsonIgnore
    private List<Room> items= new ArrayList<>();



    public Branch() {

    }

    public Branch(int id, String branchName, String address, int phone, Hotel hotel, List<Room> items) {
        this.id = id;
        this.branchName = branchName;
        this.address = address;
        this.phone = phone;
        this.hotel = hotel;
        this.items = items;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
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



    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }

    public List<Room> getItems() {
        return items;
    }

    public void setItems(List<Room> items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return "Branch{" +
                "id=" + id +
                ", branchName='" + branchName + '\'' +
                ", address='" + address + '\'' +
                ", phone=" + phone +

                ", hotel=" + hotel +
                ", items=" + items +
                '}';
    }
}
