import React,{useEffect} from "react";
import "../study.css"
import Aos from "aos";


const Sidebar = ({ bgimages, setindexClicked ,setviewchanged}) => {
    useEffect(() => {
        Aos.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
            duration: 1000,
        });
    }, []);
    return (
        <div data-aos="zoom-in-up" className="sidebarhold" >
            <div onClick={()=>{
                setviewchanged(false)
            }} className="cross"><img className="errorimg" src="Error.png" alt="" /></div>
            <div className="bgimageholder">
                {bgimages.map((image, index) => {
                    return (
                        <div onClick={()=>{
                            setindexClicked(index)
                        }} key={index}>
                            <img className="backgroundimg" src={image} />
                        </div>
                    );
                })}
            </div>
            <div>
            <input onChange={(e)=>{
                setindexClicked(e.target.value)
            }} type="color" id="favcolor" name="favcolor" value="#ff0000"/>

            </div>
        </div>
    );
};

export default Sidebar;
