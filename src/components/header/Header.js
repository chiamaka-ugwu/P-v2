import React from "react";
import "./styles/header.css";
import heroImage from "../../assets/images/bg.jpg";
import mobile from "../../assets/images/bg2.jpg"
import { Typewriter } from "react-simple-typewriter";
import Button from "../button/Button";

const Header = () => {
  return (
    <header>
      <div className="bg">
        <div className="dark"></div>
        <img className="bg-img bg1" src={heroImage} alt="hero-image" />
        <img className="bg-img bg2" src={mobile} alt="hero-image" />
        <div className="text1">
          <h3>
            HI, I'M <span className="pink">CHIAMAKA</span>
          </h3>
          <h1>A FRONTEND DEVELOPER</h1>
          <p>
            I'm a creative developer passionate about developing user friendly
            and interactive frontend applications.
          </p>
          <h2 className="possess">
            I possess hard skills in  
            <span className="pink" style={{  marginLeft: "10px",fontWeight: "bold" }}>
            {"<"}
              <Typewriter
                loop
                cursor
                cursorStyle="/>"
                typeSpeed={200}
                deleteSpeed={50}
                delaySpeed={1000}
                words={["HTML", "CSS", "JS", "React", "Tailwind", "MUI", "Bootstrap"]}
                // onLoop={(loopCount) =>
                //   console.log(`Just completed loop ${loopCount}`)
                // }
              />
            </span>
          </h2>
          <Button name='View Projects'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
