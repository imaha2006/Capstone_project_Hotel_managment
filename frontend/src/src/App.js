
import React from 'react'
import { Outlet, Link } from "react-router-dom";


export default function App() {
    return (
        <div>
            <ul className="ul-list">
            <Link to='/Login'>Login</Link>|{" "}
      <Link to='/Branch'>Branch </Link>|{" "}
       <Link to='/BranchName'>BranchName</Link> |{" "}
       <Link to='/AddRoom'>AddRoom</Link>|{" "}
       <Link to='/AddMeal'>AddMeal</Link>|{" "}      
          </ul>
          <Outlet />

      </div>
    )
}
     
