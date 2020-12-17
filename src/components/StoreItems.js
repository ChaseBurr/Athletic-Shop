import React from "react";
import Card from "./Card";

function StoreItems() {
  return (
    <div className="cards">
      <h1>Check out our new items!</h1>
      <div className="card-container">
        <div className="store-items-wrapper">
          <ul className="store-items">
            <Card
              src="/images/photography.jpg"
              text="Jacket of the future."
              label="new"
              path="/store"
            />
            <Card
              src="/images/photography.jpg"
              text="Jacket of the future."
              label="new"
              path="/store"
            />
          </ul>
          <ul className="store-items">
            <Card
              src="/images/photography.jpg"
              text="Jacket of the future."
              label="new"
              path="/store"
            />
            <Card
              src="/images/photography.jpg"
              text="Jacket of the future."
              label="new"
              path="/store"
            />
            <Card
              src="/images/photography.jpg"
              text="Jacket of the future."
              label="new"
              path="/store"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StoreItems;
