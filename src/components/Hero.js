import React from "react";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <img src="./img/Hero.jpg" className="hero-banner" alt="Hero" />
        <div className="hero-overlay">
          <div className="hero-overlay-title">
            <h2>Yous a bitch</h2>
          </div>
          <div className="hero-overlay-desc">
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nemo corrupti, laboriosam officia enim reprehenderit numquam
              laudantium dicta unde, amet ex, beatae id. Fugiat dolor, modi ipsa
              eveniet tempora quaerat?
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;

// ! Todo
// ? Turn Hero into slider
