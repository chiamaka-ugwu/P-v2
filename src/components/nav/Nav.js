import React from "react";
import "./styles/nav.css";
import logo from "../../assets/images/logo.png"

const Nav = () => {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Chiamaka.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Chiamaka.pdf';
            alink.click();
        })
    })
}

  return (
    <nav id="nav">
      <div className="nav-content">
        <h1>CHIAMAKA UGWU</h1>
        <img src={logo} alt="logo" className="logo" />
        <ul className="desktop">
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
              href=""
              onClick={onButtonClick}
            >
              Download My Resume
            </a>
          </li>
        </ul>

        <ul className="mobile">
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
              href=""
              onClick={onButtonClick}
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
