import React, { useState } from "react";

export default function WeatherDetails({ data }) {
  console.log(data);
  let showdate = new Date();
  let date = `${showdate.toDateString()}, ${showdate.getHours()}:${showdate.getMinutes()}`;
  let datee;
  let hours;
  let mins;
  const timingset = data.weather
    ? new Date(data.sys.sunset * 1000)
    : console.log("no data");
  const timingrise = data.weather
    ? new Date(data.sys.sunrise * 1000)
    : console.log("no data");

  return (
    <div className="relative  p-6 w-auto">
      {data.weather === undefined ? (
        <div>
          <div className="flex justify-between items-center md:px-8">
            <div>
              <h1 className="text-xl md:text-3xl font-black">Lafia,NG</h1>
              <p className="text-xs md:text-xl md:font-black font-medium">
                {date}
              </p>
            </div>
          </div>
          <div className="md:px-8 m-2 text-center rounded-sm text-stone-950 bg-[#CBFCFF] md:w-[150px] font-bold md:font-black md:text-3xl md:p-2 md:mt-6 w-[80px] h-[30px] md:h-[50px]">
            <h1>38°C</h1>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center md:px-8">
            <div>
              <h1 className="text-xl md:text-3xl font-black">
                {data.name},{data.sys.country}
              </h1>
              <p className="text-xs md:text-xl md:font-black font-medium">
                {date}
              </p>
              <p className="text-xs md:text-xl md:font-black font-medium">
                {data.weather[0].description}
              </p>
            </div>
            <div>
              <img
                src={` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.name}
                className="w-[120px]"
              />
            </div>
          </div>
          <div className="md:px-8 m-2 text-center rounded-sm text-stone-950 bg-[#CBFCFF] md:w-[150px] font-bold md:font-black md:text-3xl md:p-2 md:mt-6 w-[80px] h-[30px] md:h-[50px]">
            <h1>{data.main.temp.toFixed()}°C</h1>
          </div>
          {data.name !== undefined ? (
            <div>
              <div className="md:px-8 md:my-[50px]">
                <ul className="flex flex-col m-[10px] gap-2 md:flex-row md:justify-around md:items-center">
                  <li>Feels like {data.main.feels_like.toFixed()}°C</li>
                  <li>Pressure {data.main.pressure}hPa</li>
                  <li>Humidity {data.main.humidity}% </li>
                  <li>Wind Speed {data.wind.speed.toFixed()}KPH</li>
                </ul>
              </div>
              <div className="md:px-8 text-[10px] md:text-sm md:my-[50px] grid grid-cols-2 gap-2 p-[4px]  md:flex md:flex-row md:justify-around md:items-center">
                <div className="bg-[#70879F] w-[100px] md:w-32 h-8 rounded-sm md:rounded-full text-center p-2  md:p-1">
                  <h4>
                    SUNRISE {timingrise.getHours()}:{timingrise.getMinutes()}{" "}
                  </h4>
                </div>
                <div className="bg-[#5C491F] w-[100px] md:w-32 h-8 rounded-sm md:rounded-full p-2 text-center md:p-1">
                  <h4>
                    SUNSET {timingset.getHours()}:{timingset.getMinutes()}{" "}
                  </h4>
                </div>
                <div className="bg-[#70879F] w-[100px] md:w-32 h-8 rounded-sm md:rounded-full p-2 text-center md:p-1">
                  <h4>Longitude {data.coord.lon.toFixed(2)}</h4>
                </div>
                <div className="bg-[#F7C406] w-[100px] md:w-32 h-8 rounded-sm md:rounded-full text-center p-2 md:p-1">
                  <h4>Latitude {data.coord.lat.toFixed(2)}</h4>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
