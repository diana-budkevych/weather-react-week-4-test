import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.temperature.humidity,
      iconUrl: response.data.condition.icon_url,
      description: response.data.condition.description,
      date: "Wednesday, 07.00",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" className="btn btn-primary w-100" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix d-flex">
              <img
                src={weatherData.iconUrl}
                alt="cloudy"
                className="float-left"
              />{" "}
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>{" "}
                <span className="unit">C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "bb3a68f7856f8a3954d8eo325e0t8737";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
