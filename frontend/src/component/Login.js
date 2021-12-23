import React,{useState} from "react";
// import "react";
import axios from "axios";

function Login(){
    const [id, setId] = useState({id:""})
    const [name, setName] = useState({name:""})
    const [email, setEmail] = useState({email:""})
    const [phone, setPhone] = useState({phone:""})
    const [password, setPassword] = useState({password:""})

    let x={id:id,name:name,email:email,phone:phone,password:password} 
    
    function Register(){
        axios({
            method:"post",
            url:"/api/admin/add",
            data: x
        }

        );
//    function handndleClickDel(){
//        axios({
//            method:"delete",
//            url:"delete/{adminId}"
//        })
//    }
 }
return(
    <div>
        <h2>Login</h2><br></br>
        ID <input type="text" name="firstName" onChange={(event) => {setId(event.target.value)}}/><br></br>
        Name <input type="text" name="lastName" onChange={(event) => {setName(event.target.value)}}/><br></br>
        Email <input type="text" name="email" onChange={(event) => {setEmail(event.target.value)}}/><br></br>
        Phone <input type="text" name="phone" onChange={(event) => {setPhone(event.target.value)}}/><br></br>
        Password <input type="text" name="password" onChange={(event) => {setPassword(event.target.value)}}/><br></br>
        <button onClick={Register}>ADD</button>
        {/* <button onClick={Register}>delete</button> */}

    </div>
);


}

export default Login
