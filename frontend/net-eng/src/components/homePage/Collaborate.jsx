import React, { useState } from "react";
import "../../styles/homePage/Collaborate.css";

function Collaborate() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!values.firstName.trim()) newErrors.firstName = "وارد کردن نام الزامی است !";
    if (!values.lastName.trim()) newErrors.lastName = "وارد کردن نام خانوادگی الزامی است !";
    if (!values.phone.trim()) newErrors.phone = "وارد کردن شماره تلفن الزامی است !";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="wrapper">
      <h3>همین حالا با ما در ارتباط باشید!</h3>

      <div className="colab-container">
        <div className="inner-container">

        <div className="form-collaborate">

            <div className="field">
                <input
                placeholder="*نام"
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                />
                {errors.firstName && (
                <p className="error-text">{errors.firstName}</p>
                )}
            </div>

            <div className="field">
                <input
                placeholder="*نام خانوادگی"
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                />
                {errors.lastName && (
                <p className="error-text">{errors.lastName}</p>
                )}
            </div>

        </div>

        <div className="form-collaborate">

            <div className="field">
                <input
                placeholder="*شماره موبایل"
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                />
                {errors.phone && (
                <p className="error-text">{errors.phone}</p>
                )}
            </div>
            <div className="field">
                <input placeholder="آدرس ایمیل" type="text" />
            </div>

        </div>


          <div className="form-collaborate">
            <input placeholder="نام شرکت" type="text" />
            <select className="select-collaborate">
              <option value="">نوع درخواست</option>
              <option>پشتیبانی</option>
              <option>همکاری</option>
              <option>فروش</option>
            </select>
          </div>

          <div className="form-collaborate">
            <input id="text-box" placeholder="متن درخواست" type="text" />
          </div>

          <button
            className={`button-collaborate ${submitted ? "submitted" : ""}`}
            onClick={handleSubmit}
          >
            <div className="button-collaborate-div">
              <span className="button-collaborate-div-span">
                <p className="button-collaborate-p">
                  {submitted ? "ثبت شد ✔" : "کلیک کنید"}
                </p>
              </span>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
}

export default Collaborate;
