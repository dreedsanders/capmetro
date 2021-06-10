import React, { useState } from "react";

function Header() {
  return (
    <div className="header">
      <div>
        <h2>Cap Metro Fan Club</h2>
      </div>
      <div className="navbar">
        <div>
          <li> Info </li>
        </div>
        <br></br>
        <div>
          <li> Join </li>
        </div>
        <br></br>
        <div>
          <li> News </li>
        </div>
        <br></br>
        <div>
          <li> Maps </li>
        </div>
        <br></br>
        <div>
          <li> Merch </li>
        </div>
        <br></br>
        <div>
          <li> Press </li>
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default Header;
