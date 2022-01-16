import React, { Component } from "react";
import axios from "axios"
import Navbar2 from "./Navbar2"



export default class MealsDetails extends Component {
    constructor(props) {
        super(props);
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
   deleteUseGarden(nameMeal) {
    axios.delete(`/api/Restaurant/delete/${nameMeal}`)
        .then(res => {
            const MealList = this.state.MealList.filter(item => item.nameMeal !== nameMeal);
            this.setState({ MealList });
        })
}
    componentDidMount() {
   
            axios.get("/api/Restaurant").then(response => {
                const MealList = response.data
                this.setState({ MealList });
               
            });

    }
  handleClickAdd(e){
      e.preventDefault()
    let Myhotel={
        idHotel:this.state.idHotel,
    }
    let MyBranch={
      id:this.state.id,
    }
    let MyMeal ={
        nameMeal:this.state.nameMeal,
        price:this.state.price,
        type:this.state.type,
        hotel:Myhotel,
        branch:MyBranch,
        img:this.state.img,

    }
    console.log('MyMeal');

console.log(MyMeal);    axios({
        method:'post',
        url:'/api/Restaurant/add',
          data: MyMeal,
        });
        }
 render() {
   
  let {MealList}=this.state



let Meals=[]
if(MealList){
    Meals=  MealList.map((item => {
        console.log("item");
        console.log(item);

        /**img: "https://www.sayidaty.net/sites/default/files/imce/user54794/1...jpg"
nameMeal: "burger"
price: "6"
type: "dubel" */
      return<tr>
     <td>{item.nameMeal}</td>
     <td>{item.type}</td>
     <td>{item.price}</td>
     
     <td><img src={item.img} width={100} height={100}/></td>
     <td><button button  onClick={(e) => this.deleteUseGarden(item.nameMeal, e)}>Delete Meal</button></td>
     </tr>
     })) 
}




                       
                            
          
    return (
      <div>
          <Navbar2/>


<hr/>
<h3 style={{textAlign:"center"}}>Meals</h3>

<table style={{width:"100%"}}>
  <tr>
      
    <th>Meal Name</th>
    <th>Meal Type</th>
    <th>Meal price </th>
    
    <th>Image</th>
    <th></th>
    
  </tr> 
   {Meals} 
 
</table>
<div style={{ width: "30%", margin: "auto", height: "500px" }}>
        {" "}
        <form onSubmit={this.handleClickAdd} className="login-form">
          <div className="form-group">
            <input
              type="text"
              name="nameMeal"
              onChange={this.handleChange}
              placeholder="Meal Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="type"
              onChange={this.handleChange}
              placeholder="Type"
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
              type="img"
              name="img"
              onChange={this.handleChange}
              placeholder="Image"
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
          <div className="form-group">
            <input
              type="text"
              name="idHotel"
              onChange={this.handleChange}
              placeholder="Hotel ID"
            />
          </div>
          <input   className="btn1" type="submit" value="Add New Meal" />

        </form>
      </div>
      </div>
  )
}
}
