import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Icons
import { FiSearch } from "react-icons/fi";

//Fetch
import { fetchCity, fetchData } from "../Redux/Services/WeatherService";
import { MdGpsFixed } from "react-icons/md";
import { getCityStatus, getCoord } from "../Redux/Slices/WeatherSlice";

const Search = () => {
  const dispatch = useDispatch();

  //Selectors
  const coord = useSelector(getCoord);
  const cityStatus = useSelector(getCityStatus);
  //Consts
  const [city, setCity] = useState("");
  const [fetching, setFetching] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFetching(true);
    dispatch(fetchCity(city));
  };

  useEffect(() => {
    if (cityStatus === "succeeded" && fetching) {
      dispatch(fetchData(coord));
      setFetching(false);
    }
  }, [coord, dispatch, cityStatus, fetching]);

  return (
    <div
      className="flex items-center px-2 drop-shadow-none"
      onSubmit={(e) => handleSubmit(e)}
    >
      <FiSearch />
      <form className="mx-2 ">
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
