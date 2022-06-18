import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Weather.css'

var latitude;
var longitude;

navigator.geolocation.getCurrentPosition((position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
})

const Weather = () => {
    const [weatherData, setWeatherData] = useState();

    const getWeather = async (latitude, longitude) => {
        let apiUrl = `https://api.weatherapi.com/v1/current.json?key=0a1d0b2e51c841e597b175153221606&q=${latitude},${longitude}&aqi=yes`;
        try {
            const response = await axios.get(apiUrl);
            setWeatherData(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getWeather(latitude, longitude);
    }, [])

    return (
        <div className='weather-container'>
            <img src={weatherData?.current.condition.icon} alt="weather-icon" />
            <div>
                <p>{weatherData?.current.temp_c} &deg;</p>
                <p>{weatherData?.location.name}, {weatherData?.location.country}</p>
            </div>


        </div>
    )
}

export { Weather }
