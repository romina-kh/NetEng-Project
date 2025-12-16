import React from "react";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import "../../styles/homePage/product.css"

export default function Products() {
  return (
    <section className="products-section">
      <h2 className="products-title">محصولات منتخب</h2>

      <div className="products-grid">
        <div className="product-card">
          <img src={product1} alt="product" />
          <h3>هدفون بی‌سیم حرفه‌ای</h3>
          <p>کیفیت صدای عالی، طراحی مدرن و مناسب استفاده روزمره</p>
        </div>

        <div className="product-card">
          <img src={product2} alt="product" />
          <h3>ساعت هوشمند نسل جدید</h3>
          <p>پایش سلامتی، باتری قدرتمند و سازگار با اندروید و iOS</p>
        </div>

        <div className="product-card">
          <img src={product3} alt="product" />
          <h3>اسپیکر بلوتوث قابل حمل</h3>
          <p>صدای شفاف، سبک و مناسب سفر و فضای باز</p>
        </div>
      </div>
    </section>
  );
}
