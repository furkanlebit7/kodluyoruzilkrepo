import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="character/:char_id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
