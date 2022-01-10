package com.example.hotelms.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Admin {
    @Id
    private String username;
    private String password;



    @OneToMany(mappedBy = "admin")
    @JsonIgnore
    private List<Hotel> items= new ArrayList<>();

    public Admin(String username, String password, List<Hotel> items) {
        this.username = username;
        this.password = password;
        this.items = items;
    }

    public Admin() {
    }


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Hotel> getItems() {
        return items;
    }

    public void setItems(List<Hotel> items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", items=" + items +
                '}';
    }
}
