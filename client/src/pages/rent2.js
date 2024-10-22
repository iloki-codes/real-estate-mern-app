import React from 'react'
import "./rent2.css";
import featureImageBg1 from "../Icons/featureImageBg1.svg" ;
import featureImage1 from "../Photos/featuresImage1.png";
import featureImageBg2 from "../Icons/featureImageBg2.png";
import featureImage2 from "../Photos/featuresImage2.png";

const RentTwo = () => {
  
    return (
   
   <div class="third page">
        
        <div class="position one">
        
            <img class="icon one" src={featureImageBg1} />
            <img class="pic one" src={featureImage1} />

        </div>

        <div class="content1">
            <span class="thirtyone">Modern, Trendy,<br />Affordable!</span>
            <span class="thirtytwo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nisi<br />reprehenderit, provident at animi aliquam incidunt.</span>
            <button class="bird one">Early Bird Book</button>
        </div>

        <div class="position two">
            <img class="icon two" src={featureImageBg2} />
            <img class="pic two" src={featureImage2} />
        </div>

        <div class="content2">
            <span class="thirtythree">Unique House<br />for Long Term!</span>
            <span class="thirtyfour">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br />Mollitia nisi reprehenderit, provident at animi aliquam incidunt.</span>
            <button class="bird two">Early Bird Book</button>
        </div>

        </div>
    
    );

}

export default RentTwo;

