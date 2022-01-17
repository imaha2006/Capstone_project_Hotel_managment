import React, { Component } from 'react'
import axios from 'axios';

export class AllRooms extends Component {
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
    render() {
        return (
            <div >
            <div >
               <p></p>
                    {this.state.RoomList.map((item => (
                        <tr key={item.numberRoom}>
                   <p>Room Number: {item.numberRoom}</p>
                   <p> Room Type:{item.typeRoom}</p>
                   <p> Price: {item.price}</p>
                   <img src={item.img}></img>
                   <p>Hotel: {item.hotel.name}</p>
                   <p>Branch Name: {item.branch.branchName}</p>

                        </tr>
                    )))
                    }
        </div>
        </div>
        )
    }
}

export default AllRooms
