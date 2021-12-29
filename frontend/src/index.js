import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home'
import Login from './component/Login';
import Branch from './component/Branch'
import AddMeal from './AddMeal'
import AdRoom from './Adroom'
import BranchName from './BranchName'
import Try from './Try'
// import Home from './component/Home'

ReactDOM.render(
<BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
             {/* <Route path="/" element={<App/>}> */}
          {/* <Route path="/Home" element={<Home />} /> */}
             <Route path="/Login" element={<Login />} />
              <Route path="/Branch" element={<Branch/>}>
                  </Route> 
              <Route path="/BranchName"  element={<BranchName />} />
              <Route path="/AddRoom"  element={<AdRoom />} />           
             <Route path="/addMeal" element={<AddMeal />} />
             <Route path="/Try" element={<Try />} />
             
             {/* </Route> */}
             
          </Routes>
       </BrowserRouter>

, document.getElementById("root"));

