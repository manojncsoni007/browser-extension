import React from 'react'
import './Home.css'
import { Quote, Weather } from '../../Components';


const Home = () => {
  let greet;
  let user = localStorage.getItem("userName");
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();

  if (hour < 5) {
    greet = 'Good Night'
  } else if (hour < 12) {
    greet = 'Good Morning'
  } else if (hour < 16) {
    greet = 'Good Evening'
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
            <h1>{hour}:{minute}</h1>
            <div>{greet}, {user}
            </div>
          </div>
          <div className="focus">
            <p>What is your main focus for today?</p>
            <input type="text" />
          </div>
        </div>
        <div className="quote-container">
          <Quote />
        </div>
      </div>
    </>
  )
}

export { Home };