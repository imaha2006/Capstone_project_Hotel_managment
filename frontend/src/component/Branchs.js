import React, { Component } from "react";
import axios from "axios"

export default class MyBranchs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BranchsList: [],
        };
    }
    componentDidMount() {
        axios.get("api/branch").then(response => {
            const BranchsList = response.data
            
            this.setState({ BranchsList });
        });
    }
    deleteUseGarden(id) {
       // console.log("Delete after Entering")
        axios.delete(`branchId/delete/${id}`)
            .then(res => {
                const BranchsList = this.state.BranchsList.filter(item => item.id!== id);
                this.setState({ BranchsList });
            })
    }
render() {
    return (
        <div >
            <div >
               <p></p>
                    {this.state.BranchsList.map((item => (
                        <tr key={item.id}>
                       <div >
                        <div ></div>
                         <div >
                           <div >
                        <img height="200" width="200" src={item.img} />
                         </div>
                        </div>
                      <div >
                      </div>
                        <div>
                        <p>Name :{item.branchName} </p>
                        <p> Address : {item.address}</p>
                         <p>*************</p>
                        </div>
                       <div >
</div>
</div>
                 <td><button button class="bubbly" onClick={(e) => this.deleteUseGarden(item.idHotel, e)}>delete</button></td>
                        </tr>
                    )))
                    }
        </div>
        </div>
  )
}
}
