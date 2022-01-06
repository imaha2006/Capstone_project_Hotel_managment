import React, { Component } from "react";
import axios from "axios"
export default class MyTry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TryList: [],
        };
    }
    componentDidMount() {
        axios.get("api/hotel").then(response => {
            const TryList = response.data
            this.setState({ TryList });
        });
    }
    deleteUseGarden(idHotel) {
       // console.log("Delete after Entering")
        axios.delete(`api/hotel/delete/${idHotel}`)
            .then(res => {
                const TryList = this.state.TryList.filter(item => item.idHotel !== idHotel);
                this.setState({ TryList });
            })
    }
render() {
    return (
        <div >
            <div >
               <p></p>
                    {this.state.TryList.map((item => (
                        <tr key={item.idHotel}>
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
                        <p>Name :{item.name} </p>
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




