import React from "react";
import "../../styles/homePage/navbar.css"

function NavBar(){
    return (

        <div className="navbar">
            <div className="nav">
                <div className="left-nav">
                    <a href=""><h3>محصولات/خدمات</h3></a>
                    <a href=""><h3>درباره ما</h3></a>
                    <a href=""><h3>تماس با ما</h3></a>
                </div>
                <div className="right-nav">
                    <h3>ElectroShop</h3>
                    <input className="search-bar" type="text" />
                </div>
            </div>
        </div>
    );
}

export default NavBar;