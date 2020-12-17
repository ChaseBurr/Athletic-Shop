import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Store extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div className="store">
        <div className="store-item">asdf</div>
      </div>
    );
  }
}
