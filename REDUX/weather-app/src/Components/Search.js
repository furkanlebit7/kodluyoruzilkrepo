import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Icons
import { FiSearch } from "react-icons/fi";

//Fetch
import { fetchCity, fetchData } from "../Redux/Services/WeatherService";
import { MdGpsFixed } from "react-icons/md";
import {
  changeLocation,
  getCityStatus,
  getCoord,
} from "../Redux/Slices/WeatherSlice";

const Search = () => {
  const dispatch = useDispatch();

  //Selectors
  const coord = useSelector(getCoord);
  const cityStatus = useSelector(getCityStatus);
  //Consts
  const [city, setCity] = useState("");
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (cityStatus === "succeeded" && fetching) {
      dispatch(fetchData(coord));
      setFetching(false);
    }
  }, [coord, dispatch, cityStatus, fetching]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFetching(true);
    dispatch(fetchCity(city));
  };

  const handleLocation = () => {
    setFetching(true);
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        dispatch(fetchData({ lon: longitude, lat: latitude }));
        dispatch(changeLocation({ lon: longitude, lat: latitude }));
      }
    );
  };

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
      <div
        className="dark:bg-darkBg bg-bgMain rounded-full p-2 cursor-pointer"
        onClick={() => handleLocation()}
      >
        <MdGpsFixed />
      </div>
    </div>
  );
};

export default Search;
