import { useState } from "react";
import "./App.css";
import CityDropdown from "./components/CityDropdown";
import Weather from "./components/weather/Weather";
import { CityProvider } from "./data/Cities";

function App() {
  const [currentCity, setCurrentCity] = useState("İstanbul");
  return (
    <CityProvider>
      <div className="container">
        <CityDropdown
          currentCity={currentCity}
          setCurrentCity={setCurrentCity}
        />
        <Weather currentCity={currentCity} />
      </div>
    </CityProvider>
  );
}

export default App;
