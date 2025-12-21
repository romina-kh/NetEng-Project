import React from "react";
import Footer from "../components/homePage/footer";
import NavBar from "../components/homePage/navbar";
import Collaborate from "../components/homePage/Collaborate"
import Comments from "../components/homePage/Comments";
import Slider from "../components/homePage/slider"
import CompanyIntro from "../components/homePage/CompanyIntro";
import TeamSection from "../components/homePage/TeamSection";
import Products from "../components/homePage/product"


export default function HomePage() {
  return (
    <>
      <NavBar />
      <Slider />
      <Products />
        <CompanyIntro />
        <TeamSection />
        <Comments />
        <Collaborate />

        <Footer />
    </>
  );
}
