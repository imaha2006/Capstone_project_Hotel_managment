//   import React from "react";
// //import logo from "./logo.svg";
// import "../App.css";
// import Navbar from './Navbar';


// function Branch(props) {
//   console.log("props");
//   console.log(props);
//   return (
//     <div>
//       <Navbar />

//       <h5>Branch Name:</h5>
//       <h2>Rooms Details</h2>
//       <table>
//         <tr>
//           <th>Room Number</th>
//           <th>Room Name</th>
//           <th>Room Price</th>
//         </tr>
//         <tr>
//           <td>111</td>
//           <td>room name</td>
//           <td>$20</td>
//         </tr>

//         <tr>
//           <td>111</td>
//           <td>room name</td>
//           <td>$20</td>
//         </tr>
//       </table>
//       <hr />
//       <h2>Rooms Details</h2>
//       <table>
//         <tr>
//           <th>Room Number</th>
//           <th>Room Name</th>
//           <th>Room Price</th>
//         </tr>
//         <tr>
//           <td>111</td>
//           <td>room name</td>
//           <td>$20</td>
//         </tr>

//         <tr>
//           <td>111</td>
//           <td>room name</td>
//           <td>$20</td>
//         </tr>
//       </table>
//     </div>
//   );
// }

// export default Branch;

import React from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import {useState} from "react";
//  import Navbar from "./component/Navbar";

export default function App() {
    let [id, setId] = useState("")
    let [branchName, setBranchName] = useState("")
    let [address, setAddress] = useState("")
    let[phone,setPhone] =useState("")
    let[img,setImg] =useState("")
    let [idHotel, setIdHotel] = useState("")
    

    function handleId(event) {setId((id= event.target.value)); }
    function handlbranchName(event) {setBranchName((branchName= event.target.value));}
    function handleaddress(event) {setAddress((address= event.target.value)); }
    function handlephone(event) {setPhone((phone= event.target.value));}
    function handleimg(event) {setImg((img= event.target.value));}
     function handleIdH(event) {setIdHotel((idHotel= event.target.value)); }

     let Myhotel={
         idHotel:idHotel,
     }

    let MyBranch ={
      id:id,
      branchName:branchName,
      address:address,
      phone:phone,
         img:img,
         hotel:Myhotel,
    }

        
  function handleClickAdd(){
    console.log("in fun")
    console.log(MyBranch)
    axios({
    method:'post',
    url:'api/branch/add',
      data: MyBranch,
    });
    }
    return (
    <div>


   <br></br>
   <br></br>
      <div>
        <h5>All Branches will be displayed heere</h5>
      </div>
    </div>
  );
}


