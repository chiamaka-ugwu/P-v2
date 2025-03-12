import React, { useState } from "react";
import "./styles/nav.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);



  // const onButtonClick = () => {
  //   // using Java Script method to get PDF file
  //   fetch("ChiamakaUgwu.pdf").then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "ChiamakaUgwu.pdf";
  //       alink.click();
  //       toggle();
  //     });
  //   });
  // };

  return (
    <nav id="nav">
      <div className="nav-content">
        <Link to="/">
          <h1>CHIAMAKA UGWU</h1>
        </Link>
        <img src={logo} alt="logo" className="logo" onClick={toggle} />
        <ul className="desktop hide-on-mobile">
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
              href="https://docs.google.com/document/d/1vfN0fXNUp2UsNCjOa_msWsgRMlH-SnjPyWzQ61hRAEk/edit?usp=sharing"
            >
              View Resume
            </a>
          </li>
        </ul>

        <ul className={open ? "desktop " : "mobile"}>
          <li>
            <a class="nav" href="#about" onClick={toggle}>
              About
            </a>
          </li>
          <li>
            <a class="nav" href="#projects" onClick={toggle}>
              Projects
            </a>
          </li>
          <li>
            <a class="nav" href="#contact" onClick={toggle}>
              Contact
            </a>
          </li>
          <li>
            <a class="nav" href="#footer" onClick={toggle}>
              Socials
            </a>
          </li>
          <li>
            <a
              class="resume"
              href="https://docs.google.com/document/d/15AmzDtQ5M2VlX4dvdrKY-IQ-pNOH-cVwe5N8ZzymgKo/edit?usp=sharing"
            >
              View Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
