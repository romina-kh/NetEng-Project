import React from "react";
import "../../styles/homePage/CompanyIntro.css";

import introImage from "../../assets/company/intro.png";
import techno from "../../assets/company/technolife.png";
import reactLogo from "../../assets/company/react.png";
import goLogo from "../../assets/company/golang.png";
import tire from "../../assets/company/simpletire.png";
import digikala from "../../assets/company/digikala.png";
import amazonLogo from "../../assets/company/amazon.png"

const CompanyIntro = () => {
  return (
    <section className="company-intro">
      <div className="company-container">
        {/* متن معرفی */}
        <div className="company-text">
          <h2>درباره شرکت ما</h2>

          <p className="company-description">
             شرکت ما با تمرکز بر جلب رضایت مشتری ، سعی می کند محصولات با کیفیت بالا و قیمت مناسب را ارائه دهد. بهترین محصولات را با ارزان ترین قیمت از ما بخواهید.
          </p>

          <p className="company-history">
            <strong>تاریخچه کوتاه:</strong>  
            این مجموعه از سال ۱۴۰۲ فعالیت خود را در حوزه تولید و فروش محصولات با کیفیت
             آغاز کرد و اکنون با بیش از 200 شعبه در سراسر دنیا، آماده خدمت رسانی به شماست.
          </p>

          {/* لوگو تکنولوژی‌ها */}
          <div className="tech-logos">
            <img src={amazonLogo} alt="amazon" />
            <img src={tire} alt="tire"/>
            <img src={digikala} alt="tire"/>
            <img src={techno} alt="techno"/>
            <img src={reactLogo} alt="Node.js" />
            <img src={goLogo} alt="Docker" />
            
          </div>
        </div>

        {/* تصویر / اینفوگرافی */}
        <div className="company-image">
          <img src={introImage} alt="Company Infographic" />
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
