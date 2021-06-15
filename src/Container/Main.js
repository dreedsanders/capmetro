import React from "react";
import Tag from "../Components/Tag";
import Header from "../Components/Header";
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

const Main = () => {
  return (
    <div className="main">
        <Tag />
      <div className="top">
        <Header />
        <MainNavBar />
      </div>
      <MetroImg1 />
      <Parallax />
      <Welcome />
      <OurStory />
      <Parallax2 />
      <Parallax3 />
      <CurrentNews />
      <div className="bottom">
        <Footer />
      </div>
        <Footer2 />
    </div>
  );
};

export default Main;
