import React, { useState, useEffect } from "react";
import "./weatherApp.css";
import searchsvg from "../../public/searchicon.svg";

export function WeatherApp() {
  const [city, setCity] = useState("london");
  const [cityInputValue, setCityInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    console.log(`useEffect started working`);
    (async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=a373ab1972cd47729bd172808250409&q=${city}&aqi=no`,
          { method: "GET" }
        );
        console.log(`fetching.....`);
        if (response.status !== 200) {
          throw new Error(`Something went wrong`);
        }
        const weatherData = await response.json();
        setWeatherData(weatherData);
        <p>weatherdata={weatherData}</p>;
      } catch (error) {
        console.log(error);
      }
    })();
  }, [city]);

  return (
    <div className="weatherApp">
      <div className="weatherSearchBar">
        <form>
          <input
            type="text"
            placeholder="city"
            id="cityInput"
            onChange={(e) => setCityInputValue(e.target.value)}
          />

          <button type="button" onClick={() => setCity(cityInputValue)}>
            <img src={searchsvg} />
          </button>
          <p>Selected city: {city}</p>
        </form>
      </div>

      <div className="weatherDisplay">
        <div className="weatherStatus">
          <div className="weatherTime">now</div>
          <div className="weatherTemperature">
            <h2>{weatherData?.current.temp_c}</h2>
            <img src={weatherData?.current.condition.icon} alt="weatherIcon" />
          </div>
        </div>
        <div className="weather">
          <div className="weatherDescription"></div>
          <div></div>
        </div>
      </div>

      <div className="weatherContent"></div>
    </div>
  );
}
