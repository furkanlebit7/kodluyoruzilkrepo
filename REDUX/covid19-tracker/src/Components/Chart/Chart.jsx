import React from "react";
import styled from "styled-components";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

function Chart({ selectedCountry }) {
  return (
    <Charts>
      {selectedCountry === "" ? (
        <LineChart />
      ) : (
        <BarChart selectedCountry={selectedCountry} />
      )}
    </Charts>
  );
}

export default Chart;

const Charts = styled.div`
  width: 100%;
`;
