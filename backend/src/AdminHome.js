import React,{Component} from "react";
import axios from "axios";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";



class AdminHome extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {},
      };
    }

    onAddNewBranch = async (e) => {
      e.preventDefault();
      console.log(this.state.data);
    
    };
  
    handleInputChange = (e) => {
      this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value },
      });
    };
  
    
    render() {
      return (
        <div>
          <Navbar />
          <div>
            <div style={{ overflowX: "auto" }}>
              <h5>All Branches</h5>
              <table>
                <tr>
                  <th>ID</th>
                  <th>Branch Name</th>
                  <th></th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Jeddah</td>
                  <td>
                    <Link to="/branch/1">show more</Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Al Riyad</td>
                  <td>
                    <Link to="/branch/2">show more</Link>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mekkah</td>
                  <td>
                    <Link to="/branch/3">show more</Link>
                  </td>
                </tr>
              </table>
            </div>
            <div style={{ width: "20%", margin: "auto" }}>
              <input
                className="btn"
                type="submit"
                value="Add New Branch"
                onClick={() => {
                  this.setState({ addNewBranch: true });
                }}
              />
            </div>
            {this.state.addNewBranch ? (
              <div style={{ width: "30%", margin: "auto" }}>
                <form onSubmit={this.onAddNewBranch} className="login-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="branchname"
                      onChange={this.handleInputChange}
                      placeholder="Branch Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="address"
                      onChange={this.handleInputChange}
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      onChange={this.handleInputChange}
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      onChange={this.handleInputChange}
                      placeholder="Telephone"
                    />
                  </div>
  
                  <input className="btn1" type="submit" value="Add" />
                  <input
                    className="close"
                    type="submit"
                    value="close"
                    onClick={() => {
                      this.setState({ addNewBranch: false });
                    }}
                  />
                </form>
              </div>
            ) : null}
          </div>
        </div>
      );
    }
  }


  
  export default AdminHome;