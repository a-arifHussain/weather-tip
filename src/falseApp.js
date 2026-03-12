// import React, { useState } from "react";

// function App() {
//   const [data, setData] = useState(false);
//   const key = process.env.REACT_APP_API_KEY;

//   // api calling funtion
//   async function callApi(city) {
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`,
//       );
//       if (response.ok) {
//         setData(await response.json());
//       } else {
//         alert("Something Went Wrong.... // ....Enter Correct City Name");
//         setData(false);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   // input value geting function

//   const [inputcity, setInputcity] = useState("");

//   const handleInput = (event) => {
//     setInputcity(event.target.value);
//   };

//   return (
//     <div className="bodyDiv">
//       <div className="weatherContainer">
//         <div className="searchBox">
//           <input type="text" placeholder="Search City" onChange={handleInput} />
//           <i
//             className="fa-solid fa-magnifying-glass"
//             onClick={() => {
//               inputcity
//                 ? callApi(inputcity)
//                 : (() => {
//                     alert("Enter City Name");
//                     setData(false);
//                   })();
//             }}
//           ></i>
//         </div>
//         {data ? (
//           <>
//             <div className="temIcon">
//               <img
//                 src={require(`../src/assest/${data.weather[0].icon}.png`)}
//                 alt={`i${data.weather[0].icon}`}
//               />
//             </div>

//             <div className="temData">
//               <span>{Math.floor(data.main.temp)}</span>
//               <p>°C</p>
//             </div>
//             <div className="locationBox">
//               <i className="fa-solid fa-location-dot"></i>
//               <span>{data.name}</span>
//             </div>

//             <div className="weatherData">
//               <div className="col">
//                 <div>
//                   <i className="fa-solid fa-water"></i>
//                 </div>
//                 <div>
//                   <span>{data.main.humidity}</span>
//                   <span>%</span>
//                   <br />
//                   <p>Humidity</p>
//                 </div>
//               </div>
//               <div className="col">
//                 <div>
//                   <i className="fa-solid fa-wind"></i>
//                 </div>
//                 <div>
//                   <span>{data.wind.speed}</span>
//                   <span>Km/h</span>
//                   <br />
//                   <p>Wind Speed</p>
//                 </div>
//               </div>
//             </div>
//           </>
//         ) : (
//           <></>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
