// import logo from "./logo.svg";
import "../App.css";

function Navbar (){
    return(
        // <nav class="navbar navbar-inverse">
        //     <div class="container-fluid">
        //         <div class= "navbar-header">
        //             <a class="navbar-brand" href="/">
        //                 Maha Hotel Group
        //             </a>
        //             </div>
        //         <ul class="nav navbar-nav navbar-right">
        //             <li>
        //                 <a href="/Login">
        //                     <span class="glyphicon glypicon-log-in"></span>Login
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
               <li><a href="/Login" class="navbaritem">Login</a></li>
               <li><a href="#myworks" class="navbaritem">Portfolio</a></li>
               <li><a href="#contactme" class="navbaritem">Contact</a></li>
               
             </ul>
        
           </div>
         
        
         </div>
         </nav></div>
             );
           }
 export default Navbar;