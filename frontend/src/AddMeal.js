import React from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import Navbar from "./component/Navbar";

export default function App() {
    let [nameMeal, setNameMeal] = useState("")
    let [price, setPrice] = useState("")
    let [type, setType] = useState("")
    let[img,setImg] =useState("")
    let [idHotel, setidHotel] = useState("")
    let [id, setId] = useState("")


    function handleId(event) {setNameMeal((nameMeal= event.target.value)); }
    function handlePrice(event) {setPrice((price= event.target.value)); }
    function handlType(event) {setType((type= event.target.value));}
    function handleImg(event) {setImg((img= event.target.value));}
    function handleidH(event) {setidHotel((idHotel= event.target.value));}
    function handleId(event) {setId((id= event.target.value)); }
    
    let Myhotel={
        idHotel:idHotel,
    }
    let MyBranch={
      id:id,
    }
    let MyMeal ={
        nameMeal:nameMeal,
        price:price,
        type:type,
        hotel:Myhotel,
        branch:MyBranch,
        img:img,

    }

        
  function handleClickAdd(){
    console.log("in fun")
    console.log(MyMeal)
    axios({
    method:'post',
    url:'api/Restaurant/add',
      data: MyMeal,
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
              name="nameMeal"
              onChange={handleId}
              placeholder="NameMeal"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="type"
              onChange={handlType}
              placeholder="Type"
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
              type="img"
              name="img"
              onChange={handleImg}
              placeholder="img"
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
          <div className="form-group">
            <input
              type="text"
              name="idHotel"
              onChange={handleidH}
              placeholder="idHotel"
            />
          </div>
          <input className="btn1" type="submit" value="Add New Branch" />
          <Link to="/Meal"><td><button onClick={handleClickAdd} >add..</button></td></Link>
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
