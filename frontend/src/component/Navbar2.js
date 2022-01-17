// import logo from "./logo.svg";
import "../App.css";

function Navbar (){
    return(
        // <nav class="navbar navbar-inverse">
        //     <div class="container-fluid">
        //         <div class= "navbar-header">
        //             <a class="navbar-brand" href="/AdminHome">
        //                 Maha Hotel Group
        //             </a>
        //             <a class="navbar-brand" href="/AdminHome">
        //                 Branches
        //             </a> 
        //             <a class="navbar-brand" href="">
        //                Rooms
        //             </a>
        //             <a class="navbar-brand" href="">
        //                 Meals
        //             </a>
        //             </div>
        //         <ul class="nav navbar-nav navbar-right">
        //             <li>
        //                 <a href="/Login">
        //                     <span class="glyphicon glypicon-log-in"></span><span onClick={()=>{localStorage.setItem("LogIn","")}}>LogOut</span>  

        //                 </a>
        //             </li>
        //            </ul>
        //          </div>
        //        </nav>
        <div>
        <nav class="navbar navbar-default navbar-fixed-top">
         <div class="container-fluid">
           <div class="navbar-header">
             <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                     
             </button>
             <a class="navbar-brand" href="#">A</a>
           </div>
           <div class="collapse navbar-collapse" id="myNavbar">
             <ul class="nav navbar-nav navbar-right">
               <li><a href="/AdminHome" class="navbaritem">AdminHome</a></li>
               <li><a href="#myworks" class="navbaritem">Portfolio</a></li>
               <li><a href="#contactme" class="navbaritem">Contact</a></li>
               
             </ul>
        
           </div>
         
        
         </div>
         </nav>
         </div>
             );
           }
 export default Navbar;