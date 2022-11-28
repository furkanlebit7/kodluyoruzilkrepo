import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { getData } from "../../Redux/Slice/CovidSlice";

function Boxes() {
  // const data = { lastUpdat: "2022-11-24T17:21:06.000Z" };

  const data = useSelector(getData);

  return (
    <>
      <BoxesStyled>
        <BoxStyled border={"#576BFE"} background={"#B0D7FD"}>
          <StyledCardHeader>
            <b>{"Infected"}</b>
          </StyledCardHeader>
          <Styledh5>
            {data.confirmed && (
              <CountUp
                start={0}
                end={data.confirmed.value}
                duration={2}
                separator=","
              />
            )}
          </Styledh5>
          <p>Last Updated at :</p>
          <LightText>{new Date(data.lastUpdate).toDateString()}</LightText>
          <LightText>
            {new Date(data.lastUpdate).toLocaleTimeString()}
          </LightText>
          <Smalltext>Number of infect cases of COVID-19</Smalltext>
          <p>{data.country}</p>
        </BoxStyled>

        <BoxStyled border={"#6EFA70"} background={"#DDF6E2"}>
          <StyledCardHeader>
            <b>{"Recovered"}</b>
          </StyledCardHeader>
          <Styledh5>
            {data.recovered && (
              <CountUp
                start={0}
                end={data.recovered.value}
                duration={2}
                separator=","
              />
            )}
          </Styledh5>
          <p>Last Updated at :</p>
          <LightText>{new Date(data.lastUpdate).toDateString()}</LightText>
          <LightText>
            {new Date(data.lastUpdate).toLocaleTimeString()}
          </LightText>
          <Smalltext>Number of recoveries from COVID-19</Smalltext>
          <p>{data.country}</p>
        </BoxStyled>

        <BoxStyled border={"#F96A6A"} background={"#F4D6D6"}>
          <StyledCardHeader>
            <b>{"Deaths"}</b>
          </StyledCardHeader>
          <Styledh5>
            {data.deaths && (
              <CountUp
                start={0}
                end={data.deaths.value}
                duration={2}
                separator=","
              />
            )}
          </Styledh5>
          <p>Last Updated at :</p>
          <LightText>{new Date(data.lastUpdate).toDateString()}</LightText>
          <LightText>
            {new Date(data.lastUpdate).toLocaleTimeString()}
          </LightText>
          <Smalltext>Number of deaths caused by COVID-19</Smalltext>
          <p>{data.country}</p>
        </BoxStyled>

        <BoxStyled border={"#F2E564"} background={"#F4E1C9"}>
          <StyledCardHeader>
            <b>{"Active"}</b>
          </StyledCardHeader>
          <Styledh5>
            {data.confirmed && (
              <CountUp
                start={0}
                end={
                  data.confirmed.value -
                  data.recovered.value -
                  data.deaths.value
                }
                duration={2}
                separator=","
              />
            )}
          </Styledh5>
          <p>Last Updated at :</p>
          <LightText>{new Date(data.lastUpdate).toDateString()}</LightText>
          <LightText>
            {new Date(data.lastUpdate).toLocaleTimeString()}
          </LightText>
          <Smalltext>Number of active cases of COVID-19</Smalltext>
          <p>{data.country}</p>
        </BoxStyled>
      </BoxesStyled>
    </>
  );
}

export default Boxes;

export const BoxesStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1250px) {
    width: 100%;
  }
  @media (max-width: 1280px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
const BoxStyled = styled.div`
  width: 250px;
  height: 250px;
  overflow: auto;
  background-color: ${(props) => props.background};
  border-bottom: 10px solid ${(props) => props.border};
  border-radius: 10px;
  padding: 30px;
  @media (max-width: 1280px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Styledh5 = styled.h5`
  font-size: 1.5rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.334;
  letter-spacing: 0em;
`;

const StyledCardHeader = styled.p`
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 0.35em;
  font-size: 1rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`;
const LightText = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
`;
const Smalltext = styled.p`
  font-size: 0.85rem;
`;
