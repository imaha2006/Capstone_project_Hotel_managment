//import React,{Component} from "react";
import axios from "axios";
import Navbar from "./component/Navbar";
import { Link } from "react-router-dom";
import React,{useState} from "react";
 
export default function App() {
  let [idHotel, setIdHotel] = useState("")
  let [name, setName] = useState("")
  let [address, setAddress] = useState("")
  let [phone, setPhone] = useState("")
  let [email, setEmail] = useState("")
  let[username,setUsername] =useState("")
  let[img,setImg] =useState("")


  function handleId(event) {setIdHotel((idHotel= event.target.value)); }
  function handleName(event) {setName((name= event.target.value));}
  function handleAddress(event) {setAddress((address= event.target.value)); }
  function handlePhone(event) {setPhone((phone= event.target.value));}
  function handleEmail(event) {setEmail((email= event.target.value));}
  function handleUser(event) {setUsername((username= event.target.value));}
  function handleImg(event) {setImg((img= event.target.value));}
let MyAdmin={
  username:username,
}

  let MyHotel ={
    idHotel:idHotel,
    name:name,
    address:address,
    phone:phone,
    email:email,
    admin:MyAdmin,
     img:img,
  }

  function handleClickAdd(){
    console.log("in fun")
    console.log(MyHotel)
    axios({
    method:'post',
    url:'api/hotel/add',
      data: MyHotel,
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
              name="id"
              onChange={handleId}
              placeholder="Branch ID"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="branchname"
              onChange={handleName}
              placeholder="Branch Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="address"
              onChange={handleAddress}
              placeholder="Address"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              onChange={handleEmail}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="tel"
              onChange={handlePhone}
              placeholder="Telephone"
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
              type="username"
              name="username"
              onChange={handleUser}
              placeholder="username"
            />
          </div>
          <input className="btn1" type="submit" value="Add New Branch" />
        </form>
      </div>
      {/* <Link to="/Room"><td><button onClick={handleClickAdd} >add..</button></td></Link> */}
   <br></br>
   <br></br>
      <div>
        <h5>All Branches will be displayed heere</h5>
      </div>
    </div>
  );
}


