import React, { Component } from "react";
import { NavItems } from "./NavItems";

class Nav extends React.Component {
  render() {
    return (
      <div className="navbar">
        <nav className="navbar-main">
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
      </div>
    );
  }
}

export default Nav;
