import React from "react";
import Footer from "../components/homePage/footer";

export default function HomePage() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        {/* contents */}
        <h1 style={{textAlign:"center", marginTop:"50px"}}>This is Home Page</h1>
      </div>

      <Footer />
    </div>
  );
}
