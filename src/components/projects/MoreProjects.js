import React from "react";
import "./project.css";
import pms from "../../assets/images/product-school.png";
import buzpay from "../../assets/images/buzpay.png";
import sendwheels from "../../assets/images/sendwheels.png";
import faq from "../../assets/images/faq.png";
import fourCard from "../../assets/images/four-card.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Btn from "../tools/Btn";
import { Link } from "react-router-dom";

const MoreProjects = () => {
  return (
    <>
      <div className="about more">
        <div className="heading">
          <FontAwesomeIcon icon={faCode} className="h1 icon" spin />
          <h1 className="h1">More Projects</h1>
        </div>

        <div className="about-content project-content">
          <div className="left">
            <img src={pms} alt="productschool.png" />
          </div>
          <div className="right">
            <h3 className="pink title1">Harvoxx Product School</h3>
            <p className="desc">
              Landing page for a bootcamp organised by Harvoxx Product School
            </p>
            <h3 className="pink tool">Tools/Languages</h3>
            <div className="div">
              <Btn name="HTML" />
              <Btn name="CSS" />
              <Btn name="JavaScript" />
              <Btn name="Bootstrap" />
            </div>
            <div className="view">
              <a
                href="https://haps.harvoxx.com/"
                className="url"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink} />
                <h3>URL</h3>
              </a>
              <a
                href="https://github.com/chiamaka-ugwu/Product-School"
                className="code"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
                <h3>Code</h3>
              </a>
            </div>
          </div>
        </div>

        <div className="about-content project-content swap">
          <div className="left">
            <img src={buzpay} alt="buzpay.png" />
          </div>
          <div className="right">
            <h3 className="pink title1">BuzPay</h3>
            <p className="desc">
              Coming soon landing page for buzpayapp built with ReactJS
            </p>
            <h3 className="pink tool">Tools/Languages</h3>
            <Btn name="React" />
            <Btn name="HTML" />
            <Btn name="CSS" />
            <div className="view">
              <a
                href="https://buzpay-comingsooon.netlify.app/"
                className="url"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink} />
                <h3>URL</h3>
              </a>
              <a
                href="https://github.com/chiamaka-ugwu/buzzPay"
                className="code"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
                <h3>Code</h3>
              </a>
            </div>
          </div>
        </div>

        <div className="about-content project-content">
          <div className="left">
            <img src={sendwheels} alt="sendwheels.png" />
          </div>
          <div className="right">
            <h3 className="pink title1">Sendwheels</h3>
            <p className="desc">A bike delivery service webiste.</p>
            <h3 className="pink tool">Tools/Languages</h3>
            <Btn name="HTML" />
            <Btn name="CSS" />
            <Btn name="JavaScript" />
            <div className="view">
              <a
                href="https://chiamaka-ugwu.github.io/Sendwheels/"
                className="url"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink} />
                <h3>URL</h3>
              </a>
              <a
                href="https://github.com/chiamaka-ugwu/Sendwheels"
                className="code"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
                <h3>Code</h3>
              </a>
            </div>
          </div>
        </div>

        <div className="about-content project-content swap">
          <div className="left">
            <img src={faq} alt="faq.png" />
          </div>
          <div className="right">
            <h3 className="pink title1">FAQ Accordion</h3>
            <p className="desc">An FAQ section built with Javascript.</p>
            <h3 className="pink tool">Tools/Languages</h3>
            <Btn name="HTML" />
            <Btn name="CSS" />
            <Btn name="Javascript" />
            <div className="view">
              <a
                href="https://chiamaka-ugwu.github.io/FAQ-Accordion/"
                className="url"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink} />
                <h3>URL</h3>
              </a>
              <a
                href="https://github.com/chiamaka-ugwu/FAQ-Accordion"
                className="code"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
                <h3>Code</h3>
              </a>
            </div>
          </div>
        </div>

        <div className="about-content project-content">
          <div className="left">
            <img src={fourCard} alt="fourcard.png" />
          </div>
          <div className="right">
            <h3 className="pink title1">Four Card Section</h3>
            <p className="desc">
              Components highlighting the goals of AI powered tools.
            </p>
            <h3 className="pink tool">Tools/Languages</h3>
            <Btn name="HTML" />
            <Btn name="CSS" />
            <Btn name="Javascript" />
            <div className="view">
              <a
                href="https://chiamaka-ugwu.github.io/Four-Card-Section/"
                className="url"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink} />
                <h3>URL</h3>
              </a>
              <a
                href="https://github.com/chiamaka-ugwu/Four-Card-Section"
                className="code"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
                <h3>Code</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="see-more">
          <Link to="/">
            <button className="submit">Back to Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MoreProjects;
