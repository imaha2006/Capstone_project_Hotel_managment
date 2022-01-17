// import logo from "./logo.svg";
import "../App.css";
import  Navbar from "../component/Navbar";
function Home(){
return(
<div>
    <Navbar />
{/* <div style={{height:"50px"}}>
    <img 
 style={{width:"100%"}} 
src="https://besthotelscity.com/wp-content/uploads/2021/02/28417430.jpg"
width="100%"
height="1100%"
/>
    </div>
     <p>View information about hotel</p>
    <p>link to allow user to explor the hotel</p>
</div> */}

  <div class="container">
  <div class="row">
    <div class="col-lg-12 " id="about">
      
      <p id="adem">Adem Harabi</p>
      <p id="skills">game designer - web designer</p>
      
      <ul class="iconslist">
        <li><a href="https://www.facebook.com/adem.black.5?lst=100002249232513%3A100002249232513%3A1490870344" target="_blank"><i class="fa fa-facebook fa-3x" id="facebook"></i></a></li>
        <li><a href="https://twitter.com/Adempirat" target="_blank"><i class="fa fa-twitter fa-3x" id="twitter"></i></a></li>
        <li><a href="https://www.linkedin.com/in/adem-harabi-08b41b140/" target="_blank"><i class="fa fa-linkedin fa-3x" id="linkedin"></i></a></li>
        <li><a href="https://www.freecodecamp.com/adempirat" target="_blank"><i class="fa fa-free-code-camp fa-3x" id="freecodecamp"></i></a></li>
      
      </ul>

      </div>
  </div> 
  </div>

  <div class="container-fluid" id="myworks">
    <p id="portfoliotext">Portfolio</p>
    
    <div class="row">
      <div class="col-sm-4 works">
        <img src="https://elevenfifty.org/wp-content/uploads/2016/12/game-design-1.jpg" class="img-responsive"/>
      
      </div>
      
      <div class="col-sm-4 works">
        <img src="https://elevenfifty.org/wp-content/uploads/2016/12/game-design-1.jpg" class="img-responsive"/>
      </div>
      
      <div class="col-sm-4 works">
        <img src="https://elevenfifty.org/wp-content/uploads/2016/12/game-design-1.jpg" class="img-responsive"/>
      </div>
      
    </div> 
    
    
     <div class="row">
      <div class="col-sm-4 works">
        <img src="https://elevenfifty.org/wp-content/uploads/2016/12/game-design-1.jpg" class="img-responsive"/>
      
      </div>
      
      <div class="col-sm-4 works">
        <img src="https://elevenfifty.org/wp-content/uploads/2016/12/game-design-1.jpg" class="img-responsive"/>
      </div>
      
      <div class="col-sm-4 works">
        <img src="https://elevenfifty.org/wp-content/uploads/2016/12/game-design-1.jpg" class="img-responsive"/>
      </div>
      
    </div> 
  </div> 
   
  
  <div class="container-fluid" id="contactme">
    <p id="contactmetext">Contact me</p>
    <div class="contactbox">
     <form action="myemail@live.fr" method="post" enctype="text/plain">
       
      <div class="row">
        
        <div class="col-md-4">
          <div class="form-group">
            <label for="usr"></label>
            <input type="text" class="form-control inputnph" placeholder="Name"></input>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="form-group">
            <label for="tel"></label>
            <input type="text" class="form-control inputnph" placeholder="Phone number"></input>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="form-group">
            <label for="email"></label>
            <input type="text" class="form-control inputnph" placeholder="Email"></input> 
          </div>
        </div>
      </div> 
    

        <div class="row">
          <div class="col-md-12 ">
            <div class="form-group">
              <label for="comment"></label>
              <textarea class="form-control" row="10" id="message" placeholder="Message"></textarea>
            </div>
            
          </div>
        </div>
      
           <div class="submitbutton">
             <input type="submit" value="Send" id="sendbutton"></input>
           </div>
       </form>
    </div> 
  </div> 
       
  
  
  
  
  
  </div>

);
}
export default Home;


