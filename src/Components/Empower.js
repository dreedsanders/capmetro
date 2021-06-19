import React from "react";
import image from "../images/play.jpg";


function Empower() {
  return (
    <div className="empower">
      <div className="empowertop">
        <div>
          <h1>Cap Metro Fan Club Empowers People to Find Other Ways </h1>
          <button id="btnstyle">
            {" "}
            <img src={image} style={{ width: "30px", height: "30px" }}></img>
            Hear Why We Promote Alternative Modes of Transportation
          </button>
        </div>
        <br></br>
        <div>
          {/* <img src={image} style={{ width: "300px", height: "300px" }}></img> */}
        </div>
      </div>
      <div className="empowerbottom">
        <div>
          <h2>27%</h2>
          <a href="https://time.com/4748377/commute-biking-walking-longevity/">
            {" "}
            Amount walking commuters lower risk of heart attacks and other heart
            related illnesses.
          </a>
        </div>
        <div>
          <h2>46%</h2>
          <a href="https://www.bikeradar.com/news/commuting-by-bike-can-cut-cancer-risk-by-half/">
            Amount biking commuters reduce incidence of cancer.{" "}
          </a>
        </div>
        <div>
          <h2>95%</h2>
          <a href="http://www.acogok.org/why-transit-matters-environment/">
            Single Occupancy vehicles produce this much more carbon dioxide than
            public transportation
          </a>
        </div>
      </div>
    </div>
  );
}

export default Empower;
