import React from "react";
import styles from "../styles/loginPage/Login.module.css";

export default function Login() {
  return (
        <div className={styles.container}>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>

        <div className={styles.center}>
            <h2>ورود به تک‌یار</h2>

            <input type="email" placeholder="ایمیل" />
            <input type="password" placeholder="رمز عبور" />

            <button className={styles.loginBtn}>ورود</button>
            <p className={styles.link}>حساب کاربری ندارید؟ <a href="/signup">ثبت نام</a> </p>
        </div>
        </div>
  );
}
