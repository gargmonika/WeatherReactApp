const baseUrl = `http://api.weatherapi.com/v1/current.json?key=`;
const key = import.meta.env.VITE_APP_API_KEY;

export const getCurrentWeatherByCity = async (city) => {
  try {
    const response = await fetch(`${baseUrl}${key}&q=${city}&aqi=yes`);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch weather data by city:", error);
    throw error; // Re-throw the error if you want to handle it elsewhere
  }
};

export const getWeatherDataByPosition = async (lat, long) => {
  try {
    const response = await fetch(`${baseUrl}${key}&q=${lat},${long}&aqi=yes`);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch weather data by position:", error);
    throw error; // Re-throw the error if you want to handle it elsewhere
  }
};
// console.log(getCurrentWeatherByCity("Toronto"));
// getCurrentWeatherByCity("Toronto").then((result) => {
//   console.log(result.current);
// });

// const result = async () => {
//   const resolve = await getCurrentWeatherByCity("Toronto");
//   console.log(resolve);
// };
// result();
