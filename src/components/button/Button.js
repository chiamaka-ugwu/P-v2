import React from "react";
import "./button.css";

const Button = ({name}) => {
  return (
    <>
    <a href="#projects">
      <button id="#projects" className="btn">{name}</button>
    </a>
    </>
  );
};

export default Button;
