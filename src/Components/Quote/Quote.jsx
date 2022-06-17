import React, { useState, useEffect } from 'react'
import './Quote.css'
import axios from "axios";

const Quote = () => {
    const [quoteText,setQuoteText] = useState('');

    const getQuote = async () => {
        try {
            const response = await axios.get('https://type.fit/api/quotes');
            setQuoteText(response.data[Math.floor(Math.random() * 1600)].text)
            console.log(response);
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