import { createContext, useContext, useState } from "react";
import { getCurrentWeatherByCity, getWeatherDataByPosition } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  const fetchData = async () => {
    if (searchCity) {
      const response = await getCurrentWeatherByCity(searchCity);
      setData(response);
    }
  };
  const fetchCurrentUserWeatherData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataByPosition(
        position.coords.latitude,
        position.coords.longitude
      ).then((response) => setData(response));
    });
    // setData(response);
  };
  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        data,
        setSearchCity,
        fetchData,
        fetchCurrentUserWeatherData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
