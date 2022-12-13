import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <h1>Weather App</h1>
      <App />
      <p>
        <a href="https://github.com/diana-budkevych/weather-react-week-4-test">
          {" "}
          Open-source{" "}
        </a>{" "}
        code by Diana Budkevych
      </p>
    </div>
  </React.StrictMode>
);

reportWebVitals();
