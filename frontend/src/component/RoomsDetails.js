import React, { Component } from "react";
import axios from "axios"
import Navbar2 from "./Navbar2"
import { Link,} from "react-router-dom";


export default class RoomsDetails extends Component {
    constructor(props) {
        super(props);
      ;
this.state = {
            BranchsList: [],
        };
        this.handleChange=this.handleChange.bind(this)
       this.handleClickAdd=this.handleClickAdd.bind(this)
    }
    handleChange(event){
     let name=event.target.name
      let value=event.target.value
      this.setState({[name]:value})
      
   }
   deleteUseGarden(numberRoom) {
    axios.delete(`/api/room/delete/`)
        .then(res => {
            const RoomList = this.state.RoomList.filter(item => item.numberRoom !== numberRoom);
            this.setState({ RoomList });
        })
}
    componentDidMount() {
 let pathname=window.location.pathname
 
 let branch   
 if (pathname) {
   let patharray=pathname.split("/")
  branch=patharray[2]
 } 
 axios.get(`/api/room/getrooms/${branch}`).then(response => {
            const RoomList = response.data
            console.log('RoomList');
            console.log(RoomList);
            this.setState({ RoomList });
        });
    }
    handleClickAdd(event){
        event.preventDefault();
        let Myhotel={
            idHotel:this.state.idHotel,
        }
        let MyBranch={
          id:this.state.id,
        }
        let MyRoom ={
            numberRoom:this.state.numberRoom,
            typeRoom:this.state.typeRoom,
            price:this.state.price,
            hotel:Myhotel,
            branch:MyBranch,
             img:this.state.img,
        }
    
        axios({
        method:'post',
        url:'/api/room/add',
          data: MyRoom,
        });
        }
   /*  componentDidMount() {
        axios.get("api/branch").then(response => {
            const BranchsList = response.data
            
            this.setState({ BranchsList });
        });
    }



        
   handleClickAdd(e){
  e.preventDefault()
    axios({
    method:'post',
    url:'api/branch/add',
      data: {
        id:this.state.id,
        branchName:this.state.branchName,
        address:this.state.address,
        phone:this.state.phone,
           img:this.stateimg,
           Hotel:{
            idHotel:1
    }
      }
    }).then((res)=>{
      let Branches=this.state.BranchsList
      Branches.push({
        id:this.state.id,
        branchName:this.state.branchName,
        address:this.state.address,
        phone:this.state.phone,
           img:this.stateimg,
           Hotel:{
            idHotel:1
    }
      })

      this.setState({BranchsList:Branches})
    });
    }
   handleChange(event){
    console.log(event.target.name);
    console.log(event.target.value);
    // this.setState({[event.targert.name]:event.target.value})
    let name=event.target.name
    let value=event.target.value
    this.setState({[name]:value})
    
 }
    deleteUseGarden(id) {
       // console.log("Delete after Entering")
        axios.delete(`api/branch/delete/${id}`)
            .then(res => {
                const BranchsList = this.state.BranchsList.filter(item => item.id!== id);
                this.setState({ BranchsList });
            })
    } */
render() {
   
  let {RoomList}=this.state



let Rooms=[]
if(RoomList){
    Rooms=  RoomList.map((item => {
      
        console.log("item");
        console.log(item);
      return<tr>
     <td>{item.numberRoom}</td>
     <td>{item.typeRoom}</td>,
     <td>{item.price}</td>
     
     <td><img src={item.img} width={100} height={100}/></td>
     <td><button button class="bubbly" onClick={(e) => this.deleteUseGarden(item.numberRoom, e)}>Delete Room</button></td>
     </tr>
     })) 
}
      
    return (
      <div>
          <Navbar2/>


<hr/>
<h3 style={{textAlign:"center"}}>Room</h3>

<table style={{width:"100%"}}>
  <tr>
    <th>Room Number</th>
    <th>Room Type</th>
    <th>Room price </th>
    
    <th>Image</th>
    <th></th>
    
  </tr> 
   {Rooms} 
 
</table>
<div style={{ width: "30%", margin: "auto", height: "500px" }}>
        {" "}
        <form  onSubmit={this.handleClickAdd}  className="login-form">
          <div className="form-group">
            <input
              type="text"
              name="numberRoom"
              onChange={this.handleChange}
              placeholder="Room Number"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="typeRoom"
              onChange={this.handleChange}
              placeholder="Room Type"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="price"
              onChange={this.handleChange}
              placeholder="Price"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="img"
            onChange={this.handleChange}
              placeholder="Image URL"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="idHotel"
             onChange={this.handleChange}
              placeholder="Hotel ID"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="id"
              onChange={this.handleChange} 
              placeholder="Branch ID"
            />
          </div>
           <input className="btn1" type="submit" value="Add New Room" /> 
        
        </form>
      </div>
      </div>
  )
}
}
