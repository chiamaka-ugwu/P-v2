import React from "react";
import "./about.css";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myPhoto from "../../assets/images/myphoto.jpg";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="heading">
          <FontAwesomeIcon icon={faAddressCard} className="h1 icon" beat />
          <h1 className="h1">About Me</h1>
        </div>
        <div className="about-content about1">
          <div className="left">
            <img src={myPhoto} alt="Chiamaka" cl />
          </div>
          <div className="right">
            <p>
              Hi, I'm Chiamaka Ugwu, a{" "}
              <span className="pink">frontend developer</span> passionate about
              crafting seamless and dynamic web applications. With a strong
              foundation in Javascript and React.js, I specialize in building
              intuitive, high-performance user interfaces that enhance digital
              experiences. I thrive on solving problems, optimizing performance,
              and creating scalable solutions that bridge the gap between design
              and functionality. Beyond writing clean and efficient code, I
              enjoy collaborating with teams to bring ideas to life, ensuring
              that every project is both user-friendly and technically sound. My
              experience spans across building responsive web applications,
              implementing modern authentication systems, and optimizing UI
              performance for accessibility and speed.
              <br /> <br />
              In addition to developing web applications, I am also passionate
              about knowledge sharing and mentorship. As a{" "}
              <span className="pink">tutor</span>, I have guided aspiring
              developers in mastering essential frontend technologies, helping
              them build real-world projects and understand industry best
              practices. My approach focuses on simplifying complex concepts,
              fostering hands-on learning, and empowering individuals to grow
              their technical skills with confidence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
