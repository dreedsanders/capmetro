import React from "react";
import image from "../images/Untitled_Artwork.jpg";
const MainNavBar = () => {
  return (
    <div className="navbar">
      <div className="header">
        <h2 className="hd">Cap Metro Fan Club</h2>
      </div>
      <div className="pages">
        <button> About </button>
        <br></br>
        <button> Join </button>
        <br></br>
        <button> News </button>
        <br></br>
        <button> Maps </button>
        <br></br>
        <button> Our Friends </button>
        <br></br>
        <button> Merch </button>
        <br></br>
        <button> Press </button>
        <br></br>
          <button id="btnstyle">Sign In</button>
      </div>
    </div>
  );
};

export default MainNavBar;
