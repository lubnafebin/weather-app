import { CiSearch } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import "./weather.css";
import { useEffect, useRef, useState } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;

export const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

  const search = async (city) => {
    if (city === "") {
      alert("Enter a city");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: data.weather[0].icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.log(error);
    }
  };

  useEffect(() => {
    search("London");
  }, []);

  return (
    <div className="container">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search" />
        <button onClick={() => search(inputRef.current.value)}>
          <CiSearch />
        </button>
      </div>

      {weatherData && (
        <div className="weather-main">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
            alt="weather icon"
            className="icon"
          />{" "}
          <span className="temperature">{weatherData.temperature}°c</span>
          <span className="location">{weatherData.location}</span>
        </div>
      )}

      {weatherData && (
        <div className="weather-data">
          <div className="col">
            <i>
              <WiHumidity />
            </i>
            <div>
              <p>{weatherData.humidity}%</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <i>
              <FaWind />
            </i>
            <div>
              <p>{weatherData.windSpeed} km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
