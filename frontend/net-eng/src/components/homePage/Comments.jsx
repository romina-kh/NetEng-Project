import React from "react";
import "../../styles/homePage/Comment.css"


function Comments(){
    return (
        <section className="comments">
            <h2>دیدگاه مشتریان</h2>
            <div className="comment-container">
                <div className="comment-box">
                    <div className="comment">
                         <i className='bx bxs-quote-alt-left'></i>
                            <div className="stars">
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bx-star'></i>
                                <i class='bx bx-star'></i>
                            </div>
                        <p>محصول سالم رسید، اما بسته‌بندی طوری بود که فکر کردم از جنگ برگشته. لطفاً یه کم مهربون‌تر 
                        </p>
                        <h4>آریا نادری</h4>
                    </div>
                </div>
                <div className="comment-box">
                    <div className="comment">
                         <i className='bx bxs-quote-alt-left'></i>
                            <div className="stars">
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star-half'></i>
                                <i class='bx bx-star'></i>
                                <i class='bx bx-star'></i>
                            </div>
                        <p> همه چی خوب بود، فقط ارسالش یه ذره طول کشید. انقدر که من با محصول تو ذهنم خاطره ساخته بودم هنوز نرسیده! 
                        </p>
                        <h4>محمد متین پریان</h4>
                    </div>
                </div>
                <div className="comment-box">
                    <div className="comment">
                            <i className='bx bxs-quote-alt-left'></i>
                            <div className="stars">
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star-half'></i>
                            </div>
                        <p>محصول دقیقاً همونیه که تو عکس بود، نه مثل بعضی سایت‌ها که عکس آیفون می‌ذارن، نوکیا می‌فرستن!
                        </p>
                        <h4>رومینا خانمحمدی</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Comments