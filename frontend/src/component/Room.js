import React, { Component } from "react";
import axios from "axios"

export default class MyRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RoomList: [],
        };
    }
    componentDidMount() {
        axios.get("api/room").then(response => {
            const RoomList = response.data
            this.setState({ RoomList });
        });
    }
    deleteUseGarden(numberRoom) {
        axios.delete(`api/room/delete/${numberRoom}`)
            .then(res => {
                const RoomList = this.state.RoomList.filter(item => item.numberRoom !== numberRoom);
                this.setState({ RoomList });
            })
    }
render() {
    return (
        <div >
            <div >
               <p></p>
                    {this.state.RoomList.map((item => (
                        <tr key={item.numberRoom}>
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
                        <p>typeRoom :{item.typeRoom} </p>
                        <p> price : {item.price}</p>
                         {/* <p>typeRoom :{item.hotel.name} </p>  */}
                        <p>*****************</p>
                        </div>
                       <div >
</div>
</div>
                 <td><button button class="bubbly" onClick={(e) => this.deleteUseGarden(item.numberRoom, e)}>delete</button></td>
                        </tr>
                    )))
                    }
        </div>
        </div>
  )
}
}

