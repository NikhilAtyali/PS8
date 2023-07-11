import React, {useState, useEffect} from 'react'
import { weatherApi } from './api'

const Weather = () => {
const [weather, setWeather] = useState({});
const [isCelcius, setIsCelcius] = useState(false);

    useEffect(()=>{
        const fetchWeatherData = async ()=>{
            const weatherData = await weatherApi('https://example.com/api/weather')
            try{
                const data = weatherData.data;
                setWeather(data)
                console.log(data);
            }
            catch(error){
                console.error(error.message)
            }
        }
        fetchWeatherData();
    },[])
    const tempConverter=()=> setIsCelcius(!isCelcius);
    const temperature = isCelcius ? weather.temperature : weather.temperature * 9/5;
  return (
    <div>
        <h2>Weather</h2>
        <h4>Temperature: {temperature} {isCelcius ? '°C' : '°F'}</h4>
        <h4>Humidity: {weather.humidity}</h4>
        <h4>Wind Speed: {weather.windSpeed}</h4>
        <button onClick={tempConverter}>{isCelcius ? "Switch to Fahrenheit" : "Switch to Celcius"}</button>
    </div>
  )
}
 
export default Weather
