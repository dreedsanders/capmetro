import React from "react";
import image from "../images/Untitled_Artwork.jpg";
import projectimage from "../images/projects.jpg"
import commute from "../images/commuting.jpg"

function OurStory() {
  return (
    <div className="ourstory">
      <div id="ourstoryleft">
        <img src={projectimage} alt="Local transit projects" />
        <button type="button" className="btn-primary">
          See what&apos;s going on in your area
        </button>
      </div>
      <div id="ourstorycenter">
        <div id="storyhdr">
          <h2>The Cap Metro Fan Club Idea...</h2>
        </div>
        <div className="atxlogos">
          <img src={image} width={100} height={100} alt="" />
          <img src={image} width={100} height={100} alt="" />
        </div>
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
          <div>
            <button type="button" className="btn-primary">
              Become a Member
            </button>
          </div>
        </div>
      </div>
      <div id="ourstoryright">
        <img src={commute} alt="Commuters on public transit" />
        <button type="button" className="btn-primary">
          Commuting: why it matters, how it helps
        </button>
      </div>
    </div>
  );
}

export default OurStory;
