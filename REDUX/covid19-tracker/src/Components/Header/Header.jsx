import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <div>
      <div>
        <img src={require("../../Assets/Images/logo.png")} alt="covid-19" />
      </div>
      <Text>
        <b>Global and Country Wise Cases of Corona Virus</b>
      </Text>
      <Text>
        <em>(For a Particular country, select a Country from below)</em>
      </Text>
    </div>
  );
}

export default Header;

export const Text = styled.div`
  margin: 10px 0px;
`;
