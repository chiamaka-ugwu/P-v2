import React from "react";
import "./styles/nav.css";

const Nav = () => {
  return (
    <nav id="nav">
      <div className="nav-content">
        <h1>CHIAMAKA UGWU</h1>
        <ul id="drop-down">
          <li>
            <a class="nav" href="#about">
              About
            </a>
          </li>
          <li>
            <a class="nav" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a class="nav" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a class="nav" href="#footer">
              Socials
            </a>
          </li>
          <li>
            <a
              class="resume"
              href="./images/Chiamaka's Resume (3).pdf"
              download
            >
              Download My Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
