import React from "react";
import styles from '../styles/signupPage/Signup.module.css';

function SignupPage(){
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h2>ثبت نام</h2>
                <div className={styles.form}>
                    <input type="text" required placeholder="نام"/>
                    <input type="text" required placeholder="نام خانوادگی"/>
                    <input type="tel" pattern="[0][9][0-9]{9}" required placeholder="شماره تلفن"/>
                    <input type="password" required placeholder="رمز عبور"/>
                    <button>ثبت</button>
                    <p>ثبت نام کرده اید؟ <a href="/login">ورود</a> </p>
                </div>
            </div>
        </div>
    );
}

export default SignupPage

