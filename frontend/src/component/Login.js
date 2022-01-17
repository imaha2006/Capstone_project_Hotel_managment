import { useState } from "react"
import React from "react"
import axios from "axios"
import Navbar from "../component/Navbar"
import "../App.css"
import { Route } from "react-router-dom"
import { useNavigate } from 'react-router-dom';


export default function Login(props) {
    const navigate = useNavigate();
    let [username, setname] = useState("")
    let [password, setpassword] = useState("")

    function handlename(event) {
        setname((username = event.target.value));
    }
    function handlepassword(event) {
        setpassword((password = event.target.value));
    }
    let myAdmin={
        username:username,
        password:password,

     }
function handleClick(){
    axios({
        method:'post',
        url:'api/admin/add',
        data:myAdmin,
    })
}
    function handleSubmit(event) {
        event.preventDefault();
        axios({
            method: "get",
            url: "api/admin/login",
            params: { username: username, password: password }
        })
            .then((res => {
                console.log(res.data)
                if (res.data == "welcome you Authentication") {
               localStorage.setItem("LogIn", "welcome you Authentication")//noon
                  // props.handleLogin();
                  navigate('/AdminHome');
                  
                }
                else {
                    alert(res.data)
                }
            }))
    }
    return (
        <div>
        <Navbar />
        <div className="login">
          <div className="account-login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  onChange={handlename}
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="password"
                  onChange={handlepassword}
                  placeholder="Password"
                />
              </div>

              <input className="btn" type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
      /*   <div>
            <form >
                <input
                    type="text"
                    value={username}
                    name="name"
                    placeholder=" name"
                    onChange={handlename}
                />
                <input
                    type="text"
                    value={password}
                    name="password"
                    placeholder=" password"
                    onChange={handlepassword}
                />
                <br />
                <input type="submit"
                    value="submit" onClick={handleSubmit}
                />
                <button onClick={handleClick}>Regst</button>
            </form>
        </div> */
    )
}
