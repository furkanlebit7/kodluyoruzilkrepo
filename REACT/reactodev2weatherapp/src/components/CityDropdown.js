import { useCity } from "../data/Cities";
import "./dropdown.css";

function CityDropdown({ currentCity, setCurrentCity }) {
  const city = useCity();
  const handleChange = (e) => {
    setCurrentCity(e.target.value);
  };

  return (
    <div>
      <select name="cities" class="cities" onChange={handleChange}>
        {city.map((c) =>
          c.name === currentCity ? (
            <option className="option" value={c.name} selected>
              {c.name}
            </option>
          ) : (
            <option className="option" value={c.name}>
              {c.name}
            </option>
          )
        )}
      </select>
    </div>
  );
}

export default CityDropdown;
