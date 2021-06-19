import React from "react";
import image from "../images/Untitled_Artwork.jpg";
import projectimage from "../images/projects.jpg"
import commute from "../images/commuting.jpg"

function OurStory() {
  return (
    <div className="ourstory">
      <div id="ourstoryleft">
        <img src={projectimage}></img>
        <br></br>
        <button id="btnstyle">See whats going on in your area.</button>
      </div>
      <div id="ourstorycenter">
        <div id="storyhdr">
          <h2>The Cap Metro Fan Club Idea...</h2>
        </div>
        <br></br>
        <div className="atxlogos">
          <div>
            <img src={image} style={{ width: "100px", height: "100px" }} />
          </div>
          <div>
            <img src={image} style={{ width: "100px", height: "100px" }} />
          </div>
        </div>
        <br></br>
        <div id="ourstorymsg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br></br>
          <div>
            <button id="btnstyle">Become a Member</button>
          </div>
        </div>
      </div>
      <div id="ourstoryright">
        <img src={commute}></img>
        <br></br>
        <button id="btnstyle">Commuting. Why it matters. How it helps.</button>
      </div>
    </div>
  );
}

export default OurStory;
