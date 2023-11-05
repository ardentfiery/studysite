import React, { useEffect, useRef, useState } from "react";
import "./study.css";
import Timer from "./component/Timer";
import Sidebar from "./component/Sidebar";
import Motivationslide from "./component/Motivationslide";

const Studynow = () => {
    const [indexClicked, setindexClicked] = useState("");
    const [viewchanged, setviewchanged] = useState(false);
    const windowWidth = useRef(window.innerWidth);
    let backgroundimages;
    console.log(windowWidth.current);

    if (windowWidth.current < 600) {
        backgroundimages = [
              "mblbg1.jpg",
            
          "gb4.jpg",
        "gb5.jpg"];
    } else {
        backgroundimages = [
            "bg1.jpg",
            "bg2.jpg",
            "bg3.jpg",
            "bg4.jpg",
            "bggg.jpg",
            "bg6.jpg",
            "bg7.jpg",
            "bgggg.jpg",
        ];
    }

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

    return (
        <div
            className="studypage"
            style={
                indexClicked === ""
                    ? { backgroundColor: "#196236" }
                    : indexClicked.toString().includes("#")
                    ? { backgroundColor: indexClicked }
                    : {
                          backgroundImage: `url(${backgroundimages[indexClicked]})`,
                          objectFit: "cover",
                        
                          
                          backgroundRepeat: "no-repeat",
                      }
            }
        >
            {" "}
            {console.log(indexClicked)}
            <Timer />
            <div
                onClick={() => {
                    setviewchanged(true);
                }}
                className="changeview"
            >
                Change View
            </div>
            {viewchanged && (
                <Sidebar
                    bgimages={backgroundimages}
                    setindexClicked={setindexClicked}
                    setviewchanged={setviewchanged}
                />
            )}
            {/*viewchange true xa bhane sidebar show hunxa nabhye hudaina*/}
            <Motivationslide />
            <div className="fullscreen">
                <img onClick={enterFullScreen} src="fullscreen.png" alt="" />
            </div>
        </div>
    );
};

export default Studynow;
