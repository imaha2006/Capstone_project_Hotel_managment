import React, { Component } from "react";
import axios from "axios"
import Navbar2 from "./component/Navbar2"
import {  Link,} from "react-router-dom";


export default class MyBranchs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BranchsList: [],
        };
        this.handleChange=this.handleChange.bind(this)
        this.handleClickAdd=this.handleClickAdd.bind(this)
    }
    componentDidMount() {
        axios.get("api/branch").then(response => {
            const BranchsList = response.data
            
            this.setState({ BranchsList });
        });
    }



        
   handleClickAdd(e){
let n=localStorage.getItem("LogIn")//
  e.preventDefault()
  if(n=="welcome you Authentication"){//

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
    })
    .then((res)=>{
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
    });}//IF
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
    }
render() {
  let {BranchsList}=this.state
let branches=[]
//if (BranchsList) {
  branches=  BranchsList.map((item => {
   
   
    return<tr>
<td>{item.id}</td>
<td>{item.branchName}</td>
<td>{item.address}</td>

<td>{item.phone}</td>
<td><button button class="bubbly" onClick={(e) => this.deleteUseGarden(item.id, e)}>Delete Branch</button><Link to={`/rooms/${item.id}`} /* to={{pathname:`/branch/${item.id}`,state:[item] }} */>Rooms </Link></td>
<Link to={`/meals/${item.id}`}>Meals</Link></tr>
}))


                       
                       
                             
          
    return (
        <div >
          <Navbar2/>
     <table style={{width:"100%"}}>
  <tr>
    <th>Branch id</th>
    <th>Branch Name</th>
    <th>Branch Address</th>
    
    <th>Brach Telephone</th>
    <th></th>
  </tr> 
   {branches} 
 
</table>

<div style={{ width: "30%", margin: "auto", height: "500px" }}>
        {" "}
        <form onSubmit={this.handleClickAdd} className="login-form">
          <div className="form-group">
            <input
              type="text"
              name="branchName"
              onChange={this.handleChange}
              placeholder="BranchName"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="address"
              onChange={this.handleChange}
              placeholder="Address"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="phone"
              onChange={this.handleChange}
              placeholder="Phone"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="img"
              onChange={this.handleChange}
              placeholder="img"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="id"
              onChange={this.handleChange}
              placeholder="id"
            />
          </div>
        {/*   <div className="form-group">
            <input
              type="text"
              name="idHotel"
              onChange={this.handleChange}
              placeholder="idHotel"
            />
          </div> */}
          <input className="btn1" type="submit" value="Add New Branch" />
{/* <Link to="/Branchs"><td><button onClick={this.handleClickAdd} >add..</button></td></Link> */}
        </form>
      </div>
        </div>
  )
}
}
