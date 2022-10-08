import './App.css';
import Header from './components/Header';
import Market from './components/Market';
import Money from './components/Money';
import Profile from './components/Profile';
import Receipt from './components/Receipt';

import { useSelector } from "react-redux";


function App() {

    const money = useSelector((state)=>state.bank.money);


  return (
    <div className="App gr-bg">
     <Header/>
      <div className='container'>
        <Profile />
        <Money />
        <Market />
       {money !== 100000000000? <Receipt />:""}
     </div>
    </div>
  );
}

export default App;
