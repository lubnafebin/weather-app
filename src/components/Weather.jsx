import { CiSearch } from "react-icons/ci";
import { FaSun, FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import "./weather.css";
import { useEffect } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;

export const Weather = () => {
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search("London");
  }, []);

  return (
    <div className="container">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>
          <CiSearch />
        </button>
      </div>
      <div className="weather-main">
        <FaSun className="icon" />
        <span className="temperature">25°c</span>
        <span className="location">London</span>
      </div>
      <div className="weather-data">
        <div className="col">
          <i>
            <WiHumidity />
          </i>
          <div>
            <p>91%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <i>
            <FaWind />
          </i>
          <div>
            <p>3.6 km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
