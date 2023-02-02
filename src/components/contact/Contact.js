import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="about co" id="contact">
        <div className="heading">
          <FontAwesomeIcon icon={faPaperPlane} className="h1 icon" bounce />
          <h1 className="h1">Contact Me</h1>
          <h2 className="h2">Need a custom website/ frontend tutor? Get in touch</h2>
        </div>
        <div class="contact">
          <div class="box" data-aos="fade-up" data-aos-duration="800">
            <div class="icon">
            <FontAwesomeIcon icon={faPhone} className="i" beatFade />
            </div>
            <a href="tel:+2347066087325">(+234) 706-608-7325</a>
          </div>
          <div class="box" data-aos="fade-up" data-aos-duration="800">
            <div class="icon">
            <FontAwesomeIcon icon={faEnvelope} className="i" beatFade />
            </div>
            <a className="email" href="mailto:chiamakaugwu.m@gmail.com">
              chiamakaugwu.m@gmail.com
            </a>
          </div>
          <form
            method="POST"
            name="contactForm"
            data-netlify="true"
          >
            <input type="text" name="fullname" placeholder="Full Name" />
            <input type="email" name="email" placeholder="Email Address" />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
