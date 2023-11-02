import React from "react";
import bro from "../assets/Webinar-bro.png";
import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";

export const Curious = ({ width }) => {
  return (
    <>
      <a href="https://storyset.com/illustration/curiosity-search/rafiki#222831FF&hide=&hide=simple" target="_blank" rel="noreferrer">
        <img width={width == null ? 300 : width} height={width == null ? 300 : width} src={bro} alt="Webinar-bro.png" />
      </a>
    </>
  );
};

export const ExampleComponent = ({ width }) => {
  return (
    <>
      <img className="full-width" src={image2} alt="img1.png" />
    </>
  );
};
export const ExampleCodeandMarkup = () => {
  return (
    <>
      <img className="full-width" src={image1} alt="image2.png" />
    </>
  );
};
export const Examplewherever = () => {
  return (
    <>
      <img className="full-width" src={image3} alt="image3.png" />
    </>
  );
};
