  import React from "react";
//import logo from "./logo.svg";
import "../App.css";
import Navbar from './Navbar';


function Branch(props) {
  console.log("props");
  console.log(props);
  return (
    <div>
      <Navbar />

      <h5>Branch Name:</h5>
      <h2>Rooms Details</h2>
      <table>
        <tr>
          <th>Room Number</th>
          <th>Room Name</th>
          <th>Room Price</th>
        </tr>
        <tr>
          <td>111</td>
          <td>room name</td>
          <td>$20</td>
        </tr>

        <tr>
          <td>111</td>
          <td>room name</td>
          <td>$20</td>
        </tr>
      </table>
      <hr />
      <h2>Rooms Details</h2>
      <table>
        <tr>
          <th>Room Number</th>
          <th>Room Name</th>
          <th>Room Price</th>
        </tr>
        <tr>
          <td>111</td>
          <td>room name</td>
          <td>$20</td>
        </tr>

        <tr>
          <td>111</td>
          <td>room name</td>
          <td>$20</td>
        </tr>
      </table>
    </div>
  );
}

export default Branch;

