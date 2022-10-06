import './App.css';
import Header from './Header';
import Market from './Market';
import Money from './Money';
import Profile from './Profile';

function App() {
  return (
    <div className="App gr-bg">
     <Header/>
      <div className='container'>
        <Profile />
        <Money />
        <Market />
     </div>
    </div>
  );
}

export default App;
