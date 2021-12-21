import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home'
import Login from './component/Login'
import Branch from './component/Branch'
import AddMeal from './AddMeal';
import AddRoom from './Adroom'
import BranchName from './BranchName'
ReactDOM.render(
<BrowserRouter>
          <Routes>
           
             <Route path="/" element={<App />} />
       < Route path="/home" element={< Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Branch" element={<Branch/>}/>
        <Route path="/AddMeal" elment={<AddMeal/>}/>
        <Route path="/AddRoom" elment={<AddRoom/>}/>   
         <Route path="/BranchName" element={<BranchName/>}/> 
          </Routes>
       </BrowserRouter>,

  document.getElementById("root")
);
