import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

//Icons
import { FiSearch } from "react-icons/fi";

//Fetch
import { fetchCity } from "../Redux/Services/WeatherService";

const Search = () => {
  const dispatch = useDispatch();

  const [city, setCity] = useState("");

  const handleSubmit = () => {
    dispatch(fetchCity(city));
  };

  return (
    <form className="flex items-center px-2 " onSubmit={() => handleSubmit()}>
      <FiSearch />
      <input
        onChange={(e) => setCity(e.target.value)}
        value={city}
        type={"text"}
        className="outline-none px-2 font-medium dark:bg-darkMain "
        placeholder="Search for places..."
      />
    </form>
  );
};

export default Search;
