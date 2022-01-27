package com.example.hotelms.Entities;

import javax.persistence.*;

@Entity
@Table
public class Room {

    @Id
    private String numberRoom;
    private String typeRoom;
    private String price;
    private String img;

    @ManyToOne
    @JoinColumn(name = "H_id" , referencedColumnName = "idHotel")
    private Hotel hotel;
//
//
    @ManyToOne
    @JoinColumn(name = "B_id" , referencedColumnName = "id")
    private Branch branch;




    public Room(String numberRoom, String typeRoom, String price, String img, Hotel hotel, Branch branch) {
        this.numberRoom = numberRoom;
        this.typeRoom = typeRoom;
        this.price = price;
        this.img = img;
        this.hotel = hotel;
        this.branch = branch;
    }

    public Room() {
    }




    public String getNumberRoom() {
        return numberRoom;
    }

    public void setNumberRoom(String numberRoom) {
        this.numberRoom = numberRoom;
    }

    public String getTypeRoom() {
        return typeRoom;
    }

    public void setTypeRoom(String typeRoom) {
        this.typeRoom = typeRoom;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
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
        return "Room{" +
                "numberRoom='" + numberRoom + '\'' +
                ", typeRoom='" + typeRoom + '\'' +
                ", price='" + price + '\'' +
                ", img='" + img + '\'' +
                ", hotel=" + hotel +
                '}';
    }
}
