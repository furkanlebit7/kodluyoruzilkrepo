import React from "react";

//Icons
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <form className="flex items-center ">
      <FiSearch />
      <input
        type={"text"}
        className="outline-none px-2 font-medium"
        placeholder="Search for places..."
      />
    </form>
  );
};

export default Search;
