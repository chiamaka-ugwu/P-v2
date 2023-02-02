import React, { useState, useEffect } from "react";
import "./testimonial.css";
import data from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft, faScroll, faFileLines } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

  // useEffect(() => {
  //   const lastIndex = people.length - 1
  //   if (index < 0) {
  //     setIndex(lastIndex)
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0)
  //   }
  // }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title heading">
        <FontAwesomeIcon icon={faFileLines} className="h1 icon" beat />
        <h2>Testimonials</h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <div className="img-cont">
                <img src={image} alt={name} className="person-img" />
              </div>
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="quote">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={prevSlide}>
          <FontAwesomeIcon icon={faAngleLeft} className="icon1" beatFade />
        </button>
        <button className="next" onClick={nextSlide}>
          <FontAwesomeIcon icon={faAngleRight} className="icon1" beatFade />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
