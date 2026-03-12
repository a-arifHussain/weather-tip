import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Weather from "./Weather";
import NavBar from "./NavBar";

function App() {
  const [data, setData] = useState(false);
  const key = process.env.REACT_APP_API_KEY;

  // api calling funtion
  async function callApi(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`,
      );
      if (response.ok) {
        setData(await response.json());
      } else {
        alert("Something Went Wrong.... // ....Enter Correct City Name");
        setData(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // input value geting function

  const [inputcity, setInputcity] = useState("");

  const handleInput = (event) => {
    setInputcity(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputcity) {
      callApi(inputcity);
    } else {
      alert("Enter City Name");
      setData(false);
    }
  };

  return (
    <>
      <div className="bodyDiv">
        <NavBar />
        <div className="weatherContainer">
          <SearchBar handleInput={handleInput} handleSubmit={handleSubmit} />

          <Weather data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
