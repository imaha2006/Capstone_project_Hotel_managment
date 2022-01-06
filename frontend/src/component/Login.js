import { useState } from "react"
import React from "react"
import axios from "axios"



export default function Login(props) {
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
                    props.handleLogin();
                }
                else {
                    alert(res.data)
                }
            }))
    }
    return (
        <div>
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
        </div>
    )
}
