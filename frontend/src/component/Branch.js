  import React from "react";
//import logo from "./logo.svg";
import "../App.css";
import Navbar from './Navbar';


function Branch(props) {
  console.log("props");
  console.log(props);
  return (
    <div>
      <Navbar />

      <h5>Branch Name:</h5>
      <h2>Rooms Details</h2>
      <table>
        <tr>
          <th>Room Number</th>
          <th>Room Name</th>
          <th>Room Price</th>
        </tr>
        <tr>
          <td>111</td>
          <td>room name</td>
          <td>$20</td>
        </tr>

        <tr>
          <td>111</td>
          <td>room name</td>
          <td>$20</td>
        </tr>
      </table>
      <hr />
      <h2>Rooms Details</h2>
      <table>
        <tr>
          <th>Room Number</th>
          <th>Room Name</th>
          <th>Room Price</th>
        </tr>
        <tr>
          <td>111</td>
          <td>room name</td>
          <td>$20</td>
        </tr>

        <tr>
          <td>111</td>
          <td>room name</td>
          <td>$20</td>
        </tr>
      </table>
    </div>
  );
}

export default Branch;

// function Branch(){
//     const [idHotel, setIdHotel] = useState({idHotel:""})
//     const [name, setName] = useState({name:""})
//     const [address, setAddress] = useState({address:""})
//     const [phone, setPhone] = useState({phone:""})
//     const [email, setEmail] = useState({email:""})
//     const[admin,setAdmin]=useState({admin:""})
   
// let adminid = {"id":admin}
//     let x={"idHotel":idHotel,"name":name,"address":address,"phone":phone,"email":email, admin_id:adminid} 
    
//     function Register(){
//         axios({
//             method:"post",
//             url:"/api/hotel/add",
//             data: x
//         }

//         );

//  }

// //  function show(){
// //      const[show,setShow]=useState([{id:"",name:"",city:""}]);
// //      useEffect(()=>{
// //          axios
// //      }
// //      )
// //  }

// return(
//     <div>
//         <h2>Login</h2><br></br>
//         IDHotel <input type="text" name="firstName" onChange={(event) => {setIdHotel(event.target.value)}}/><br></br>
//         Name <input type="text" name="lastName" onChange={(event) => {setName(event.target.value)}}/><br></br>
//         address <input type="text" name="address" onChange={(event) => {setAddress(event.target.value)}}/><br></br>
//         Phone <input type="text" name="phone" onChange={(event) => {setPhone(event.target.value)}}/><br></br>
//         Email<input type="text" name="lastName" onChange={(event) => {setEmail(event.target.value)}}/><br></br>
//         Admin <input type="text" name="admin" onChange={(event) => {setAdmin(event.target.value)}}/><br></br>


//         <button onClick={Register}>ADD</button>
        

//     </div>
// );


// }

// export default Branch
