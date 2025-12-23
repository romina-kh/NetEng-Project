import React, { useState } from "react";
import "../../styles/homePage/navbar.css";

function NavBar() {
  // State to manage the open/close status of the menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="nav">
        {/* Hamburger Menu Icon (Visible only on mobile) */}
        <div className="hamburger" onClick={toggleMenu}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#EEEEEE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Links Container: Added logic to toggle 'active' class */}
        <div className={`left-nav ${isOpen ? "active" : ""}`}>
          <a href="/login">
            <h3>ورود / ثبت نام</h3>
          </a>
          <a href="">
            <h3>محصولات / خدمات</h3>
          </a>
          <a href="">
            <h3>درباره ما</h3>
          </a>
          <a href="">
            <h3>تماس با ما</h3>
          </a>
        </div>

        <div className="right-nav">
          {/* Search Bar */}
          <form className="form">
            <button type="submit">
              <svg
                width="17"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="search"
              >
                <path
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                  stroke="currentColor"
                  strokeWidth="1.333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <input
              className="input"
              type="text"
              placeholder="جستجو..."
              required
            />
            <button className="reset" type="reset">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </form>
          <h3>TechYar</h3>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
