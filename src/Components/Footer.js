import React from "react";
import image from "../images/877882.png";
import imag from "../images/1049852.png";
import ima from "../images/facebook-logo-images-details-8.png";
import im from "../images/768px-Twitter_Logo_Mini.svg.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <div>
          <a href="www.google.com">
            <img src={image} style={{ width: "45px", height: "45px" }}></img>
          </a>
        </div>
        <br></br>
        <span></span>
        <br></br>
        <div>
          <a href="www.google.com">
            <img src={imag} style={{ width: "45px", height: "45px" }}></img>
          </a>
        </div>
        <br></br>
        <span></span>
        <br></br>
        <div>
          <a href="www.google.com">
            <img src={ima} style={{ width: "45px", height: "45px" }}></img>
          </a>
        </div>
        <br></br>
        <span></span>
        <br></br>
        <div>
          <a href="www.google.com">
            <img src={im} style={{ width: "45px", height: "45px" }}></img>
          </a>
        </div>
        <br></br>
        <span></span>
        <br></br>
      </div>
      <div>
        <button>Contact</button>
      </div>
      <div>
        <button>Join Newsletter</button>
      </div>
    </div>
  );
};

export default Footer;
