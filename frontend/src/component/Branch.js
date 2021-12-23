import React,{useState} from "react";
// import "react";
import axios from "axios";

function Login(){
    const [idHotel, setIdHotel] = useState({idHotel:""})
    const [name, setName] = useState({name:""})
    const [email, setEmail] = useState({email:""})
    const [address, setAddress] = useState({address:""})
    const [numberRoom, setNumbrRoom] = useState({numberRoom:""})
    const [tel, setTel] = useState({tel:""})
    const[admin,setAdmin]=useState({admin:""})

    let myObj = {admin}

    let x={idHotel:idHotel,name:name,email:email,address:address,numberRoom:numberRoom,tel:tel,admin:myObj} 
    
    function Register(){
        axios({
            method:"post",
            url:"/api/hotel/add",
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
        IDHotel <input type="text" name="firstName" onChange={(event) => {setIdHotel(event.target.value)}}/><br></br>
        Name <input type="text" name="lastName" onChange={(event) => {setName(event.target.value)}}/><br></br>
        Email<input type="text" name="lastName" onChange={(event) => {setEmail(event.target.value)}}/><br></br>
        address <input type="text" name="address" onChange={(event) => {setAddress(event.target.value)}}/><br></br>
        numberRoom <input type="text" name="phone" onChange={(event) => {setNumbrRoom(event.target.value)}}/><br></br>
        Tel <input type="text" name="password" onChange={(event) => {setTel(event.target.value)}}/><br></br>
        admin <input type="text" name="password" onChange={(event) => {setAdmin(event.target.value)}}/><br></br>
        <button onClick={Register}>ADD</button>
        {/* <button onClick={Register}>delete</button> */}

    </div>
);


}

export default Login
