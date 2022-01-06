

import React, { Component } from "react";
import axios from "axios"
export default class MyMeal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MealList: [],
        };
    }
    componentDidMount() {
        axios.get("api/Restaurant").then(response => {
            const MealList = response.data
            this.setState({ MealList });
        });
    }
    // deleteUseGarden(nameMeal) {
    //     axios.delete(`api/Restaurant/delete/${nameMeal}`)
    //         .then(res => {
    //             const MealList = this.state.MealList.filter(item => item.nameMeal !== nameMeal);
    //             this.setState({ MealList });
    //         })
    // }
render() {
    return (
        <div >
            <div >
               <p></p>
                    {this.state.MealList.map((item => (
                        <tr key={item.nameMeal}>
                       <div >
                        <div ></div>
                         <div >
                           <div >
                         </div>
                        </div>
                      <div >
                      </div>
                        <div>
                        <p>type :{item.type} </p>
                        <p> price : {item.price}</p>
                        </div>
                       <div >
</div>
</div>
                 {/* <td><button button class="bubbly" onClick={(e) => this.deleteUseGarden(item.numberRoom, e)}>delete</button></td> */}
                        </tr>
                    )))
                    }
        </div>
        </div>
  )
}
}

