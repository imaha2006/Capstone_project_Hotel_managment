import React, { Component } from 'react'
import axios from 'axios';

export class AllMeals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Mealist: [],
        };
    }
    componentDidMount() {
        axios.get("api/room").then(response => {
            const Mealist = response.data
            this.setState({ Mealist });
        });
    }
    render() {
        return (
            <div >
            <div >
               <p></p>
                    {this.state.Mealist.map((item => (
                        <tr key={item.numberRoom}>
                   <p>Meal Name: {item.numberRoom}</p>
                   <p> Price: {item.price}</p>
                   <p>Meal Type:{item.type}</p>
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

export default AllMeals
