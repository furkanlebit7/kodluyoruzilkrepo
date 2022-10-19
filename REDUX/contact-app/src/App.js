import './App.css';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Contacts from './components/Contacts';
import List from './components/Contacts/List';

function App() {
  return (
    <div className="App container">
      <h1>Contacts</h1>
      <Contacts />
      <List />
    </div>
  );
}

export default App;
