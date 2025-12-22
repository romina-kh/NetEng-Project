import React from "react";
import "../../styles/homePage/Collaborate.css"

function Collaborate(){

    return(

        <div className="wrapper">
            <h3>هم اکنون آغاز کنید</h3>
            <div className="colab-container">
                <div className="inner-container">
                    <div className="form-collaborate">
                        <input placeholder="*نام" type="text" />
                        <input placeholder="*نام خانوادگی" type="text" />
                    </div>
                    <div className="form-collaborate">
                        <input placeholder="*شماره موبایل" type="text" />
                        <input placeholder="آدرس ایمیل" type="text" />
                    </div>
                    <div className="form-collaborate">
                        <input placeholder="نام شرکت" type="text" />
                        <select name="" id="">
                            <option value="">نوع درخواست</option>
                            <option value="">پشتیبانی</option>
                            <option value="">همکاری</option>
                            <option value="">فروش</option>
                        </select>
                    </div>
                    <div className="form-collaborate">
                        <input id="text-box" placeholder="متن درخواست" type="text" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collaborate;