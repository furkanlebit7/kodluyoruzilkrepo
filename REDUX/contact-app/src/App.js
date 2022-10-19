import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/Contacts";
import List from "./components/Contacts/List";
import Header from "./components/Contacts/Header";

function App() {
  return (
    <div className="App container">
      <Header />
      <Contacts />
      <List />
    </div>
  );
}

export default App;
