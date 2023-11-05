import React, { useEffect, useState } from "react";
import "./Mainpage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Motivationslide from "./component/Motivationslide";

const Mainpage = () => {
    const [time, settime] = useState(new Date());
    const [hamClicked,sethamClicked] = useState(false)

    useEffect(() => {
        setInterval(() => {
            settime(new Date());
        }, 1000);
    }, []);

    const enterFullScreen = () => {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
          document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
          document.documentElement.msRequestFullscreen();
        }}
    

    const navigate =
        useNavigate(); /*yo instantiate gareko use navigate lai.... arko page ma navigate garxa */

    return (
        <div className="Homepage">
            <div className="fullscreen">
                <img onClick={enterFullScreen} src="fullscreen.png" alt="" />
            </div>
            <div className="leftside"></div>
            {console.log(hamClicked)}
            <div  className="hamburger">
                <img onClick={()=>{
                sethamClicked(!hamClicked)
                
            }} className="burger" src="hamburger.png" alt="" />
            </div>
            <div>
                <div className={`rightbar ${hamClicked?"rightshow":"righthide"}`}>
                    <div
                        onClick={() => {
                            navigate("/studynow");
                        }}
                    >
                        <div>
                            <img src="/Books.png" alt="" />
                        </div>
                        <div className="rightname">
                            <p>Study Now</p>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            navigate("/todo");
                        }}
                    >
                        <div>
                            <img src="/todo.png" alt="" />
                        </div>
                        <div className="rightname">
                            <p>To-Do</p>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            navigate("/personalgrowth");
                        }}
                    >
                        <div>
                            <img src="/Growth.png" alt="" />
                        </div>
                        <div className="rightname">
                            <p>Personal Growth</p>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            navigate("/motivation");
                        }}
                    >
                        <div>
                            <img src="/Think.png" alt="" />
                        </div>
                        <div className="rightname">
                            <p>Motivation</p>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            navigate("/calendar");
                        }}
                    >
                        <div>
                            <img src="/Calendar.png" alt="" />
                        </div>
                        <div className="rightname">
                            <p>Calendar</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="date_goal">
                <div className="second_div">
                    <div className="date">
                        <p>{time.toDateString()}</p>
                    </div>
                    <div className="goal">
                        <div className="goal_today">Your Goal For Today!</div>
                    </div>
                </div>
            </div>

            <div className="img_holder">
                <div className="main_image">
                    <img className="home_img" src="/homies.png" alt="" />
                </div>
                <div className="dive_study">Let's dive into study...</div>
            </div>
            <div className="timer">{time.toLocaleTimeString()}</div>
            <div className="clock_motivation">
                <div className="clock">
                    <img src="/clock.png" alt="" />
                </div>
                <Motivationslide />
            </div>
        </div>
    );
};

export default Mainpage;
