package com.example.hotelms.Entities;

import javax.persistence.*;

@Entity
@Table
public class Room {

    @Id
    private String numberRoom;
    private String typeRoom;
    private String price;


    @ManyToOne
    @JoinColumn(name = "H_id" , referencedColumnName = "idHotel")
    private Hotel hotel;

    public Room() {
    }

//    public Room(String numberRoom, String typeRoom, String price) {
//        this.numberRoom = numberRoom;
//        this.typeRoom = typeRoom;
//        this.price = price;
//    }


    public Room(String numberRoom, String typeRoom, String price, Hotel hotel) {
        this.numberRoom = numberRoom;
        this.typeRoom = typeRoom;
        this.price = price;
        this.hotel = hotel;
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

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }

    @Override
    public String toString() {
        return "Room{" +
                "numberRoom='" + numberRoom + '\'' +
                ", typeRoom='" + typeRoom + '\'' +
                ", price='" + price + '\'' +
                ", hotel=" + hotel +
                '}';
    }
}
