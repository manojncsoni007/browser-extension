import React, { useState } from 'react'
import './Welcome.css'

const Welcome = () => {
    const [userName, setUserName] = useState();

    const continueHandler = () => {
        localStorage.setItem("userName", userName);
        window.location.reload(false);
    }
    return (
        <>
            <div className="welcome-container">
                <div className="welcome-text_container">
                    <h1>Hi👋, What is your name ?</h1>
                    <input type="text" onChange={(e) => setUserName(e.target.value)} />
                    <button onClick={continueHandler}>
                        <span>Continue</span>
                    </button>
                </div>
            </div>
        </>

    )
}

export { Welcome }
