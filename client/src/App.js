import './App.css';
import bg from "./Photos/mainBackground.png";
import logo from "./Icons/Logo.svg" ;
import logoname from "./Icons/logoName.svg";
import mail from "./Icons/mail.png";
import fb from "./Icons/facebook.png";
import insta from "./Icons/instagram.png";
import tweet from "./Icons/twitter.png";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Rent from "./pages/rent.js";
import RentTwo from './pages/rent2.js';

const App = () => {

  return (

    <div className="App">

      <Routes>

        <Route path="/book" element={<RentTwo />} />
        <Route path="/rent" element={<Rent />} />
    
      </Routes>

      <div class="first page">
        
        <img class="bg" src={bg} alt="bg" />

        <header>
              
            <img class="logo" src={logo} alt="logo" />
            
            <div class="header">
                
              <Link to={"/rent"}>
                <ul class="nav">
                    <li><a href="">Location</a></li>
                    <li><a href="">Blogs</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
              </Link>

                <hr class="hr1" />
                
            </div>
        
        </header>
        
        <p class="one">Home That Makes<br />You Living Life!</p>
        
        <p class="two">Are you looking for amazing Real Estate?Don't<br />worry!We got it for you!</p>
        
        <a href="">
          <Link to={"/book"}>
            <button class="learn">Learn More</button>
          </Link>
        </a>
    
      </div>
    
    
    <div class="logo tab">
        
        <ul class="logo_tab">
            <li><a href=""><img src={logoname} alt="logoname" /></a></li>
            <li><a href=""><img src={logoname} /></a></li>
            <li><a href=""><img src={logoname} /></a></li>
            <li><a href=""><img src={logoname} /></a></li>
            <li><a href=""><img src={logoname} /></a></li>
        </ul>
    
    </div>

        <div class="bluetab">
            
            <p class="thirtyfive">Subscribe To Our Newsletter<br />For Weekly Article Update.</p>

            <p class="thirtysix">We have real estate-related blog so we can share our thought and rutinity in<br />our blog that updated weekly. We will not spam you, we promise.</p>
            
            <form action="">
          
                <div class="mail">
                    <img src={mail} />
                    <input type="email" id="email" placeholder="Enter your e-mail address" />
                </div>
          
                <input class="subs" type="submit" value="Subscribe" />
          
            </form>
        
        </div>

        <div class="footer">

            <div class="thirtyseven">
            
                <img class="last logo" src={logo} />

                <ul class="social">
                    <li><a href=""><img src={fb} /></a></li>
                    <li><a href=""><img src={insta} /></a></li>
                    <li><a href=""><img src={tweet} alt="twitter" /></a></li>
                </ul>
                <span class="thirtyeight">2022 Award winning Real Estate<br />and Lorem Ipsum award holder.</span>
            
            </div>

            <div class="ullist">
              
              <ul class="location">
                <li><a class="b" href="">Location</a></li>
                <br />
                <li><a href="">America</a></li>
                <li><a href="">Asia</a></li>
                <li><a href="">Europe</a></li>
                <li><a href="">Africa</a></li>
              </ul>
              
              <ul class="contact">
                <li><a class="b" href="">Contact</a></li>
                <br />
                <li><a href="">About Me</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Profile</a></li>
                <li><a href="">Teams</a></li>
              </ul>
            
              <ul class="legals">
                <li><a class="b" href="">Legals</a></li>
                <br />
                <li><a href="">Privacy</a></li>
                <li><a href="">Disclaimer</a></li>
                <li><a href="">Terms</a></li>
                <li><a href="">Company</a></li>
              </ul>
            </div>
        
        </div>

    <hr class="mayank2" />

    <div class="mayank">
        <a href="">By Mayank</a>
    </div>

    </div>
    
  );
  
}

export default App;
