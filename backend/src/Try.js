import React, { Component } from 'react'
import axios from 'axios';
export default class Try extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hotell: [],
        };
    }
    componentDidMount() {
        axios
            .get("api/hotel")
            .then(result => {
                const hotell = result.data
                this.setState({ hotell });
            });
    }
    deleteHotel(idHotel) {
        console.log("in")
        axios.delete(`/api/hotel/delete/${idHotel}`)
            .then(res => {
                const hotell = this.state.hotell.filter(item => item.idHotel !== idHotel);
                this.setState({ hotell })
            })
    }
    render() {
        return (<div>
            <h3>Get</h3>
            {this.state.hotell.map((item => (
                <div key={item.idHotel}>
                    <h2>{item.name}</h2>
                    <p>{item.address}</p>
                    <button onClick={(e) => this.deleteHotel(item.idHotel, e)}>Delete</button>
                    <p>********</p>
                </div>
            )))}
        </div>
        )
    }
}