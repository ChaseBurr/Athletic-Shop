import React from "react";
import { Button } from "./Button";
class Hero extends React.Component {
  render() {
    return (
      <div className="hero-container">
        <div className="hero-overlay">
          <h2 className="hero-overlay-title">Hero Title</h2>
          <h4 className="hero-overlay-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            nemo corrupti, laboriosam officia enim reprehenderit numquam
            laudantium dicta unde, amet ex, beatae id. Fugiat dolor, modi ipsa
            eveniet tempora quaerat? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestias nemo corrupti, laboriosam officia enim
            reprehenderit numquam laudantium dicta unde, amet ex, beatae id.
            Fugiat dolor, modi ipsa eveniet tempora quaerat?
          </h4>
          <Button
            link="/shop"
            buttonSize="btn-medium"
            buttonStyle="btn-secondary"
          >
            Shop
          </Button>
        </div>
      </div>
    );
  }
}

export default Hero;

// ! Todo
// ? Turn Hero into slider
