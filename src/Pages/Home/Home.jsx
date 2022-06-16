import React from 'react'
import './Home.css'

const Home = () => {
  let user = localStorage.getItem("userName");
  let greet;
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();

  if (hour < 5) {
    greet = 'Good Night'
  } else if (hour < 12) {
    greet = 'Good Morning'
  } else if (hour < 16) {
    greet = 'Good Evening'
  } else if(hour < 21){
    greet = 'Good Evening'
  }

  return (
    <>
      <div className="homepage-container">
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
      </div>
    </>
  )
}

export { Home };