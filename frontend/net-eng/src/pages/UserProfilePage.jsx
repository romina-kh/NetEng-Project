import React, { useState } from "react";
import styles from "../styles/profilePages/userprofile.module.css";

export default function Profile() {

  const themes = {
    blue: "#1d1785",
    green: "#167a4d",
    purple: "#79067b",
    red: "#C3110C",
    orange: "#EF6C00",
    pink: "#F57799",
    yellow: "#FAB95B",
    lightblue: "#9CC6DB",
    GraniteGray: "#635666",
    Black: "#25343F"
  };

  const [theme, setTheme] = useState("blue");
  const [isEditing, setIsEditing] = useState(false);

  const [showPasswordBox, setShowPasswordBox] = useState(false);
  const [showNotificationBox, setShowNotificationBox] = useState(false);

  const [passwordData, setPasswordData] = useState({
    oldPass: "",
    newPass: "",
    confirmPass: ""
  });

  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    discounts: true,
    newsletter: false
  });

  const [user, setUser] = useState({
    name: "عباس قادری",
    email: "abbas.ghaderi@gmail.com",
    phone: "09123456789",
    address: "تهران - شریعتی - پلاک ۲",
    company: "تک‌یار",
    avatar: "https://i.pravatar.cc/150?img=7"
  });

  const [tempUser, setTempUser] = useState(user);

  const handleChange = (e) => {
    setTempUser({ ...tempUser, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleSavePassword = () => {
    if (
      !passwordData.oldPass ||
      !passwordData.newPass ||
      passwordData.newPass !== passwordData.confirmPass
    ) {
      alert("اطلاعات رمز عبور صحیح نیست");
      return;
    }

    alert("رمز عبور با موفقیت تغییر کرد");
    setPasswordData({ oldPass: "", newPass: "", confirmPass: "" });
    setShowPasswordBox(false);
  };

  const handleLogout = () => {
    alert("خروج از حساب انجام شد");
  };

  return (
    <div className={styles.usercontainer}>

      {/* profile card */}
      <div className={styles.usercard}>

        {/* img */}
        <div className={styles.useravatar}>
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
              <input name="name" value={tempUser.name} onChange={handleChange} />
              <input name="email" value={tempUser.email} onChange={handleChange} />
              <input name="phone" value={tempUser.phone} onChange={handleChange} />
              <input name="address" value={tempUser.address} onChange={handleChange} />
              <input name="company" value={tempUser.company} onChange={handleChange} />
            </>
          ) : (
            <>
              <h2>{user.name}</h2>
              <p>{user.email} ✉︎</p>
              <p>{user.phone} 🕻</p>
              <p>📍 {user.address}</p>
              <p>🌐 {user.company}</p>
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
                onClick={() => {
                  setUser(tempUser);
                  setIsEditing(false);
                }}
              >
                ذخیره تغییرات
              </button>

              <button
                className={styles.cancelBtn}
                style={{ background: themes[theme] }}
                onClick={() => {
                  setTempUser(user);
                  setIsEditing(false);
                }}
              >
                انصراف
              </button>
            </>
          ) : (
            <button
              className={styles.editBtn}
              style={{ background: themes[theme] }}
              onClick={() => {
                setTempUser(user);
                setIsEditing(true);
              }}
            >
              ویرایش پروفایل
            </button>
          )}
        </div>

        {/* settings */}
        <div className={styles.settings}>
          <h3>تنظیمات حساب</h3>

          <button
            style={{ background: themes[theme] }}
            onClick={() => setShowPasswordBox(!showPasswordBox)}
          >
            تغییر رمز عبور
          </button>

          {showPasswordBox && (
            <div className={styles.userprofileSettingBox}>
              <input
                className={styles.userpasssetting}
                type="password"
                name="oldPass"
                placeholder="رمز فعلی"
                value={passwordData.oldPass}
                onChange={handlePasswordChange}
              />
              <input
                className={styles.userpasssetting}
                type="password"
                name="newPass"
                placeholder="رمز جدید"
                value={passwordData.newPass}
                onChange={handlePasswordChange}
              />
              <input
                className={styles.userpasssetting}
                type="password"
                name="confirmPass"
                placeholder="تکرار رمز جدید"
                value={passwordData.confirmPass}
                onChange={handlePasswordChange}
              />

              <div className={styles.userprofilePasswordActions}>
                <button
                  className={styles.saveBtn}
                  style={{ background: themes[theme] }}
                  onClick={handleSavePassword}
                >
                  ذخیره رمز
                </button>

                <button
                  className={styles.cancelBtn}
                  style={{ background: themes[theme] }}
                  onClick={() => {
                    setPasswordData({
                      oldPass: "",
                      newPass: "",
                      confirmPass: ""
                    });
                    setShowPasswordBox(false);
                  }}
                >
                  انصراف
                </button>
              </div>
            </div>
          )}

          <button
            style={{ background: themes[theme] }}
            onClick={() => setShowNotificationBox(!showNotificationBox)}
          >
            مدیریت اعلان‌ها
          </button>

          {showNotificationBox && (
            <div className={styles.userprofileSettingBox}>
              <label className={styles.userprofileNotificationLabel}>
                <input
                  type="checkbox"
                  checked={notifications.orderUpdates}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      orderUpdates: !notifications.orderUpdates
                    })
                  }
                />
                اعلان وضعیت سفارش‌ها
              </label>

              <label className={styles.userprofileNotificationLabel}>
                <input
                  type="checkbox"
                  checked={notifications.discounts}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      discounts: !notifications.discounts
                    })
                  }
                />
                اعلان تخفیف‌ها
              </label>

              <label className={styles.userprofileNotificationLabel}>
                <input
                  type="checkbox"
                  checked={notifications.newsletter}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      newsletter: !notifications.newsletter
                    })
                  }
                />
                خبرنامه ایمیلی
              </label>
            </div>
          )}

          <button
            className={styles.logout}
            style={{ background: themes[theme] }}
            onClick={handleLogout}
          >
            خروج از حساب
          </button>
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

      {/* shop */}
      <div
        className={styles.shopContainer}
        style={{
          borderColor: themes[theme],
          backgroundColor: `${themes[theme]}15`
        }}
      >
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
    </div>
  );
}
