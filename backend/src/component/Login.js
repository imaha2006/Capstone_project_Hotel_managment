
// import React from 'react'
// import axios from "axios"
// import { useState} from "react";
// import { Component } from 'react';
// import Navbar from './Navbar';

// function Login() {
//     const [userName, setuserName] = useState({userName:""})
//     const [password, setPassword] = useState({password:""})
//     let x={ userName:userName,password:password}
//   //  let x={userName:userName,password:password}
//    console.log(x)
//      function Register(){
//        console.log("inside add")
//        axios({
//          method:"post",
//          url:"api/admin",
//          data:
//          x
//        });
//        console.log(x)
//      }
//      function Login(){
//        axios.get("api/admin/login",{params:{userName:userName,password:password}})
//        .then(res=>{
//          if(res.data=="welcome you Authentication"){}
//      }}
//     return (
//             <div>
//               <h2> Register :  </h2><br></br>
//              userName <input type="text" name="lastName"  onChange={(event) => { setuserName(event.target.value) }} /><br></br>
//             password<input type="text" name="firstName"  onChange={(event) => { setPassword(event.target.value) }} /><br></br>
//               <button onClick={Register}>Login</button>
//               {/* <Badge bg="success">Success</Badge> <Badge bg="danger">Danger</Badge>{' '} */}
//             </div>
            

            
//           );
// }


// export default Login
