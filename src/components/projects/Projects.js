import React from "react";
import "./project.css";
import cutrate from "../../assets/images/cutrate.png";
import gosaveme from "../../assets/images/gosaveme.png";
import techyounity from "../../assets/images/techyounity.png";
import dynasty from "../../assets/images/dynasty.png";
import insiderjobs from "../../assets/images/job.png";
import pms from "../../assets/images/product-school.png";
import sendwheels from "../../assets/images/sendwheels.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Btn from "../tools/Btn";
import { Link } from "react-router-dom";

const Projects = ({ name }) => {
  return (
    <>
      <div className="about projects" id="projects">
        <div className="heading">
          <FontAwesomeIcon icon={faCode} className="h1 icon" spin />
          <h1 className="h1">My Projects</h1>
        </div>

        <div className="about-content project-content swap">
          <div className="left">
            <img src={insiderjobs} alt="insiderjobs.png" />
          </div>
          <div className="right">
            <h3 className="pink title1">Job Portal</h3>
            <p className="desc">
              Job portal built with React + Vite, includes Clerk Authentication,
              Admin Dashboard, job search and filter feature, etc.
            </p>
            <h3 className="pink tool">Tools/Languages</h3>
            <Btn name="React + Vite" />
            <Btn name="TailwindCSS" />
            <Btn name="Clerk Authentication" />
            <div className="view">
              <a
                href="https://job-portal-ten-mu.vercel.app/"
                className="url"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink} />
                <h3>URL</h3>
              </a>
              {/* <a
                href="https://github.com/chiamaka-ugwu/GoSave-Me"
                className="code"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
                <h3>Code</h3>
              </a> */}
            </div>
          </div>
        </div>

        <div className="about-content project-content swap">
          <div className="left">
            <img src={gosaveme} alt="gosaveme.png" />
          </div>
          <div className="right">
            <h3 className="pink title1">GoSaveMe</h3>
            <p className="desc">
              GOSAVEME is designed to be the most trusted online crowdfunding
              website for hospital patients in need of financial assistance to
              help them get the best of medical care to stay alive.
            </p>
            <h3 className="pink tool">Tools/Languages</h3>
            <Btn name="React" />
            <Btn name="Supabase" />
            <Btn name="MUI" />
            <Btn name="CSS" />
            <div className="view">
              <a
                href="https://go-save-me.vercel.app/"
                className="url"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink} />
                <h3>URL</h3>
              </a>
              {/* <a
                href="https://github.com/chiamaka-ugwu/GoSave-Me"
                className="code"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
                <h3>Code</h3>
              </a> */}
            </div>
          </div>
        </div>

        <div className="about-content project-content">
          <div className="left">
            <img src={techyounity} alt="techyounity.png" />
          </div>
          <div className="right">
            <h3 className="pink title1">Techyounity</h3>
            <p className="desc">
              Techyounity is a community which aims at bridging the gap between
              getting into tech and being successful in tech. This website is
              very user friendly and guarantees optimal user experience.
            </p>
            <h3 className="pink tool">Tools/Languages</h3>
            <Btn name="React" />
            <Btn name="MUI" />
            <Btn name="HTML" />
            <Btn name="CSS" />
            <div className="view">
              <a
                href="https://techyounity.vercel.app/"
                className="url"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink} />
                <h3>URL</h3>
              </a>
              {/* <a
                href="https://github.com/chiamaka-ugwu/techYOUnity"
                className="code"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
                <h3>Code</h3>
              </a> */}
            </div>
          </div>
        </div>

        <div className="about-content project-content">
          <div className="left">
            <img src={cutrate} alt="cutrate.png" />
          </div>
          <div className="right">
            <h3 className="pink title1">Cutrate.ng</h3>
            <p className="desc">
              Cutrate is a hospitality brand which aims to provide affordable
              hotels for it's users. This website was built to ease booking
              challenges and increase hotel visibiltity.
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
                href="https://chiamaka-ugwu.github.io/Cutrate-main/"
                className="url"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink} />
                <h3>URL</h3>
              </a>
              {/* <a href="" className="code" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
                <h3>Code</h3>
              </a> */}
            </div>
          </div>
        </div>

        <div className="about-content project-content swap">
          <div className="left">
            <img src={dynasty} alt="dynasty.png" />
          </div>
          <div className="right">
            <h3 className="pink title1">Dynasty Perfumes</h3>
            <p className="desc">
              Dynasty Perfumes is a perfume brand. This website was built to
              help the client reach his customers easier and faster. It helps
              the customer to place orders easily.
            </p>
            <h3 className="pink tool">Tools/Languages</h3>
            <Btn name="HTML" />
            <Btn name="CSS" />
            <Btn name="Javascript" />
            <Btn name="Bootstrap" />
            <div className="view">
              <a
                href="https://dynastyperfumes.netlify.app/"
                className="url"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink} />
                <h3>URL</h3>
              </a>
              {/* <a href="" className="code" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
                <h3>Code</h3>
              </a> */}
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
              {/* <a
                href="https://github.com/chiamaka-ugwu/Sendwheels"
                className="code"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
                <h3>Code</h3>
              </a> */}
            </div>
          </div>
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
              {/* <a
                href="https://github.com/chiamaka-ugwu/Product-School"
                className="code"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
                <h3>Code</h3>
              </a> */}
            </div>
          </div>
        </div>

        <div className="see-more">
          <Link to="/projects">
            <button className="submit">See More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
