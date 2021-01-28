import React from "react";
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";
import "./Nav.css";

export default ({ itemsInCart }) => {
   return (
      <nav className="navbar">
         <div className="nav-logo">
            <Link to="/">Athletic Shop</Link>
         </div>
         <ul className="navbar-list container">
            {NavItems.map((item, i) => {
               return (
                  <li className={item.cName} key={i}>
                     <Link to={item.url}>{item.title}</Link>
                  </li>
               );
            })}
         </ul>
         <div className="shopping-cart">
            <Link to="/cart">
               <i className="fas fa-shopping-cart"></i>
               <figure className="items-in-cart">{itemsInCart}</figure>
            </Link>
         </div>
      </nav>
   );
};
