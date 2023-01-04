import React from "react";
import "./testimonial.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import webdev from "../../assets/images/dynasty.png";

const Testimonial = () => {
  return (
    <div className="slider">
      {/* <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            marginLeft: 20,
            marginTop: "10",
            color: "transparent",
            cursor: "pointer",
            width: "15px",
            height: "15px",
            borderRadius: "100%",
            padding: "6px",
            fontSize: "1px",
          };
          const style = isSelected
            ? { ...defStyle, backgroundColor: "#559F94" }
            : { ...defStyle, backgroundColor: "#C4C4C4" };
          return (
            <span
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >
              {index}
            </span>
          );
        }}
      >
        <div>
          <img className='img' src={webdev} alt="image1" />
        </div>
        <div>
          <img className='img' src={webdev} alt="image2" />
        </div>
        <div>
          <img className='img' src={webdev} alt="image3" />
        </div>
      </Carousel> */}

      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            marginLeft: 20,
            marginTop: "10",
            color: "transparent",
            cursor: "pointer",
            width: "15px",
            height: "15px",
            borderRadius: "100%",
            padding: "6px",
            fontSize: "1px",
          };
          const style = isSelected
            ? { ...defStyle, backgroundColor: "#559F94" }
            : { ...defStyle, backgroundColor: "#C4C4C4" };
          return (
            <span
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >
              {index}
            </span>
          );
        }}
      >
        <div>
          <img src={webdev} />
        </div>
        <div>
          <img src={webdev} />
        </div>
        <div>
          <img src={webdev} />
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonial;
