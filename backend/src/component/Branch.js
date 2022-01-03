import React ,{useEffect,useState}from 'react'
//  import "react";
import axios from "axios";

function Branch(){
    const [idHotel, setIdHotel] = useState({idHotel:""})
    const [name, setName] = useState({name:""})
    const [address, setAddress] = useState({address:""})
    const [phone, setPhone] = useState({phone:""})
    const [email, setEmail] = useState({email:""})
    const[admin,setAdmin]=useState({admin:""})
   
let adminid = {"id":admin}
    let x={"idHotel":idHotel,"name":name,"address":address,"phone":phone,"email":email, admin_id:adminid} 
    
    function Register(){
        axios({
            method:"post",
            url:"/api/hotel/add",
            data: x
        }

        );

 }

//  function show(){
//      const[show,setShow]=useState([{id:"",name:"",city:""}]);
//      useEffect(()=>{
//          axios
//      }
//      )
//  }

return(
    <div>
        <h2>Login</h2><br></br>
        IDHotel <input type="text" name="firstName" onChange={(event) => {setIdHotel(event.target.value)}}/><br></br>
        Name <input type="text" name="lastName" onChange={(event) => {setName(event.target.value)}}/><br></br>
        address <input type="text" name="address" onChange={(event) => {setAddress(event.target.value)}}/><br></br>
        Phone <input type="text" name="phone" onChange={(event) => {setPhone(event.target.value)}}/><br></br>
        Email<input type="text" name="lastName" onChange={(event) => {setEmail(event.target.value)}}/><br></br>
        Admin <input type="text" name="admin" onChange={(event) => {setAdmin(event.target.value)}}/><br></br>


        <button onClick={Register}>ADD</button>
        

    </div>
);


}

export default Branch
