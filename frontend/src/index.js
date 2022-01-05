import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Branch from './component/Branch';
import AdminHome from './AdminHome';
//import AddMeal from './AddMeal';
//import AdRoom from './Adroom';
// import BranchName from './BranchName';
  import Try1 from './Try1';

import './index.css';



ReactDOM.render(
<BrowserRouter>
          <Routes>
          <Route path="/" element={<App />} > </Route> 
             <Route path="/Home" element={<Home/>}></Route> 
             {/* <Route path="/Login" element={<Login />} ></Route>  */}
              <Route path="/Branch/:id" element={<Branch/>}></Route> 
              <Route path="/AdminHome" element={< AdminHome />}></Route> 
              {/* <Route path="/BranchName"  element={<BranchName />} /> */}
              {/* <Route path="/AddRoom"  element={<AdRoom />} />           
             <Route path="/addMeal" element={<AddMeal />} /> */}
             {/* <Route path="/Try" element={<Try />} ></Route> */}
             <Route path="Try1" element={<Try1 />} />
            
          </Routes>
       </BrowserRouter>

, document.getElementById("root"));

