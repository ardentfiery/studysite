import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import "../Mainpage.css"

const Motivationslide = () => {
    const [quotes, setquotes] = useState("");
    const [index, setindex] = useState(0);


    const fetchQuotes = async () => {
        try {
            const response = await axios.get(
                "https://quotesapi-five.vercel.app/getquotes/text"
            );
            setquotes(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        fetchQuotes();
    },[])
    useEffect(() => {
        const intID = setInterval(() => {
            if (index >= quotes.length - 1) {
                setindex(0);
            } else {setindex(index + 1)};
        }, 4000);
        return () => {
            clearInterval(intID);
        };
    }, [index,quotes]);


  return (
    
        <div className="motivation">
                    <div>
                        {quotes[index]?.quote}
                        {
                            console.log(index)
                        }
                    </div>
                </div>
    
  )
}

export default Motivationslide