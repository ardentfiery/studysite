import React, { useEffect, useRef, useState } from "react";
import "../study.css";

const Timer = () => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [trigger, settrigger] = useState(0);

    let intervalId = useRef(null);

    const startTimer = () => {
        setTotalSeconds(() => hour * 60 * 60 + minute * 60 + seconds);
        setIsStarted(true);
    };

    useEffect(() => {
        if (isStarted === true && totalSeconds > 0) {
            intervalId.current = setInterval(() => {
                setTotalSeconds((prevValue) => prevValue - 1);
                settrigger((prevValue) => prevValue + 1);
                console.log(totalSeconds);
            }, 1000);
        } else if (totalSeconds === 0) {
            clearInterval(intervalId.current);
            setIsStarted(false);
        }
        return () => {
            clearInterval(intervalId.current); //useref use garda kheri .current garnuparxa
        };
    }, [isStarted, totalSeconds]);

    useEffect(() => {
        if (isStarted === true) {
            setHour(Math.floor(totalSeconds / 3600));
            const remainingSeconds = totalSeconds % 3600;
            setMinute(Math.floor(remainingSeconds / 60));
            setSeconds(remainingSeconds % 60);
            console.log("->" + totalSeconds);
        }
    }, [trigger]);

    const resetTimer = () => {
        clearInterval(intervalId.current);
        setHour(0);
        setMinute(0);
        setSeconds(0);
    };
    const pauseTimer = () => {
        clearInterval(intervalId.current);
        setIsStarted(false);
    };

    return (
         <div className="timebox">
                <div className="timer">
                    <input
                        min="0"
                        inputMode="none"
                        type="number"
                        value={hour<10?`0${hour}`:hour}
                        onChange={(e) => {
                            setHour(e.target.value);
                        }}
                    />
                    <p className="timeristo">:</p>
                    <input
                        min="0"
                        inputMode="none"
                        max="60"
                        type="number"
                        value={minute<10?`0${minute}`:minute}
                        onChange={(e) => {
                            setMinute(e.target.value);
                        }}
                    />
                    <p className="timeristo">:</p>
                    <input
                        inputMode="none"
                        min="0"
                        max="60"
                        type="number"
                        value={seconds<10?`0${seconds}`:seconds}
                        onChange={(e) => {
                            setSeconds(e.target.value);
                        }}
                    />
                </div>
                <div className="studypause">
                    <div
                        className="three_buttons"
                        onClick={() => {
                            startTimer();
                        }}
                    >
                        start
                    </div>
                    <div
                        onClick={() => {
                            pauseTimer();
                        }}
                        className="three_buttons"
                    >
                        Pause
                    </div>
                    <div
                        onClick={() => {
                            resetTimer();
                        }}
                        className="three_buttons"
                    >
                        Reset
                    </div>
                </div>
            </div>
    );
};

export default Timer;
