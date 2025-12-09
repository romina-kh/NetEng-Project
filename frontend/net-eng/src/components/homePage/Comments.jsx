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
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، 
                        </p>
                        <h4>آریا نادری</h4>
                    </div>
                </div>
                <div className="comment-box">
                    <div className="comment">
                        <i className="quote"></i>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه 
                        </p>
                        <h4>محمد متین پریان</h4>
                    </div>
                </div>
                <div className="comment-box">
                    <div className="comment">
                        <i className="quote"></i>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان 
                        </p>
                        <h4>رومینا خانمحمدی</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Comments