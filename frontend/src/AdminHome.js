//import React,{Component} from "react";
import axios from "axios";
import Navbar from "./component/Navbar";
import { Link } from "react-router-dom";
import React,{useState} from "react";
 
export default function App() {
  let [idHotel, setIdHotel] = useState("")
  let [name, setName] = useState("")
  let [address, setAddress] = useState("")
  let [phone, setPhone] = useState("")
  let [email, setEmail] = useState("")
  let[username,setUsername] =useState("")
  let[img,setImg] =useState("")


  function handleId(event) {setIdHotel((idHotel= event.target.value)); }
  function handleName(event) {setName((name= event.target.value));}
  function handleAddress(event) {setAddress((address= event.target.value)); }
  function handlePhone(event) {setPhone((phone= event.target.value));}
  function handleEmail(event) {setEmail((email= event.target.value));}
  function handleUser(event) {setUsername((username= event.target.value));}
  function handleImg(event) {setImg((img= event.target.value));}
let MyAdmin={
  username:username,
}

  let MyHotel ={
    idHotel:idHotel,
    name:name,
    address:address,
    phone:phone,
    email:email,
    admin:MyAdmin,
    // img:img,
  }

  function handleClickAdd(){
    console.log("in fun")
    console.log(MyHotel)
    axios({
    method:'post',
    url:'api/hotel/add',
      data: MyHotel,
    });
    }
    return (
      <div>
        {/* <div>

        <table>
               <tr>
                <th>ID</th>
                <th> name</th>
                 <th></th>
               </tr>
               <tr>
                 <td>1</td>
                 <td>Jeddah</td>
                 <td>
                   <Link to="/branch/1">show more</Link>
                 </td>
               </tr>
               <tr>
                 <td>2</td>
                 <td>Al Riyad</td>
                <td>
                  <Link to="/branch/2">show more</Link>
                </td>
              </tr>
              <tr>
                 <td>3</td>
                 <td>Mekkah</td>
                 <td>
                   <Link to="/branch/3">show more</Link>
                 </td>
               </tr>
             </table>


        </div> */}
          <form>
          <h3>ADD Branch..</h3>
         <label htmlFor="id">ID:</label>
         <br />
         <input type="text" placeholder="ID" id="name" name="name" onChange={handleId} />
         <br />
         <label htmlFor="name">Name: </label>
         <br />
         <input type="text" placeholder="Name.." id="name" name="name" onChange={handleName} />
         <br />
         <label htmlFor="name">Address: </label>
         <br />
         <input type="text" placeholder="address" id="name" name="name" onChange={handleAddress} />
         <br />
         <label htmlFor="name">Phone: </label>
         <br />
         <input type="text" placeholder="phone.." id="name" name="name" onChange={handlePhone} />
         <br />
         <label htmlFor="name">Email: </label>
         <br />
         <input type="text" placeholder="Email :" id="name" name="name" onChange={handleEmail} />
         <br></br>
         <label htmlFor="id">ID:</label>
         <br />
         <input type="text" placeholder="ID" id="name" name="name" onChange={handleUser} />
         <br />
          <label htmlFor="id">img:</label>
         <br />
         <input type="text" placeholder="img" id="name" name="name" onChange={handleImg} /> 
         <br />
         <Link to="/Try1"><td><button onClick={handleClickAdd} >add..</button></td></Link>
         <br></br>
         <br></br>
         </form>
   </div>
   );
  }



