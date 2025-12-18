import React from "react";
import styles from '../styles/signupPage/Signup.module.css';

function SignupPage(){
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.form}>
                    <input type="text" required placeholder="نام"/>
                    <input type="text" required placeholder="نام خانوادگی"/>
                    <input type="tel" pattern="[0][9][0-9]{9}" required placeholder="شماره تلفن"/>
                    <input type="password" required placeholder="رمز عبور"/>
                </div>
            </div>
        </div>
    );
}

export default SignupPage

