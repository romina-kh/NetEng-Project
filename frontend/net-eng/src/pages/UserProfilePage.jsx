import React, {useEffect, useState} from "react";
import Cookies from 'js-cookie';
import styles from "../styles/profilePages/userprofile.module.css";
import { useNavigate } from "react-router-dom";
import Modal from "../components/modal.jsx";

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
  const navigate = useNavigate()

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

  const [user, setUser] = useState(null)
  const [tempUser, setTempUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const [modal, setModal] = useState({
    open: false,
    title: "",
    message: ""
  })

  useEffect(() => {
    const fetchUserData = async () => {
      try{

        const res = await fetch("http://localhost:8080/api/v1/user/me", {
          method: "GET",
          credentials: "include"
        });

        const data = await res.json()

        if (!res.ok){
          alert(data.error)
          navigate("/login", {replace: true})
        }

        setUser(data);
        setTempUser(data);

      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate("/login", {replace: true})

      }

      finally {
        setLoading(false);
      }

    };

    fetchUserData();
  }, []);


  const handleChange = (e) => {
    if (!tempUser) return;
    setTempUser({ ...tempUser, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:8080/api/v1/user/edit", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: tempUser.name,
          family: tempUser.family,
          email: tempUser.email,
          phone: tempUser.phone,
          address: tempUser.address,
          avatar: tempUser.avatar,
          birthday: tempUser.birthday
        })
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "خطا در ذخیره");

      setUser(tempUser);
      setTempUser(tempUser);
      setIsEditing(false);

      // alert(data.message || "اطلاعات با موفقیت ذخیره شد");
      setModal({
        open: true,
        title: "پیغام",
        message: "اطلاعات با موفقیت ذخیره شد"
      })
    } catch (err) {
      console.error(err);
      alert(err.message || "مشکلی پیش آمد");
    } finally {
      setLoading(false);
    }
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

  const handleLogout = async () => {
    Cookies.remove('auth_token');
    setUser(null);
    setTempUser(null);
    navigate("/login", {replace: true})

  };

  if (loading) return <div>در حال بارگذاری...</div>;
  if (!user) return null;

  return (
    <div className={styles.usercontainer}>

      {/* profile card */}
      <div
        className={styles.usercard}
        style={{ borderColor: `${themes[theme]}` }}
      >
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
              <input name="family" value={tempUser.family} onChange={handleChange} />
              <input name="email" value={tempUser.email} onChange={handleChange} />
              <input name="phone" value={tempUser.phone} onChange={handleChange} />
              <input name="address" value={tempUser.address} onChange={handleChange} />
            </>
          ) : (
            <>
              <h2>{user.name}</h2>
              <p> {user.family}</p>
              <p>{user.email} ✉️︎</p>
              <p>{user.phone} 🕻</p>
              <p>{user.address} 📍</p>
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
                onClick={handleSaveProfile}
              >
                ذخیره تغییرات
              </button>

              <button
                className={styles.cancelBtn}
                style={{ background: themes[theme] }}
                onClick={() => {
                  setTempUser({...user});
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
                setTempUser({...user});
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
          backgroundColor: `${themes[theme]}20`
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
      <Modal
        open={modal.open}
        title={modal.title}
        message={modal.message}
        onClose={() => setModal({...modal, open: false })}
      />
    </div>
  );
}