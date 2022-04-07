import React from "react";

function Search({ filterKey, setFilterKey }) {
  return (
    <div className="col-4 mt-5">
      <input
        type="text"
        value={filterKey}
        className="form-control"
        id="exampleFormControlInput2"
        placeholder="Search Note"
        onChange={(e) => {
          setFilterKey(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
