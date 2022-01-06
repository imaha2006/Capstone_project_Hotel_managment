//import React,{Component} from "react";
import axios from "axios";
//import Navbar from "./component/Navbar";
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
    img:img,
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
        <div>

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


        </div>
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






// class AdminHome extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: {},
//     };
//   }
//   onAddNewBranch = (e) => {
//     e.preventDefault();
//     // console.log(this.state.idHotel);
//     console.log(this.state.name);
//     console.log(this.state.address);
//     console.log(this.state.phone);
//     console.log(this.state.email);
    
    
//   };

//   handleInputChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Main
//   render() {
  //   return (
  //     <div>
  //       <Navbar />
  //       <div>
  //         <div style={{ overflowX: "auto" }}>
  //           <h5>All Branches</h5>
  //           <table>
  //             <tr>
  //               <th>ID</th>
  //               <th> name</th>
  //               <th></th>
  //             </tr>
  //             <tr>
  //               <td>1</td>
  //               <td>Jeddah</td>
  //               <td>
  //                 <Link to="/branch/1">show more</Link>
  //               </td>
  //             </tr>
  //             <tr>
  //               <td>2</td>
  //               <td>Al Riyad</td>
  //               <td>
  //                 <Link to="/branch/2">show more</Link>
  //               </td>
  //             </tr>
  //             <tr>
  //               <td>3</td>
  //               <td>Mekkah</td>
  //               <td>
  //                 <Link to="/branch/3">show more</Link>
  //               </td>
  //             </tr>
  //           </table>
  //         </div>
  //         <div style={{ width: "20%", margin: "auto" }}>
  //           <input
  //             className="btn"
  //             type="submit"
  //             value="Add New Branch"
  //             onClick={() => {
  //               this.setState({ addNewBranch: true });
  //             }}
  //           />
  //         </div>
  //         {this.state.addNewBranch ? (
  //           <div style={{ width: "30%", margin: "auto" }}>
  //             <form onSubmit={this.onAddNewBranch} className="login-form">
  //               <div className="form-group">
  //                 <input
  //                   type="text"
  //                   name="name"
  //                   onChange={this.handleInputChange}
  //                   placeholder=" Name"
  //                 />
  //               </div>
  //               <div className="form-group">
  //                 <input
  //                   type="text"
  //                   name="address"
  //                   onChange={this.handleInputChange}
  //                   placeholder="Address"
  //                 />
  //               </div>
  //               <div className="form-group">
  //                 <input
  //                   type="phone"
  //                   name="phone"
  //                   onChange={this.handleInputChange}
  //                   placeholder="Phone"
  //                 />
  //               </div>
  //               <div className="form-group">
  //                 <input
  //                   type="email"
  //                   name="email"
  //                   onChange={this.handleInputChange}
  //                   placeholder="Email"
  //                 />
  //               </div>

  //               <input className="btn1" type="submit" value="Add" />
  //               <input
  //                 className="close"
  //                 type="submit"
  //                 value="close"
  //                 onClick={() => {
  //                   this.setState({ addNewBranch: false });
  //                 }}
  //               />
  //             </form>
  //             <Link to="/Try1"><button>Try1 </button></Link> |{" "}
  //           </div>
  //         ) : (
  //           <div></div>
  //         )}
  //       </div>
  //     </div>
      
  //   );
  // }


  
  //export default AdminHome;