import React from "react";
import "../../styles/homePage/footer.css";

export default function Footer() {
  return (
    <footer id="contact" className="footer">

      <div className="footer-grid">

        {/* Left Column */}
        <div className="footer-col">
          <h2>عضویت در خبرنامه</h2>

          {/* باکس ورود آدرس ایمیل و دکمه ثبت */}
          <div className="newsletter-box">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید..."
              className="newsletter-input"
            />
            <button className="newsletter-btn">ثبت</button>
          </div>

          <p className="footer-text">متنی در رابطه با عضویت در خبرنامه سایت</p>
        </div>

        {/* Mid Column */}
        <div className="footer-col">
          <h2>راه های ارتباطی</h2>

          <strong>آدرس:</strong>
          <p>شهر ... خیابان ... کوچه ... ساختمان ...</p>

          <strong>
            شماره موبایل: <a href="tel:09123456789">09123456789</a>
          </strong>
          <br />
          <strong>
            شماره تلفن: <a href="tel:123456789">123-456-789</a>
          </strong>

          <ul className="footer-links">
            <li>
              ایمیل:{" "}
              <a href="mailto:email@gmail.com">
                email@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="footer-col">
          <h2>نام و لوگو شرکت</h2>
          <p>
            توضیحات ... <br />
          </p>

          {/* pics of social media */}
          <div className="social-box">
            {/* icons photo */}
            <strong>// عکس لوگو شبکه های اجتماعی</strong>
          </div>
        </div>

      </div>

      <div className="footer-divider"></div>

      <p className="footer-copy">© 2025 My Website. All rights reserved..</p>
    </footer>
  );
}
