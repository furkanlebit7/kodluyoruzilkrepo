import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="character/:char_id" element={<Detail />} />
        <Route path="quotes" element={<Quotes />} exact />
        <Route path="quotes/:quote_id" element={<QuoteDetail />} />
      </Routes>
    </div>
  );
}

export default App;
