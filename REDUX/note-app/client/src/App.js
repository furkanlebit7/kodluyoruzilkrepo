import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Forms from "./components/Form";
import Search from "./components/Search";
import Notes from "./components/Notes";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [filterKey, setFilterKey] = useState("");

  return (
    <div className="App m-5 container mx-auto">
      <div className=" row">
        <Header />
        <Forms />
        <Search filterKey={filterKey} setFilterKey={setFilterKey} />
        <Notes filterKey={filterKey} />
      </div>
    </div>
  );
}

export default App;
