import React, { useState } from 'react'
import './MainFocus.css'
import { FaPencilAlt, FaTimes } from "react-icons/fa";


const MainFocus = () => {
    const [focusText, setFocusText] = useState('');
    const [checked, setChecked] = useState(false);
    const [mainFocus, setMainFocus] = useState(localStorage.getItem("focusText"));

    const focusHandler = () => {
        localStorage.setItem("focusText", focusText);
        setMainFocus(localStorage.getItem("focusText"));
        console.log(focusText);
        console.log(mainFocus);
    }

    const editHandler = () => {
        setMainFocus("");
        setChecked(false);
    }

    const deleteHandler = () => {
        localStorage.removeItem('focusText');
        setMainFocus('');
        setFocusText('');
    }

    return (
        <>
            <div className="focus">
                <p>What is your main focus for today ?</p>
                {mainFocus ? (
                    <div className='focus-field'>
                        <input
                            type="checkbox"
                            className='checkbox'
                            onChange={() => setChecked(!checked)} />
                        <p className={checked ? 'checked' : ''}>{mainFocus}</p>

                        <FaPencilAlt
                            size='1.5rem'
                            className='icon'
                            onClick={editHandler} />
                        <FaTimes
                            size='1.5rem'
                            className='icon'
                            onClick={deleteHandler} />
                    </div>
                ) : (
                    <input
                        className='focus-input'
                        type="text"
                        value={focusText}
                        onChange={(e) => setFocusText(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" ? focusHandler() : ''} />
                )}
            </div>
        </>
    )
}

export { MainFocus }
