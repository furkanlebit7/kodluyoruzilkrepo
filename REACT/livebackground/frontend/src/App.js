import { useEffect, useState } from "react";
import "./App.css";
import Palette from "./components/Palette";
import { init, subscribe } from "./socketApi";

function App() {
  const [activeColor, setActiveColor] = useState("#282c34");
  useEffect(() => {
    init();

    subscribe((color) => {
      setActiveColor(color);
    });
  }, []);
  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <h1>{activeColor}</h1>
      <Palette activeColor={activeColor} />
    </div>
  );
}

export default App;
