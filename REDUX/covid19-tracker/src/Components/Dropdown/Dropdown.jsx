import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchCountries } from "../../Redux/Services/CovidService";
import { getCountries } from "../../Redux/Slice/CovidSlice";

function Dropdown({ setSelectedCountry }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const countries = useSelector(getCountries);

  return (
    <StyledDropdown>
      <StyledSelect
        name="drop-down"
        id="drop-down"
        onChange={(e) => {
          setSelectedCountry(e.target.value);
        }}
      >
        <option value="">Global</option>
        {countries &&
          countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
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
