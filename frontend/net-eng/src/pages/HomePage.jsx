import React from "react";
import Footer from "../components/homePage/footer";
import NavBar from "../components/homePage/navbar";
import Collaborate from "../components/homePage/Collaborate"
import Comments from "../components/homePage/Comments";
import Slider from "../components/homePage/slider"
import TeamSection from "../components/homePage/TeamSection";


export default function HomePage() {
  return (
    <>
      <NavBar />
      <Slider />
      <div className="page-container">
        <div className="content-wrap">
        <TeamSection />
        <Comments />
        </div>
        <Collaborate />

        <Footer />
      </div>
    </>
  );
}
