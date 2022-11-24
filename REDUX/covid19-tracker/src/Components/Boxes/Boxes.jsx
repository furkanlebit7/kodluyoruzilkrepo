import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CountUp from "react-countup";

function Boxes() {
  const data = useSelector((state) => state.covid.data.data);

  return (
    <>
      {data && (
        <BoxesStyled>
          <BoxStyled border={"#576BFE"} background={"#B0D7FD"}>
            <StyledCardHeader>
              <b>{"Infected"}</b>
            </StyledCardHeader>
            <Styledh5>
              <CountUp
                start={0}
                end={data.confirmed.value}
                duration={2}
                separator=","
              />
            </Styledh5>
            <p>Last Updated at :</p>
            <LightText>{new Date(data.lastUpdat).toDateString()}</LightText>
            <LightText>
              {new Date(data.lastUpdat).toLocaleTimeString()}
            </LightText>
            <Smalltext>{"detail.bottomText"}</Smalltext>
            <p>Argentina</p>
          </BoxStyled>
          <BoxStyled border={"#6EFA70"} background={"#DDF6E2"}>
            <StyledCardHeader>
              <b>{"Recovered"}</b>
            </StyledCardHeader>
            <Styledh5>
              <CountUp
                start={0}
                end={data.recovered.value}
                duration={2}
                separator=","
              />
            </Styledh5>
            <p>Last Updated at :</p>
            <LightText>{new Date(data.lastUpdat).toDateString()}</LightText>
            <LightText>
              {new Date(data.lastUpdat).toLocaleTimeString()}
            </LightText>
            <Smalltext>{"detail.bottomText"}</Smalltext>
            <p>Argentina</p>
          </BoxStyled>
          <BoxStyled border={"#F96A6A"} background={"#F4D6D6"}>
            <StyledCardHeader>
              <b>{"Deaths"}</b>
            </StyledCardHeader>
            <Styledh5>
              <CountUp
                start={0}
                end={data.deaths.value}
                duration={2}
                separator=","
              />
            </Styledh5>
            <p>Last Updated at :</p>
            <LightText>{new Date(data.lastUpdat).toDateString()}</LightText>
            <LightText>
              {new Date(data.lastUpdat).toLocaleTimeString()}
            </LightText>
            <Smalltext>{"detail.bottomText"}</Smalltext>
            <p>Argentina</p>
          </BoxStyled>
          <BoxStyled border={"#F2E564"} background={"#F4E1C9"}>
            <StyledCardHeader>
              <b>{"Active"}</b>
            </StyledCardHeader>
            <Styledh5>
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
            </Styledh5>
            <p>Last Updated at :</p>
            <LightText>{new Date(data.lastUpdat).toDateString()}</LightText>
            <LightText>
              {new Date(data.lastUpdat).toLocaleTimeString()}
            </LightText>
            <Smalltext>{"detail.bottomText"}</Smalltext>
            <p>Argentina</p>
          </BoxStyled>
        </BoxesStyled>
      )}
    </>
  );
}

export default Boxes;

export const BoxesStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  @media (max-width: 1250px) {
    width: 100%;
  }
`;
const BoxStyled = styled.div`
  width: 240px;
  height: 280px;
  margin: 0 10px;
  background-color: ${(props) => props.background};
  border-bottom: 10px solid ${(props) => props.border};
  border-radius: 10px;
  padding: 30px;
  @media (max-width: 1450px) {
    width: 220px;
    height: 260px;
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
