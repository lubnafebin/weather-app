import { CiSearch } from "react-icons/ci";
import { FaSun } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="container">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>
            <CiSearch />
          </button>
        </div>
        <FaSun className="icon" />
        <p className="temperature">25°c</p>
        <p className="location">London</p>
        <div className="weather-data">
          <div className="col">
            <i></i>
            <div>
              <p>91%</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <i></i>
            <div>
              <p>3.6 km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
