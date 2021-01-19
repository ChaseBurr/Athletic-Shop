import React from "react";
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="nav-logo">SPORTS</div>
        <ul className="navbar-list container">
          {NavItems.map((item, i) => {
            return (
              <li className={item.cName}>
                <a href={item.url}>{item.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="shopping-cart">
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <figure className="items-in-cart">0</figure>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
