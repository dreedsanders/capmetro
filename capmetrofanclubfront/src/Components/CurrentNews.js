import React from "react";
import image from "../images/metro.jpeg";
import image2 from "../images/metro_rail.jpeg";

function CurrentNews() {
  return (
    <section className="current" aria-label="Current news">
      <div className="latelyleft">
        <a
          href="https://www.kvue.com/article/news/local/austin-transportation-department-testing-delivery-bots-on-south-congress/269-f93707d6-a746-425a-98ff-2c41ce796905"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={image} alt="Cap Metro bus in Austin" />
          <h3>KVUE</h3>
          <h5>ATD testing delivery bots</h5>
        </a>
      </div>
      <div className="latelyleft">
        <a
          href="https://www.kxan.com/weather-traffic-qas/preventing-speeding-in-austin-how-the-city-is-taking-steps/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={image2} alt="Austin traffic and streets" />
          <h3>KXAN</h3>
          <h5>Combatting speeding: how the city is taking steps</h5>
        </a>
      </div>
    </section>
  );
}

export default CurrentNews;
