// import logo from "./logo.svg";
import "../App.css";

function Navbar (){
    return(
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class= "navbar-header">
                    <a class="navbar-brand" href="/AdminHome">
                        Maha Hotel Group
                    </a>
                    <a class="navbar-brand" href="/AdminHome">
                        Branches
                    </a> 
                    <a class="navbar-brand" href="">
                       Rooms
                    </a>
                    <a class="navbar-brand" href="">
                        Meals
                    </a>
                    </div>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="/Login">
                            <span class="glyphicon glypicon-log-in"></span><span onClick={()=>{localStorage.setItem("LogIn","")}}>LogOut</span>  

                        </a>
                    </li>
                   </ul>
                 </div>
               </nav>
             );
           }
 export default Navbar;