import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);

  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);

  function showWeather(response) {
    setTemperature(Math.round(response.data.main.temp));

    setHumidity(Math.round(response.data.main.humidity));
    setWind(response.data.wind.speed);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "4153903a26a56002551e2a95d2d2783b";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (temperature) {
    return (
      <div>
        <form className="searchForm" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
        <ul className="form">
          <li>City: {city}</li>
          <li>Temperature: {temperature}℃</li>

          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind} km/h</li>
        </ul>
      </div>
    );
  } else {
    return (
      <form className="searchForm" onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
