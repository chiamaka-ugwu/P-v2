import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="heading">
          <h1 className="h1">About Me</h1>
        </div>
        <div className="about-content">
          <div className="left"></div>
          <div className="right">
            <p>
              I am a hardworking and success-driven front-end{" "}
              <span className="pink">developer</span> who loves to build
              beautiful and responsive websites for users to interact with. I am
              very passionate about translating designs into codes while paying
              rapt attention to accessiblity, thereby providing a friendly
              interface that would to meet users' needs. <br /> <br /> I also
              serve as a <span className="pink">tutor</span> for individuals who
              desire to start up a career in Frontend Development. I have gained
              valuable experience in the mentorship field and I enjoy imparting
              frontend knowledge in willing individuals. I am constantly
              learning new skills to help improve myself as a developer and tutor.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
