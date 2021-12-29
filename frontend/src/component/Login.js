import React from 'react'
import axios from "axios"
import { useState} from "react";
import { Component } from 'react';
import Navbar from './Navbar';
// import {Form} from 'react-bootstrap'
// import {Button} from 'react-bootstrap'

function Login() {
    //  const [id, setId] = useState({id:""})
    const [userName, setuserName] = useState({userName:""})
    //  const [email, setEmail] = useState({email:""})
    // const [phone, setPhone] = useState({phone:""})
    const [password, setPassword] = useState({password:""})
    let x={ userName:userName,password:password}
  //  let x={id:id, name:name,email:email,phone:phone,password:password}
   console.log(x)
     function Register(){
       console.log("inside add")
       axios({
         method:"post",
         url:"/api/admin/add",
         data:
         x
       });
       console.log(x)
     }
    return (
            <div>
              <h2> Register :  </h2><br></br>
            {/* ID <input type="text" name="firstName"  onChange={(event) => { setId(event.target.value) }} /><br></br> */}
             userName <input type="text" name="lastName"  onChange={(event) => { setuserName(event.target.value) }} /><br></br>
            {/* email<input type="text" name ="password" onChange={(event) => { setEmail(event.target.value) }}/><br></br>
            phone<input type="text" name="firstName"  onChange={(event) => { setPhone(event.target.value) }} /><br></br> */}
            password<input type="text" name="firstName"  onChange={(event) => { setPassword(event.target.value) }} /><br></br>
              <button onClick={Register}>Login</button>
              {/* <Badge bg="success">Success</Badge> <Badge bg="danger">Danger</Badge>{' '} */}
            </div>
            

            
          );
}


export default Login
