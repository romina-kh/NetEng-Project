import React from "react";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
import product5 from "../../assets/product5.png";
import product6 from "../../assets/product6.png";
import "../../styles/homePage/product.css"

export default function Products() {
  return (
    <section className="products-section">
      <h2 className="products-title">محصولات منتخب</h2>

      <div className="products-grid">
        <div className="product-card">
          <img src={product1} alt="product" />
          <h3>هدست بلوتوثی انکر مدل Soundcore Q11i</h3>
          <p>فاقد قابلیت نویز کنسلینگ</p>
          <span>۳,۱۵۰,۰۰۰ تومان</span>
        </div>

        <div className="product-card">
          <img src={product2} alt="product" />
          <h3>ساعت هوشمند نسل جدید</h3>
          <p>پایش سلامتی، باتری قدرتمند و سازگار با اندروید و iOS</p>
          <span>۳,۱۵۰,۰۰۰ تومان</span>
        </div>

        <div className="product-card">
          <img src={product3} alt="product" />
          <h3>اسپیکر بلوتوث قابل حمل</h3>
          <p>صدای شفاف، سبک و مناسب سفر و فضای باز</p>
          <span>۳,۱۵۰,۰۰۰ تومان</span>
        </div>

        <div className="product-card">
          <img src={product4} alt="product" />
          <h3>هدست بلوتوثی داوو مدل GALAXY</h3>
          <p>نمایشگر lcd، بیس قدرتمند و واضح</p>
          <span>۲,۹۳۰,۰۰۰ تومان</span>
        </div>

        <div className="product-card">
          <img src={product5} alt="product" />
          <h3>پاوربانک شیاومی مدل Redmi</h3>
          <p>ظرفیت ۲۰۰۰۰ میلی آمپر ساعت، مقاوم در برابر خط و خش</p>
          <span>۱,۳۸۰,۰۰۰ تومان</span>
        </div>

        <div className="product-card">
          <img src={product6} alt="product" />
          <h3>هاب 4 پورت USB-C مدل SUPER FAST</h3>
          <p>فراهم کردن ۴ پورت type-c</p>
          <span>۲۳۴,۰۰۰ تومان</span>
        </div>

      </div>
      
    </section>
  );
}
