import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Pdf.css"
import { BallTriangle } from "react-loader-spinner";
const Personalgrowth = () => {
    const [books, setBooks] = useState([]);
    const [loading, setloading] = useState(true);

    const getpdf = async () => {
        try {
            const response = await axios.get(
                "https://quotesapi-five.vercel.app/getbooks"
            );
            console.log(response.data);
            setBooks(response.data);
            setloading(false)
        } catch (error) {
            console.log("error");
        }
    };

    useEffect(() => {
        getpdf();
    }, []);

    return (
        <div className="personalpage">
            {loading?
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
                </div>:
            <div className="bookholder">
                {books.map((singlebook, index) => {
                    return (
                        <div className="onebook" key={singlebook._id}>
                            <div className="singlebook">
                                <div>
                                    <img className="pdfimages" src={singlebook.bookImage} alt="" />
                                </div>
                                <div>{singlebook.bookName}</div>
                            </div>
                            <div>
                                <Link
                                    to={{
                                        pathname: `/pdfview/${singlebook.pdfFileName}`,
                                        
                                    }}
                                >
                                    <button className="readbutton">
                                        Read book
                                    </button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>}
        </div>
    );
};

export default Personalgrowth;
