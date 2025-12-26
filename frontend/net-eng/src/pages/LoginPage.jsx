import React, { useState } from "react";
import styles from "../styles/loginPage/Login.module.css";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!values.email.trim()) {
      newErrors.email = "وارد کردن ایمیل الزامی است!";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "ایمیل معتبر نیست!";
    }

    if (!values.password.trim()) {
      newErrors.password = "وارد کردن رمز عبور الزامی است!";
    } else if (values.password.length < 6) {
      newErrors.password = "رمز عبور باید حداقل ۶ کاراکتر باشد!";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log("🔐 ورود موفق", values);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>

      <div className={styles.center}>
        <h2>ورود به تک‌یار</h2>

        <input
          type="email"
          name="email"
          placeholder="ایمیل"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="رمز عبور"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}

        <button className={styles.loginBtn} onClick={handleSubmit}>
          {submitted ? "ورود موفق ✔" : "ورود"}
        </button>

        <p className={styles.link}>
          ثبت نام نکرده اید؟ <a href="/signup">ثبت‌نام</a>
        </p>
      </div>
    </div>
  );
}