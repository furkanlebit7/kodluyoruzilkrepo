import React from "react";
import styled from "styled-components";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

function Chart() {
  return (
    <Charts>
      {/* <BarChart /> */}
      <LineChart />
    </Charts>
  );
}

export default Chart;

const Charts = styled.div`
  width: 100%;
`;
