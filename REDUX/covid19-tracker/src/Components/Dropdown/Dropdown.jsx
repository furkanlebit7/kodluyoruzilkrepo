import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchCountries, fetchData } from "../../Redux/Services/CovidService";

function Dropdown() {
  const dispatch = useDispatch();

  const [country, setCountry] = useState("");

  const countries = useSelector((state) => state.covid.countries.countries);

  useEffect(() => {
    dispatch(fetchCountries(country));
  }, []);
  useEffect(() => {
    dispatch(fetchData(country));
  }, [country]);

  return (
    <StyledDropdown>
      <StyledSelect
        name="drop-down"
        id="drop-down"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </StyledSelect>
    </StyledDropdown>
  );
}

export default Dropdown;

const StyledDropdown = styled.div`
  width: 100%;
  text-align: center;
`;
const StyledSelect = styled.select`
  width: 40%;
  border: none;
  border-bottom: 2px solid black;
  font-size: 1rem;
  border-radius: 5px;
  padding: 5px 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
    border-color: blue;
  }
`;
