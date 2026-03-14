import React from "react";
import ShowError from "./ShowError";

const Weather = ({ data }) => {
  return (
    <>
      {data ? (
        <>
          <div className="temIcon">
            <img
              src={require(`../src/assest/${data.weather[0].icon}.png`)}
              alt={`i${data.weather[0].icon}`}
            />
          </div>

          <div className="temData">
            <span>{Math.floor(data.main.temp)}</span>
            <p>°C</p>
          </div>
          <div className="locationBox">
            <i className="fa-solid fa-location-dot"></i>
            <span>{data.name}</span>
          </div>

          <div className="weatherData">
            <div className="col">
              <div>
                <i className="fa-solid fa-water"></i>
              </div>
              <div>
                <span>{data.main.humidity}</span>
                <span>%</span>
                <br />
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <div>
                <i className="fa-solid fa-wind"></i>
              </div>
              <div>
                <span>{data.wind.speed}</span>
                <span>Km/h</span>
                <br />
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </>
      ) : data === null ? (
        <ShowError />
      ) : (
        <></>
      )}
    </>
  );
};

export default Weather;
