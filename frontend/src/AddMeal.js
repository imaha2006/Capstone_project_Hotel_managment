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
    
    function handleId(event) {setNameMeal((nameMeal= event.target.value)); }
    function handlePrice(event) {setPrice((price= event.target.value)); }
    function handlType(event) {setType((type= event.target.value));}
    function handleImg(event) {setImg((img= event.target.value));}
    function handleidH(event) {setidHotel((idHotel= event.target.value));}
    
    let Myhotel={
        idHotel:idHotel,
    }

    let MyMeal ={
        nameMeal:nameMeal,
        price:price,
        type:type,
        hotel:Myhotel,
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
    <form>
    <h3>ADD Branch..</h3>
   <label htmlFor="id">ID:</label>
   <br />
   <input type="text" placeholder="ID" id="name" name="name" onChange={handleId} />
   <br />
   <label htmlFor="name">Price: </label>
   <br />
   <input type="text" placeholder="Name.." id="name" name="name" onChange={handlType} />
   <br />
   <label htmlFor="name">Type: </label>
   <br />
   <input type="text" placeholder="address" id="name" name="name" onChange={handlePrice} />
   <br />
   <label htmlFor="id">ID:</label>
   <br />
   <input type="text" placeholder="ID" id="name" name="name" onChange={handleidH} />

   <br />
         <label htmlFor="id">img:</label>
         <br />
         <input type="text" placeholder="img" id="name" name="name" onChange={handleImg} />
         <br />
   <Link to="/Meal"><td><button onClick={handleClickAdd} >add..</button></td></Link>
   <br></br>
   <br></br>
   </form>
</div>
);
}
