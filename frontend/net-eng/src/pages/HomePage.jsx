import React from "react";
import Footer from "../components/homePage/footer";
import NavBar from "../components/homePage/Navbar";
import Collaborate from "../components/homePage/Collaborate"
import Comments from "../components/homePage/Comments";
import Slider from "../components/homePage/slider"

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Slider />
      <div className="page-container">
        <div className="content-wrap">
        <Collaborate />
        <Comments />
        </div>

        <Footer />
      </div>
    </>
  );
}
