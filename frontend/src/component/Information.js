import React, { Component } from "react";
import axios from "axios"
export default class MyInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            InfoList: [],
        };
    }
    componentDidMount() {
        axios.get("api/hotel").then(response => {
            const InfoList = response.data
            this.setState({ InfoList });
        });
    }
   
render() {
    return (
        <div >
            <div >
               <p></p>
                    {this.state.InfoList.map((item => (
                        <tr key={item.idHotel}>
                       <div >
                        <div ></div>
                         <div >
                           <div >
                         </div>
                        </div>
                      <div >
                      </div>
                        <div>
                            <p> nhjkl:{item.idHotel}</p>
                         <p>Name :{item.typeRoom} </p>
                        <p> Price : {item.price}</p> 
                         <p> Name :{item.name} </p>
                        <p> Address :{item.address} </p> 
                        </div>
                       <div >
</div>
</div>
                        </tr>
                    )))
                    }
        </div>
        </div>
  )
}
}
