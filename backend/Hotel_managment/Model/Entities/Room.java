package com.example.Hotel_managment.Model.Entities;


import javax.persistence.*;

@Entity
@Table
public class Room {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int numberRoom;
    private int price;
    private String typeRoom;
    private String address;


    @ManyToOne()
    //f-key
    @JoinColumn( referencedColumnName = "idHotel", name = "hotel_id")
    private Hotel hotel;

    public Room() {
    }

    public Room(int numberRoom, int price, String typeRoom, String address, Hotel hotel) {
        this.numberRoom = numberRoom;
        this.price = price;
        this.typeRoom = typeRoom;
        this.address = address;
        this.hotel = hotel;
    }

    public int getNumberRoom() {
        return numberRoom;
    }

    public void setNumberRoom(int numberRoom) {
        this.numberRoom = numberRoom;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getTypeRoom() {
        return typeRoom;
    }

    public void setTypeRoom(String typeRoom) {
        this.typeRoom = typeRoom;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Room{" +
                "numberRoom=" + numberRoom +
                ", price=" + price +
                ", typeRoom='" + typeRoom + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}
