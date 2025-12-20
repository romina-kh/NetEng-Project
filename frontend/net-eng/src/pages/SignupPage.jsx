import React from "react";
import styles from "../styles/signupPage/Signup.module.css";

export default function Signup() {
  return (
    <div className={styles.container}>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>

      <div className={styles.center}>
        <h2>ثبت‌نام در تک‌یار</h2>

        <input type="text" placeholder="نام" />
        <input type="text" placeholder="نام خانوادگی" />
        <input
          type="tel"
          placeholder="شماره تلفن"
          pattern="[0][9][0-9]{9}"
        />
        <input type="password" placeholder="رمز عبور" />

        <button className={styles.signupBtn}>ثبت‌نام</button>

        <p className={styles.link}>
          قبلاً ثبت‌نام کرده‌اید؟ <a href="/login">ورود</a>
        </p>
      </div>
    </div>
  );
}
