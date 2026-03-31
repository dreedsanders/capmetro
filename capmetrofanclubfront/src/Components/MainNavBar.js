import React from "react";
import { useHistory } from "react-router-dom";

const MainNavBar = () => {
  const history = useHistory();

  const handleMaps = () => {
    history.push("/maps");
  };
  return (
    <div className="navbar">
      <div className="header">
        <h2 className="hd">Cap Metro Fan Club</h2>
      </div>
      <nav className="pages" aria-label="Primary">
        <button type="button">About</button>
        <button type="button">Join</button>
        <button type="button">News</button>
        <button type="button" onClick={handleMaps}>
          Maps
        </button>
        <button type="button">Our Friends</button>
        <button type="button">The Reason Why</button>
        <button type="button">Press</button>
        <button type="button" className="btn-primary">
          Sign In
        </button>
      </nav>
    </div>
  );
};

export default MainNavBar;
