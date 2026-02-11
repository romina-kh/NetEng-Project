import React, { useState } from "react";
import styles from "../styles/profilePages/userprofile.module.css"

export default function Profile() {

  const themes = {
    blue: "#1d1785",
    green: "#167a4d",
    purple: "#79067b",
    red: "#C3110C",
    orange: "#EF6C00",
    pink:   "#F57799",
    yellow: "#FAB95B",
    lightblue: "#9CC6DB",
    GraniteGray: "#635666",
    Black:"#25343F"

  };

  const [theme, setTheme] = useState("blue");
  const [isEditing, setIsEditing] = useState(false);

  const [user] = useState({
    name: "عباس قادری",
    email: "abbas.ghaderi@gmail.com",
    phone: "09123456789",
    address: "تهران - شریعتی - پلاک ۲",
    company: "تک‌یار",
    avatar: "https://i.pravatar.cc/150?img=3"
  });

    const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
  <div className={styles.container}>

    {/* shop */}
    <div className={styles.shopContainer}>
      <h3>داشبورد</h3>

      <div className={styles.shopRow}>
        <div className={styles.shopBox}>
          <span>📦</span>
          <div>
            <h4>سفارش‌های من</h4>
            <p>مشاهده و پیگیری سفارش‌ها</p>
          </div>
        </div>

        <div className={styles.shopBox}>
          <span>🛒</span>
          <div>
            <h4>سبد خرید</h4>
            <p>کالاهای انتخاب شده</p>
          </div>
        </div>
      </div>

      <div className={styles.shopRow}>
        <div className={styles.shopBox}>
          <span>❤️</span>
          <div>
            <h4>علاقه‌مندی‌ها</h4>
            <p>لیست محصولات ذخیره شده</p>
          </div>
        </div>

        <div className={styles.shopBox}>
          <span>💳</span>
          <div>
            <h4>کیف پول</h4>
            <p>مدیریت موجودی حساب</p>
          </div>
        </div>
      </div>
    </div>

    {/* profile card */}
    <div className={styles.card}>

      {/* img */}
      <div className={styles.avatarSection}>
        <img 
          src={user.avatar}
          alt="profile"
          style={{ borderColor: themes[theme] }}
        />
        {isEditing && (
          <button className={styles.changePhoto}>تغییر عکس</button>
        )}
      </div>

      {/* info */}
      <div className={styles.infoSection}>
        {isEditing ? (
          <>
            <input name="name" value={user.name} onChange={handleChange} />
            <input name="email" value={user.email} onChange={handleChange} />
            <input name="phone" value={user.phone} onChange={handleChange} />
            <input name="address" value={user.address} onChange={handleChange} />
            <input name="company" value={user.company} onChange={handleChange} />
          </>
        ) : (
          <>
            <h2>{user.name}</h2>
            <p>{user.email} ✉︎ </p>
            <p>{user.phone} 🕻</p>
            <p> 📍 {user.address}</p>
            <p> 🌐 {user.company}</p>
          </>
        )}
      </div>

      {/* buttons */}
      <div className={styles.actions}>
        {isEditing ? (
          <>
            <button
              className={styles.saveBtn}
              style={{ background: themes[theme] }}
              onClick={() => setIsEditing(false)}
            >
              ذخیره تغییرات
            </button>
            <button
              className={styles.cancelBtn}
              style={{ background: themes[theme] }}
              onClick={() => setIsEditing(false)}
            >
              انصراف
            </button>
          </>
        ) : (
          <button 
            className={styles.editBtn}
            style={{ background: themes[theme] }}
            onClick={() => setIsEditing(true)}
          >
            ویرایش پروفایل
          </button>
        )}
      </div>

      {/* setting */}
      <div className={styles.settings}>
        <h3>تنظیمات حساب</h3>
        <button>تغییر رمز عبور</button>
        <button>مدیریت اعلان‌ها</button>
        <button className={styles.logout}>خروج از حساب</button>
      </div>

      {/* theme */}
      <div className={styles.themeSelector}>
        <p>انتخاب تم:</p>
        {Object.keys(themes).map((key) => (
          <span
            key={key}
            className={styles.colorCircle}
            style={{ background: themes[key] }}
            onClick={() => setTheme(key)}
          />
        ))}
      </div>

    </div>

    
  </div>
);

}