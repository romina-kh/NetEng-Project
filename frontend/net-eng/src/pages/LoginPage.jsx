import React, { useState } from "react";
import styles from "../styles/loginPage/Login.module.css";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [values, setValues] = useState({
        phone: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const newErrors = {};

        if (!values.phone.trim()) {
            newErrors.phone = "وارد کردن تلفن الزامی است!";
        } else if (!/^09\d{9}$/.test(values.phone)) {
            newErrors.phone = "شماره تلفن معتبر نیست!";
        }

        if (!values.password.trim()) {
            newErrors.password = "وارد کردن رمز عبور الزامی است!";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try
            {
                const res = await fetch("http://localhost:8080/api/v1/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json",
                    },

                    credentials: "include",
                    body: JSON.stringify({
                        identifier: values.phone,
                        password  : values.password
                    })
                });

                const data = await res.json()

                if (!res.ok){
                    throw new Error(data.error)
                }

                setSubmitted(true);
                alert(data.message)
                navigate("/", {replace: true})
            }

            catch (err)
            {
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
                <h2>ورود به تک‌یار</h2>

                <input
                    type="phone"
                    name="phone"
                    placeholder="شماره تلفن"
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