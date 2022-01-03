
import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Login from './component/Login';
import { useState } from 'react';


export default function App() {
    const [Authentication,setAuthentication]= useState(false)

    function handel(){
        setAuthentication(true);
    }
    if(!Authentication){
        return<Login handel = {handel} />
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
       <Link to='/Try'>Try</Link>|{"    "} 
       <Link to='/Loginn'>Loginn</Link>|{"    "}       
          </ul>
          <Outlet />

      </div>
    )
}
     
