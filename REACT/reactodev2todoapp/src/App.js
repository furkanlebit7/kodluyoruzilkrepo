import React from "react";

import "./App.css";

import Footer from "./components/Footer/Footer";
import ToDo from "./components/ToDo/ToDo";

function App() {
  return (
    <div className="App">
      <ToDo />
      <Footer />
    </div>
  );
}

export default App;
