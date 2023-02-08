import React from "react";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Projects from "../components/projects/Projects";
import Testimonial from "../components/testimonial/Testimonial";

const HomePage = () => {
  window.scroll(0,0);
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
