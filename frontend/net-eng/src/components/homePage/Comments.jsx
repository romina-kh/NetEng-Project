import React from "react";
import "../../styles/homePage/Comment.css"


function Comments(){
    return (
        <section className="comments">
            <h2>دیدگاه مشتریان</h2>
            <div className="comment-container">
                <div className="comment-box">
                    <div className="comment">
                        <i className="quote"></i>
                        <p>محصول سالم رسید، اما بسته‌بندی طوری بود که فکر کردم از جنگ برگشته 📦💥 لطفاً یه کم مهربون‌تر 
                        </p>
                        <h4>آریا نادری</h4>
                    </div>
                </div>
                <div className="comment-box">
                    <div className="comment">
                        <i className="quote"></i>
                        <p> همه چی خوب بود، فقط ارسالش یه ذره طول کشید. انقدر که من با محصول تو ذهنم خاطره ساخته بودم هنوز نرسیده! 
                        </p>
                        <h4>محمد متین پریان</h4>
                    </div>
                </div>
                <div className="comment-box">
                    <div className="comment">
                        <i className="quote"></i>
                        <p>سایت خوبه، فقط کاش فیلترها دقیق‌تر باشه. من دنبال موس بودم، کیبورد هم پیشنهاد داد، اسپیکر هم انداخت وسط، آخرش خودم گیج شدم
                        </p>
                        <h4>رومینا خانمحمدی</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Comments