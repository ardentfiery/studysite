import React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./Calendars.css";

const Calendars = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className="calendarpage">
            <p className="plan">Plan your study!</p>
            <div className="calendar">
                <Calendar className={"todaysday"} onChange={onChange} value={value} />
                
            </div>
            
        </div>
    );
};

export default Calendars;
