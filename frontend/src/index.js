import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Branch from './component/Branch';
import AdminHome from './AdminHome';
import AddMeal from './AddMeal';
import Meal from './component/Meal'
import AddRoom from './AddRoom';
import Room from './component/Room';
  import Try1 from './Try1';
import './index.css';
import Information from './component/Information'


ReactDOM.render(
<BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} > </Route> 
             <Route path="/App" element={<App/>}></Route> 
              <Route path="/Login" element={<Login />} ></Route> 
              <Route path="/Branch/:id" element={<Branch/>}></Route> 
              <Route path="/AdminHome" element={< AdminHome />}></Route>
              <Route path="Try1" element={<Try1 />} /> 
              <Route path="/AddRoom"  element={<AddRoom />} />           
              <Route path="/Room"  element={<Room />} />           
             <Route path="/addMeal" element={<AddMeal />} />
             <Route path="/Meal" element={<Meal />} />
             <Route path="/Information" element={<Information />} />
             
            
          </Routes>
       </BrowserRouter>

, document.getElementById("root"));

