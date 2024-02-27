import React from "react";
import axios, { Axios } from "axios";
import { useState } from "react";
import WeatherDetails from "./components/WeatherDetails";

export default function App() {
  const [data, setData] = useState({});

  const [location, setLocation] = useState("");

  const API_KEY = "09e0173c7cb6739486a9f1ff4d847d7a";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${API_KEY}`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="flex items-center justify-center relative">
      <div className="w-[300px] h-[500px]  md:h-[500px] md:w-[900px]  mx-8 relative border-4 border-zinc-200 text-white rounded-[10px] top-6 bg-[#46507E]">
        <div className="text-center p-4 ">
          <input
            type="text"
            className="py-3 px-6 md:w-[700px] w-[200px] text-[9px] md:text-lg rounded-3xl border border-gray-200 text-gray-700 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
            placeholder="Enter Location to Check The Weather"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDownCapture={searchLocation}
          />
        </div>
        <WeatherDetails data={data} />
      </div>
    </div>
  );
}
