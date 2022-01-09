import React from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import Navbar from "./component/Navbar";
export default function App() {
    let [numberRoom, setNumberRoom] = useState("")
    let [typeRoom, setTypeRoom] = useState("")
    let [price, setPrice] = useState("")
    let[img,setImg] =useState("")
    let [idHotel, setIdHotel] = useState("")
    

    function handleId(event) {setNumberRoom((numberRoom= event.target.value)); }
    function handlType(event) {setTypeRoom((typeRoom= event.target.value));}
    function handlePrice(event) {setPrice((price= event.target.value)); }
    function handleImg(event) {setImg((img= event.target.value));}
    function handleIdH(event) {setIdHotel((idHotel= event.target.value)); }

    let Myhotel={
        idHotel:idHotel,
    }
    let MyRoom ={
        numberRoom:numberRoom,
        typeRoom:typeRoom,
        price:price,
        hotel:Myhotel,
         img:img,
    }

        
  function handleClickAdd(){
    console.log("in fun")
    console.log(MyRoom)
    axios({
    method:'post',
    url:'api/room/add',
      data: MyRoom,
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
   <label htmlFor="name">Name: </label>
   <br />
   <input type="text" placeholder="Name.." id="name" name="name" onChange={handlType} />
   <br />
   <label htmlFor="name">Address: </label>
   <br />
   <input type="text" placeholder="address" id="name" name="name" onChange={handlePrice} />
   <br />
   <label htmlFor="id">ID:</label>
   <br />
   <input type="text" placeholder="ID" id="name" name="name" onChange={handleIdH} />
   <br />
         <label htmlFor="id">img:</label>
         <br />
         <input type="text" placeholder="img" id="name" name="name" onChange={handleImg} />
         <br />
   <Link to="/Room"><td><button onClick={handleClickAdd} >add..</button></td></Link>
   <br></br>
   <br></br>
   </form>
</div>
);
}

