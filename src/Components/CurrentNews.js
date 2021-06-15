import React from "react";
import image from "../images/metro.jpeg";
import image2 from "../images/metro_rail.jpeg";

function CurrentNews() {
  return (
    <div className="current">
      <h1 style={{ textAlign: "center" }}>Lately...</h1>
      <div classname="lately">
        <div className="side">
          <h1>news</h1>
          <img src={image} style={{ width: "100px", height: "100px" }}></img>
        </div>
              <div className="side">
          <h1>Stories</h1>
          <img src={image2} style={{ width: "100px", height: "100px" }}></img>
        </div>
      </div>
    </div>
  );
}

export default CurrentNews;
