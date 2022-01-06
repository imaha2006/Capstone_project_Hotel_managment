
import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Login from './component/Login';
import { useState } from 'react';


export default function App() {
    let [Authentication,setAuthentication]= useState(false);

  
    function handleLogin(){
        setAuthentication(true);
    }
     if(!Authentication){
         return<Login handleLogin = {handleLogin} />
     }
    return (
        <div>
            <ul className="ul-list">
            <Link to ='/Home'>Home</Link> |{"        "}
            <Link to='/Login'>Login</Link>|{"     "}
      <Link to='/Branch'>Branch </Link>|{"   "}
       <Link to='/BranchName'>BranchName</Link> |{"    "}
       <Link to='/AddRoom'>AddRoom</Link>|{"    "}
       <Link to='/AddMeal'>AddMeal</Link>|{"    "} 
       <Link to='/AdminHome'>AdminHome</Link>|{"    "}
       <Link to='/Information'>Information</Link>|{"    "} 
 
            
          </ul>
          <Outlet />

      </div>
    )
}
     
