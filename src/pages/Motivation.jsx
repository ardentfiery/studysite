import React, { useEffect, useState } from "react";
import "./Motivation.css";
import axios from "axios";
import "aos/dist/aos.css";
import Aos from "aos";
import { BallTriangle } from "react-loader-spinner";

const Motivation = () => {
    const [line, setline] = useState(true);
    const [quotes, setquotes] = useState();
    const [image, setimage] = useState();
    const [loading, setloading] = useState(true);

    const getimages = async () => {
        try {
            const response = await axios.get(
                "https://quotesapi-five.vercel.app/getquotes/image"
            );
            setimage(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    //eauta method banau api call garna ko lagi jaileee ni
    const fetchQuotes = async () => {
        try {
            const response = await axios.get(
                "https://quotesapi-five.vercel.app/getquotes/text"
            );
            setquotes(response.data);
            setloading(false);
            console.log("hahahha")
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchQuotes();
        getimages();
    }, []);

    useEffect(() => {
        Aos.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
            duration: 1000,
        });
    }, []);
    return (
        <div className="motivationpage">
            <div className="upperdiv">
                <div>
                    <div
                        className="quotequote"
                        onClick={() => {
                            setline(true);
                        }}
                    >
                        Quotes
                    </div>

                    {line && <div className="underline"></div>}
                    {/*line true bhayo bhane tyo div dekhinxa*/}
                </div>
                <div>
                    <div
                        className="quoteimage"
                        onClick={() => {
                            setline(false);
                        }}
                    >
                        Images
                    </div>
                    {!line && <div className="underline"></div>}
                </div>
            </div>
            {loading ? (
                <div className="loaderlogo">
                    <BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        color="#4fa94d"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                    />
                </div>
            ) : (
                line && (
                    <div className="quotediv">
                        {quotes?.map((quoteobject) => {
                            /* tya quoteobject ma chai quotes array ko harek object palai palo ayera basxa ani tya question mark le chai quotes ma sabai quotes ayo kinai bhaenra chechk garxa */
                            return (
                                <div
                                    data-aos="zoom-in"
                                    className="quotesappear"
                                    key={quoteobject._id}
                                >
                                    {" "}
                                    {/* key kina use gareko bhanda harek div lai unique banauna*/}
                                    {quoteobject.quote}{" "}
                                    {/*object bhtra xa ni ta hamro quote soo quoteobject.quote gareko*/}
                                </div>
                            );
                        })}
                    </div>
                )
            )}

            {!line && (
                <div className="imagediv">
                    {image?.map((imageobject) => {
                        return (
                            <div data-aos="zoom-out">
                                <img
                                    className="imagequotes"
                                    src={`data:image/png;base64,${imageobject.quote}`}
                                    alt=""
                                />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Motivation;
