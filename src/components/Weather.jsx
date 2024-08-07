import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Weather = ({ city }) => {
  const TOKEN = "ee47f170c3cfd51cda099d8871218f5e";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputElement = useRef();

  const getWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(`${BASE_URL}?q=${city}&appid=${TOKEN}`);
      console.log(data);
      setWeather(data);
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getWeatherData(city);
  }, []);

  const getWeather = () => {
    let city = inputElement.current.value;
    getWeatherData(city);
  };

  return (
    <div className="text-center m-3">
      <h1 className="mb-3">
        <strong>Weather App</strong>
      </h1>
      <div className="input-group pb-3">
        <input
          onKeyDown={(e) => e.key == "Enter" && getWeather()}
          ref={inputElement}
          type="text"
          placeholder="city"
          className="form-control"
        />
        <button className="btn btn-info" onClick={() => getWeather()}>getWeather</button>
      </div>
      {loading && (
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3lid3ZpbWZjdWw4dHBuYWdjaGxmZWU1b2RyNnh4MG52MWt3eHB1biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.webp"
          alt="loading"
          height={100}
        />
      )}
      {!loading && error && <p className="text-danger"><strong>{error}</strong></p>}
      {!loading && !error && weather && (
        <div className="weather-card">
          <h3 className="pb-2">
            {weather.name}, {weather.sys?.country}
          </h3>
          <h6 className="text-body-secondary pb-2">
            {weather.weather?.[0]?.description}
          </h6>
          <img
            className="pb-2"
            src={`https://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`}
            alt=""
          />
          <h6 className="pb-2">
            <strong>
              Temperature: {(weather.main?.temp - 273.15).toFixed()}°C
            </strong>
          </h6>
          <h6 className="pb-2">
            <strong>Humidity: {weather.main?.humidity}%</strong>
          </h6>
          <h6 className="pb-2">
            <strong>Wind Speed: {weather.wind?.speed} m/s</strong>
          </h6>
        </div>
      )}
    </div>
  );
};

export default Weather;
