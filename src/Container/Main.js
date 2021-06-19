import React from "react";
import Tag from "../Components/Tag";
import MetroImg1 from "../Components/MetroImg1";
import Footer from "../Components/Footer";
import MainNavBar from "../Components/MainNavBar";
import Welcome from "../Components/Welcome";
import OurStory from "../Components/OurStory";
import CurrentNews from "../Components/CurrentNews";
import Parallax from "../Components/Parallax";
import Parallax2 from "../Components/Parallax2";
import Footer2 from "../Components/Footer2";
import Parallax3 from "../Components/Parallax3";
import Empower from "../Components/Empower";
import YoutubeEmbed from "../Components/YoutubeEmbed"
import Empower2 from "../Components/Empower2";
const Main = () => {
  return (
    <div className="main">
      <Tag />
      <div className="top">
        <MainNavBar />
      </div>
      <MetroImg1 />
      <Welcome />
      <Parallax2 />
      <OurStory />
      <Parallax />
      <Empower />
      {/* <Empower2 /> */}
      {/* <YoutubeEmbed embedId="KTT7i3SKpMQ" /> */}
      <CurrentNews />
      <div className="bottom">
        <Footer />
      </div>
      <Footer2 />
    </div>
  );
};

export default Main;
