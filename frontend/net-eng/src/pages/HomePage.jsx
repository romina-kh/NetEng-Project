import React from "react";
import Footer from "../components/homePage/footer";
import NavBar from "../components/homePage/Navbar";
import Collaborate from "../components/homePage/Collaborate"
import Comments from "../components/homePage/Comments";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="page-container">
        <div className="content-wrap">
          {/* contents */}
          <h1 style={{ textAlign: "center", marginTop: "50px" }}>
            This is Home Page
          </h1>
        <Collaborate />
        <Comments />
        </div>

        <Footer />
      </div>
    </>
  );
}
