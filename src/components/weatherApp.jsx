import React, { useState, useEffect } from "react";
import "./weatherApp.css";
import searchsvg from "../../public/searchicon.svg";

export function WeatherApp() {
  const [city, setCity] = useState("london");
  const [cityInputValue, setCityInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=a373ab1972cd47729bd172808250409&q=${city}&aqi=no`,
          { method: "GET" }
        );
        if (response.status !== 200) {
          throw new Error(`Something went wrong`);
        }
        const weatherData = await response.json();
        setWeatherData(weatherData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [city]);

  return (
    <div className="weatherApp">
      <div className="weatherSearchBar">
        <form className="weatherSearchBarForm">
          <input
            type="text"
            placeholder="city, state"
            id="cityInput"
            onChange={(e) => setCityInputValue(e.target.value)}
          />

          <button
            className="weatherSearchButton"
            type="button"
            onClick={() => setCity(cityInputValue)}
          >
            <img src={searchsvg} />
          </button>
        </form>
      </div>
      <div className="weatherIcon">
        <img src={weatherData?.current.condition.icon} alt="weatherIcon" />
      </div>
      <div className="weatherDisplay">
        <div className="weatherStatus">
          <div className="weatherTime">{weatherData?.current.last_updated}</div>
          <div className="weatherTemperature">
            <h2>{weatherData?.current.temp_c}°C</h2>
            <h2>{weatherData?.location.name}</h2>
            <h5>{weatherData?.location.region}</h5>
          </div>
        </div>
        <div className="weather">
          <div className="weatherDescription">
            {weatherData?.current.condition.text}
          </div>
          <div className="weatherStats">
            <p>precip: {weatherData?.current.precip_mm}mm</p>
            <p>humidity: {weatherData?.current.humidity}</p>
            <p>wind: {weatherData?.current.wind_kph}kph</p>
          </div>
        </div>
      </div>
    </div>
  );
}
