import React from "react";
import "../../styles/homePage/footer.css";
import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.png";
import linkdin from "../../assets/linkedin.png";
import x from "../../assets/x.png";
import telegram from "../../assets/telegram.png";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-grid">

        {/* right Column */}
        <div className="footer-col">
          <img src={logo} alt="logo" className="footer-logo" />

          <p className="footer-text">
            تک‌یار همراه مطمئن شما در خرید لوازم الکترونیکی و تجهیزات تکنولوژی.
            <br />ما با ارائه محصولات اورجینال، قیمت مناسب و پشتیبانی واقعی،
            تجربه خریدی هوشمندانه را برایتان می‌سازیم.
          </p>

          <div className="social-box">
            <img src={instagram} alt="instagram" className="footer-icon" />
            <img src={telegram} alt="telegram" className="footer-icon" />
            <img src={x} alt="x" className="footer-icon" />
            <img src={linkdin} alt="linkdin" className="footer-icon" />
          </div>
        </div>


        {/* Mid Column */}
        <div className="footer-col">
          <h2>راه‌های ارتباطی</h2>

          <strong>آدرس:</strong>
          <p className="footer-text">
            تهران، خیابان شریعتی، کوچه ۱۲، ساختمان تک‌یار، طبقه ۳
          </p>

          <strong>
            شماره موبایل: <a href="tel:09123456789">09123456789</a>
          </strong>
          <br />

          <strong>
            شماره تلفن: <a href="tel:02112345678">021-12345678</a>
          </strong>

          <ul className="footer-links">
            <li>
              ایمیل:{" "}
              <a href="mailto:techyar.shop@gmail.com">
                techyar.shop@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* left Column */}
  
        <div className="footer-col">
          <h2>عضویت در خبرنامه</h2>

          <div className="newsletter-box">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید..."
              className="newsletter-input"
            />
            <button className="newsletter-btn">ثبت</button>
          </div>

          <p className="footer-text">
            با عضویت در خبرنامه تک‌یار، جدیدترین محصولات، تخفیف‌های ویژه و پیشنهادهای تکنولوژی را زودتر از همه دریافت کنید.
          </p>
        </div>

      </div>

      <p className="footer-copy">© 2025 TechYar. All rights reserved.</p>
    </footer>
  );
}
