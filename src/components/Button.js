import React from "react";
import { Link } from "react-router-dom";

export const Button = ({
  children,
  link,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const style = buttonStyle ? buttonStyle : "btn-primary";
  const size = buttonSize ? buttonSize : "btn-medium";
  return (
    <Link to={link}>
      <button className={`btn ${style} ${size}`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};
