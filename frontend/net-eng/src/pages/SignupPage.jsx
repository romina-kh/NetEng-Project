import React, { useState } from "react";
import styles from "../styles/signupPage/Signup.module.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const newErrors = {};

    if (!values.firstName.trim()) {
      newErrors.firstName = "وارد کردن نام الزامی است!";
    }
    if (!values.lastName.trim()) {
      newErrors.lastName = "وارد کردن نام خانوادگی الزامی است!";
    }
    if (!values.phone.trim()) {
      newErrors.phone = "وارد کردن شماره تلفن الزامی است!";
    } else if (!/^09\d{9}$/.test(values.phone)) {
      newErrors.phone = "شماره تلفن معتبر نیست!";
    }
    if (!values.password.trim()) {
      newErrors.password = "وارد کردن رمز عبور الزامی است!";
    } else if (values.password.length < 6) {
      newErrors.password = "رمز عبور باید حداقل ۶ کاراکتر باشد!";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await fetch("http://localhost:8080/api/v1/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            name        : values.firstName,
            family      : values.lastName,
            phone_number       : values.phone,
            password    : values.password,
            role        : "user"
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error);
        }

        setSubmitted(true);
        alert(data.message)
        navigate("/", {replace: true})

      } catch (err) {
        console.error("❌ خطا:", err.message);
        alert(err.message);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>

      <div className={styles.center}>
        <h2>ثبت‌نام در تک‌یار</h2>

        <input
          type="text"
          name="firstName"
          placeholder="نام"
          value={values.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}

        <input
          type="text"
          name="lastName"
          placeholder="نام خانوادگی"
          value={values.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}

        <input
          type="tel"
          name="phone"
          placeholder="شماره تلفن"
          value={values.phone}
          onChange={handleChange}
          pattern="[0][9][0-9]{9}"
        />
        {errors.phone && <p className={styles.error}>{errors.phone}</p>}

        <input
          type="password"
          name="password"
          placeholder="رمز عبور"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}

        <button
          className={styles.signupBtn}
          onClick={handleSubmit}
        >
          {submitted ? "ثبت شد ✔" : "ثبت‌نام"}
        </button>

        <p className={styles.link}>
          قبلاً ثبت‌نام کرده‌اید؟ <a href="/login">ورود</a>
        </p>
      </div>
    </div>
  );
}