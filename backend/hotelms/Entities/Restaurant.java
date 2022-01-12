package com.example.hotelms.Entities;

import javax.persistence.*;

@Entity
@Table
public class Restaurant {
    @Id
    private String nameMeal;
    private String price;
    private String type;
    private String img;

    @OneToOne//(cascade = CascadeType.ALL)
    @JoinColumn(name ="H_id" )
    private Hotel hotel;

    @OneToOne
    @JoinColumn(name ="B_id" )
    private Branch branch;


    public Restaurant(String nameMeal, String price, String type, String img, Hotel hotel, Branch branch) {
        this.nameMeal = nameMeal;
        this.price = price;
        this.type = type;
        this.img = img;
        this.hotel = hotel;
        this.branch = branch;
    }


    public Restaurant() {
    }



    public String getNameMeal() {
        return nameMeal;
    }

    public void setNameMeal(String nameMeal) {
        this.nameMeal = nameMeal;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }

    public Branch getBranch() {
        return branch;
    }

    public void setBranch(Branch branch) {
        this.branch = branch;
    }

    @Override
    public String toString() {
        return "Restaurant{" +
                "nameMeal='" + nameMeal + '\'' +
                ", price='" + price + '\'' +
                ", type='" + type + '\'' +
                ", img='" + img + '\'' +
                ", hotel=" + hotel +
                '}';
    }
}
