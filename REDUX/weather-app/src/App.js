import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import { fetchCity } from "./Redux/Services/WeatherService";

function App() {
  const dispatch = useDispatch();

  const [theme, setTheme] = useState(true);

  useEffect(() => {
    theme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  useEffect(() => {
    dispatch(fetchCity("mersin"));
  });

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
