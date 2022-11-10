import "./App.css";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Text from "./components/Text/Text";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <hr />
        <Form />
        <Text />
      </div>
    </div>
  );
}

export default App;
