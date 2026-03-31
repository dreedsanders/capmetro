import React from "react";
import image from "../images/play.jpg";
import alternative from "../images/alternative-transportation.jpg";

function Empower() {
  return (
    <section className="empower" aria-labelledby="empower-heading">
      <div className="empowertop">
        <h1 id="empower-heading">
          Cap Metro Fan Club Empowers People to Find Other Ways
        </h1>
        <button type="button" className="btn-primary empower-play-btn">
          <img
            className="empower-play-icon"
            src={image}
            alt=""
            aria-hidden="true"
          />
          Hear why we promote alternative modes of transportation
        </button>
        <img
          className="empower-hero-img"
          src={alternative}
          alt="Cyclists and alternative transportation in the city"
        />
      </div>
      <div className="empowerbottom">
        <div>
          <h2>27%</h2>
          <a
            href="https://time.com/4748377/commute-biking-walking-longevity/"
            rel="noopener noreferrer"
          >
            Amount walking commuters lower risk of heart attacks and other
            heart-related illnesses.
          </a>
        </div>
        <div>
          <h2>46%</h2>
          <a
            href="https://www.bikeradar.com/news/commuting-by-bike-can-cut-cancer-risk-by-half/"
            rel="noopener noreferrer"
          >
            Amount biking commuters reduce incidence of cancer.
          </a>
        </div>
        <div>
          <h2>95%</h2>
          <a
            href="http://www.acogok.org/why-transit-matters-environment/"
            rel="noopener noreferrer"
          >
            Single-occupancy vehicles produce this much more carbon dioxide than
            public transportation.
          </a>
        </div>
      </div>
    </section>
  );
}

export default Empower;
