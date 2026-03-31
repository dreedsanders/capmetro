import React from "react";
import image from "../images/Untitled_Artwork.jpg";

function Welcome() {
  return (
    <div className="welcome">
      <div className="left" id="welcomeleft">
        <div>
          <h3>Welcome to Cap Metro Fan Club</h3>
        </div>
        <div>
          <img
            className="welcome-logo"
            src={image}
            alt="Cap Metro Fan Club logo"
          />
        </div>
        <div id="welcomemsg">
          <p>Hop on any one of Cap Metro services and join us for a ride!</p>
          <p>
            Cap Metro is the greatest but could be better. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div>
          <button type="button" className="btn-primary">
            Join a Ride!
          </button>
        </div>
      </div>
      <div className="left" id="welcomeimg">
        <div>
          <img
            className="welcome-illustration"
            src="https://image.shutterstock.com/image-vector/transport-icons-600w-183026684.jpg"
            alt="Public transit and transportation icons"
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
