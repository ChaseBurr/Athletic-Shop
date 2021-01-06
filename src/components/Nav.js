import React from "react";
import { NavItems } from "./NavItems";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="nav-logo">SPORTS</div>
        <ul className="navbar-list">
          {NavItems.map((item, i) => {
            return (
              <li className={item.cName}>
                <a href={item.url}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Nav;
