import React from "react";
import FormatedDate from "./FormatedDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix d-flex">
            <img src={props.data.iconUrl} alt="cloudy" className="float-left" />{" "}
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>{" "}
              <span className="unit">C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
