import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Icons
import { FiSearch } from "react-icons/fi";

//Fetch
import { fetchCity } from "../Redux/Services/WeatherService";
import { MdGpsFixed } from "react-icons/md";

const Search = () => {
  const dispatch = useDispatch();

  const [city, setCity] = useState("");

  return (
    <div className="flex">
      <form className="flex items-center px-2 ">
        <FiSearch />
        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          type={"text"}
          className="outline-none px-2 font-medium dark:bg-darkMain "
          placeholder="Search for places..."
        />
      </form>
      <div className="dark:bg-darkBg bg-bgMain rounded-full p-2 cursor-pointer">
        <MdGpsFixed />
      </div>
    </div>
  );
};

export default Search;
