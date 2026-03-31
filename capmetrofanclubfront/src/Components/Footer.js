import React from "react";
import image from "../images/877882.png";
import imag from "../images/1049852.png";
import ima from "../images/facebook-logo-images-details-8.png";
import im from "../images/768px-Twitter_Logo_Mini.svg.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <a href="https://www.google.com/" rel="noopener noreferrer">
          <img src={image} width={44} height={44} alt="Social link" />
        </a>
        <a href="https://www.google.com/" rel="noopener noreferrer">
          <img src={imag} width={44} height={44} alt="Social link" />
        </a>
        <a href="https://www.google.com/" rel="noopener noreferrer">
          <img src={ima} width={44} height={44} alt="Facebook" />
        </a>
        <a href="https://www.google.com/" rel="noopener noreferrer">
          <img src={im} width={44} height={44} alt="Twitter" />
        </a>
      </div>
      <div className="footer-actions">
        <button type="button" className="btn-primary">
          Contact
        </button>
        <button type="button" className="btn-primary">
          Join Newsletter
        </button>
      </div>
    </div>
  );
};

export default Footer;
