
import React from 'react'
import axios from "axios"
import { useState} from "react";
import { Component } from 'react';
import Navbar from './Navbar';


// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: {},
//     };
//   }
//   onLogin = async (e) => {
//     e.preventDefault();
//     console.log(this.state.data);
//      let result = await axios.post("api/admin", this.state.data);
//     if (result) {
//       result = result["data"];
//       this.setState({ result });
//     } 
//   };

//   handleInputChange = (e) => {
//     this.setState({
//       data: { ...this.state.data, [e.target.name]: e.target.value },
//     });
//   };

//   // Main
//   render() {
//     let { result } = this.state;
//     return (
//       <div>
//         <Navbar />
//         <div className="login">
//           <div className="account-login">
//             <h1>Login</h1>
//             <form onSubmit={this.onLogin} className="login-form">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="username"
//                   onChange={this.handleInputChange}
//                   placeholder="Username"
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="password"
//                   onChange={this.handleInputChange}
//                   placeholder="Password"
//                 />
//               </div>

//               <input className="btn" type="submit" value="Login" />
//               {result ? (
//                 result.success ? (
//                   <p style={{ color: "green" }}>
//                     The information was added successfully
//                   </p>
//                 ) : (
//                   <p style={{ color: "red" }}>{result.error}</p>
//                 )
//               ) : null}
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }




function Login() {
    const [userName, setuserName] = useState({userName:""})
    const [password, setPassword] = useState({password:""})
    let x={ userName:userName,password:password}
  //  let x={userName:userName,password:password}
   console.log(x)
     function Register(){
       console.log("inside add")
       axios({
         method:"post",
         url:"api/admin",
         data:
         x
       });
       console.log(x)
     }
     function Login(){
       axios.get("api/admin/login",{params:{userName:userName,password:password}})
       .then(res=>{
         if(res.data=="welcome you Authentication"){}
     }}
    return (
            <div>
              <h2> Register :  </h2><br></br>
             userName <input type="text" name="lastName"  onChange={(event) => { setuserName(event.target.value) }} /><br></br>
            password<input type="text" name="firstName"  onChange={(event) => { setPassword(event.target.value) }} /><br></br>
              <button onClick={Register}>Login</button>
              {/* <Badge bg="success">Success</Badge> <Badge bg="danger">Danger</Badge>{' '} */}
            </div>
            

            
          );
}


export default Login
