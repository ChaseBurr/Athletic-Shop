import React from "react";
import { Button } from "./../Button/Button";
import "./Hero.css";

class Hero extends React.Component {
   render() {
      return (
         <div className="hero">
            <div className="hero-slides">
               {/* Radio Buttons Start */}
               <input type="radio" name="radio-btn" id="radio1" />
               <input type="radio" name="radio-btn" id="radio2" />
               <input type="radio" name="radio-btn" id="radio3" />
               <input type="radio" name="radio-btn" id="radio4" />
               {/* Radio Buttons End */}

               {/* Slide images Start */}
               <div className="slide first">
                  <img src="/img/Hero/Hero-1.jpg" alt="" />
                  <div className="hero-overlay">
                     <h1 className="hero-overlay-title">HEALTH GOALS</h1>
                     <h2 className="hero-overlay-sub-title">
                        Get consolation from the best certified sport
                        nutritionists
                     </h2>
                     <Button
                        link="/shop"
                        buttonSize="btn-medium"
                        buttonStyle="btn-primary"
                     >
                        Shop Today!
                     </Button>
                  </div>
               </div>
               <div className="slide">
                  <img src="/Athletic-Shop/img/Hero/Hero-2.jpg" alt="" />
               </div>
               <div className="slide">
                  <img src="/Athletic-Shop/img/Hero/Hero-3.jpg" alt="" />
               </div>
               <div className="slide">
                  <img src="/Athletic-Shop/img/Hero/Hero-4.jpg" alt="" />
               </div>
               {/* Slide images End */}
               {/* Auto navigation start */}
               <div className="navigation-auto">
                  <div className="auto-btn1"></div>
                  <div className="auto-btn2"></div>
                  <div className="auto-btn3"></div>
                  <div className="auto-btn4"></div>
               </div>
               {/* Auto navigation end */}

               {/* manual navigation start */}
               <div className="navigation-manual">
                  <label htmlFor="radio1" className="manual-btn"></label>
                  <label htmlFor="radio2" className="manual-btn"></label>
                  <label htmlFor="radio3" className="manual-btn"></label>
                  <label htmlFor="radio4" className="manual-btn"></label>
               </div>
               {/* manual navigation end */}
            </div>
         </div>
      );
   }
}

export default Hero;

// ! Todo
// ? Turn Hero into slider
