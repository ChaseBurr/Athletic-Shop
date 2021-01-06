import React from "react";
import { Button } from "./Button";
class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-overlay">
          <h1 className="hero-overlay-title">HEALTH GOALS</h1>
          <h2 className="hero-overlay-sub-title">
            Get consolation from the best certified sport nutritionists
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
    );
  }
}

export default Hero;

// ! Todo
// ? Turn Hero into slider
