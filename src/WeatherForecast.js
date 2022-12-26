import React from "react";
import "./WeatherForecast.css";

import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}
  let longtitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiKey = "bb3a68f7856f8a3954d8eo325e0t8737";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longtitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>

          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
