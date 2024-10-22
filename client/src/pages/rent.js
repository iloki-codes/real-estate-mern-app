import React from 'react';
import "./rent.css";
import cardImage1 from "../Photos/cardImage1.png";
import cardImage2 from "../Photos/cardImage2.png";
import cardImage3 from "../Photos/cardImage3.png";
import cardImage4 from "../Photos/cardImage4.png";
import cardImage5 from "../Photos/cardImage5.png";
import cardImage6 from "../Photos/cardImage6.png";
import cardImage7 from "../Photos/cardImage7.png";
import cardImage8 from "../Photos/cardImage8.png";
import cardImage9 from "../Photos/cardImage9.png";


const Rent = () => {
  return (
    <div class="secondpage">
        
        <p class="three">Our Best Estate,<br />Are Modern!</p>
        
        <div class="img1">
            <img src={cardImage1} alt="cardImage" />
            <div class="four">
             
                <span class="five">Mixtownia</span><br /><br />
                <span class="six">$205,500</span>
                <button class="rent">Rent Now</button>
            </div>
        </div>

        <div class="img2">
            <img src={cardImage2} alt="cardImage" />
          
            <div class="seven">
                <span class="eight">Mirtawan</span><br /><br />
                <span class="nine">$102,200</span>
                <button class="rent">Rent Now</button>
            </div>
        </div>

        <div class="img3">
            <img src={cardImage3} alt="cardImage"/>
           
            <div class="ten">
                <span class="eleven">Wartawan</span><br /><br />
                <span class="twelve">$135,900</span>
                <button class="rent">Rent Now</button>
            </div>
        </div>

        <div class="img4">
            <img src={cardImage4} alt="cardImage" />
            <div class="thirteen">
                <span class="fourteen">Nangloitown</span><br /><br />
                <span class="fifteen">$215,580</span>
                <button class="rent">Rent Now</button>
            </div>
        </div>

        <div class="img5">
            <img src={cardImage5} alt="cardImage" />
            <div class="sixteen">
                <span class="seventeen">Dwarkanang</span><br /><br />
                <span class="eighteen">$205,500</span>
                <button class="rent">Rent Now</button>
            </div>
        </div>

        <div class="img6">
            <img src={cardImage6} alt="cardImage" />
            <div class="nineteen">
                <span class="twenty">JamanaBazaar</span><br /><br />
                <span class="twentyone">$505,500</span>
                <button class="rent">Rent Now</button>
            </div>
        </div>

        <div class="img7">
            <img src={cardImage7} alt="cardImage" />
            <div class="twentytwo">
                <span class="twentythree">Pitampurawan </span><br /><br />
                <span class="twentyfour">$365,508</span>
                <button class="rent">Rent Now</button>
            </div>
        </div>

        <div class="img8">
            <img src={cardImage8} alt="cardImage"/>
            <div class="twentyfive">
                <span class="twentysix">Karampurawn</span><br /><br />
                <span class="twentyseven">$400,500</span>
                <button class="rent">Rent Now</button>
            </div>
        </div>

        <div class="img9">
            <img src={cardImage9} alt="cardImage" />
            <div class="twentyeight">
                <span class="twentynine">Kirarinia</span><br /><br />
                <span class="thirty">$010,500</span>
                <button class="rent">Rent Now</button>
            </div>
        </div>
    </div>
  );

}

export default Rent;
