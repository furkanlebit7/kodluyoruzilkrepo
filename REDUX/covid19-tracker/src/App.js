import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import "./App.css";
import Boxes from "./Components/Boxes/Boxes";
import Chart from "./Components/Chart/Chart";
import Dropdown from "./Components/Dropdown/Dropdown";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { fetchData } from "./Redux/Services/CovidService";

function App() {
  const dispatch = useDispatch();

  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    dispatch(fetchData(selectedCountry));
  }, [dispatch, selectedCountry]);

  return (
    <AppStyled>
      <Container>
        <Header />
        <Boxes />
        <Dropdown setSelectedCountry={setSelectedCountry} />
        <Chart selectedCountry={selectedCountry} />
      </Container>
      <Footer />
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
  padding: 50px 0px;
  background: linear-gradient(
    34deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(251, 247, 255, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );
`;
const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
