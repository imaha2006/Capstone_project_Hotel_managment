import React from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import {useState} from "react";
// import Navbar from "./component/Navbar";
export default function App() {
    let [numberRoom, setNumberRoom] = useState("")
    let [typeRoom, setTypeRoom] = useState("")
    let [price, setPrice] = useState("")
    let[img,setImg] =useState("")
    let [idHotel, setIdHotel] = useState("")
    let [id, setId] = useState("")
    

    function handleNumberRoom(event) {setNumberRoom((numberRoom= event.target.value)); }
    function handlType(event) {setTypeRoom((typeRoom= event.target.value));}
    function handlePrice(event) {setPrice((price= event.target.value)); }
    function handleImg(event) {setImg((img= event.target.value));}
    function handleIdH(event) {setIdHotel((idHotel= event.target.value)); }
    function handleId(event) {setId((id= event.target.value)); }

    let Myhotel={
        idHotel:idHotel,
    }
    let MyBranch={
      id:id,
    }
    let MyRoom ={
        numberRoom:numberRoom,
        typeRoom:typeRoom,
        price:price,
        hotel:Myhotel,
        branch:MyBranch,
         img:img,
    }

        
  function handleClickAdd(event){
    event.preventDefault();
    console.log("in fun")

    axios({
    method:'post',
    url:'api/room/add',
      data: MyRoom,
    });
    }
    return (
    <div>
      <div style={{ width: "30%", margin: "auto", height: "500px" }}>
        {" "}
        <form onSubmit={handleClickAdd} className="login-form">
          <div className="form-group">
            <input
              type="text"
              name="numberRoom"
              onChange={handleNumberRoom}
              placeholder="numberRoom"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="typeRoom"
              onChange={handlType}
              placeholder="typeRoom"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="price"
              onChange={handlePrice}
              placeholder="Price"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="img"
              onChange={handleImg}
              placeholder="img"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="idHotel"
              onChange={handleIdH}
              placeholder="idHotel"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="id"
              onChange={handleId}
              placeholder="id"
            />
          </div>
          {/* <input onClick={handleClickAdd} className="btn1" type="submit" value="Add New Branch" /> */}
          <Link to="/Room"><td><button onClick={handleClickAdd} >add..</button></td></Link>
        </form>
      </div>
   <br></br>
   <br></br>
      <div>
        <h5>All Branches will be displayed heere</h5>
      </div>
    </div>
  );
}

