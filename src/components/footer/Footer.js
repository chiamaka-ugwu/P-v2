import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import { faGithub, faInstagram, faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="icons">
          <a href="https://github.com/chiamaka-ugwu">
            <FontAwesomeIcon icon={faGithub} className="ic" beatFade />
          </a>
          <a href="https://twitter.com/chiamakaugwu_">
            <FontAwesomeIcon icon={faTwitter} className="ic" beatFade />
          </a>
          <a href="https://wa.me/2347066087325">
            <FontAwesomeIcon icon={faWhatsapp} className="ic" beatFade />
          </a>
          <a href="https://www.linkedin.com/in/chiamaka-m-ugwu/?lipi=urn%3Ali%3Apage%3Ad_flagship3_notifications%3BhG4uRD8eSLGx7F8g3SC0Gg%3D%3D">
            <FontAwesomeIcon icon={faLinkedin} className="ic" beatFade />
          </a>
          <a href="https://www.instagram.com/chi.amaka.__/">
            <FontAwesomeIcon icon={faInstagram} className="ic" beatFade />
          </a>
        </div>
        <button id="button">
        <FontAwesomeIcon icon={faArrowUp} className="ic" beatFade />
        </button>

        <div class="credits">
          <p>
            Coded by{" "}
            <a href="https://github.com/chiamaka-ugwu">Chiamaka Ugwu</a> | ©
            2022 Copyright
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
