import React from "react";
import image from "../images/play.jpg";

function Empower2() {
  return (
    <div className="empower">
          <div className="empowertop2">
              <div>
          <h1>10x</h1>
          <a href="https://time.com/4748377/commute-biking-walking-longevity/">
            {" "}
            How much safer per mile public transportation is than traveling by car. 
          </a>
        </div>
        <div>
          <h1>95%</h1>
          <a href="https://www.bikeradar.com/news/commuting-by-bike-can-cut-cancer-risk-by-half/">
            Pedestrian deaths contributed to passenger vehicles.{" "}
          </a>
        </div>
        <div>
          <h1>95%</h1>
          <a href="http://www.acogok.org/why-transit-matters-environment/">
            Single Occupancy vehicles produce this much more carbon dioxide than
            public transportation
          </a>
        </div>
      </div>
      <div className="empowerbottom2">
        <div>
          <h1>The Aim to Reduce Traffic Related Accidents </h1>
          <button id="btnstyle">
            {" "}
            <img src={image} style={{ width: "30px", height: "30px" }}></img>
            Hear How Public Transportation Combats Traffic Accidents
          </button>
        </div>
      </div>
    </div>
  );
}

export default Empower2;
