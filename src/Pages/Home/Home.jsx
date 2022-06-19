import React from 'react'
import './Home.css'
import { MainFocus, Quote, ToDo, Weather } from '../../Components';

const Home = () => {
  let greet;
  let user = localStorage.getItem("userName");

  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const minutes = minute / 10 < 1 ? `0${minute}` : minute;

  if (hour < 5) {
    greet = 'Good Night'
  } else if (hour < 12) {
    greet = 'Good Morning'
  } else if (hour < 16) {
    greet = 'Good Afternoon'
  } else if (hour < 24) {
    greet = 'Good Evening'
  }

  return (
    <>
      <div className="homepage-container">
        <div className="weather-container">
          <Weather />
        </div>
        <div className="main-container">
          <div className="greeting">
            <h1>{hour}:{minutes}</h1>
            <p>{greet}, {user}</p>
          </div>
          <MainFocus />
        </div>
        <div className="quote-container">
          <Quote />
          <ToDo />
        </div>
      </div>
    </>
  )
}

export { Home };