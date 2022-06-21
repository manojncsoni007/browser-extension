import React, { useState, useEffect } from 'react'
import './Quote.css'
import axios from "axios";

const Quote = () => {
    const [quoteText,setQuoteText] = useState('');

    const getQuote = async () => {
        try {
            const response = await axios.get("https://api.quotable.io/random?maxLength=100");
            setQuoteText(response.data.content);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
     getQuote();
    },[])

    return (
        <div>
            <p>{quoteText}</p>
        </div>
    )
}

export { Quote }