import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";

function App() {
  const weather = useWeather();
  useEffect(() => {
    weather.fetchCurrentUserWeatherData();
  }, []);

  console.log(weather.data);
  return (
    <>
      <div className="flex flex-col gap-20 items-center">
        <div className="flex gap-2 w-full justify-center">
          <Input />
          <Button name="Search" onClick={weather.fetchData} />
        </div>
        {weather.data ? (
          <>
            <Card />
            <Button name="Refresh" onClick={weather.fetchData} />
          </>
        ) : (
          <p>Please Entre Valid City Name</p>
        )}
      </div>
    </>
  );
}

export default App;
