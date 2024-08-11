import { useWeather } from "../context/Weather";

const Input = () => {
  const weather = useWeather();
  console.log(weather);
  return (
    <>
      <div className="w-full md:w-1/3">
        <input
          className=" h-10 w-full rounded-md border border-black/30 px-3 py-2  placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 text-black"
          type="text"
          placeholder="Search City"
          value={weather.searchCity}
          onChange={(e) => {
            weather.setSearchCity(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Input;
