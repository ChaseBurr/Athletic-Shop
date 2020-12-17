import React from "react";
import { Link } from "react-router-dom";

function Card({ src, path, label, text, alt }) {
  return (
    <>
      <li className="card-item">
        <Link className="card-item-link">
          <figure className="cards-item-pic-wrap" data-category={label}>
            <img class="cards-item-img" alt={alt} src={src} />
          </figure>
          <div className="card-item-info">
            <h5 className="card-item-text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Card;
