import s from "./PlaceSelector.module.scss";
import getDate from "../../services/getDate";
import { useState } from "react";
import type { SubmitEvent } from "react";
import type { WeatherResponse } from "../../store/types/types";



interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  response: WeatherResponse;
}


const PlaceSelector: React.FC<SearchProps> = ( {setSearch, response}) => {    
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const dateNow: string = getDate();

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue.length === 0) {
      setError("Please, enter the name of the city");
      return;
    }
    setSearch(trimmedValue);
    setError("Search city");
  };

  const hasError: boolean = !!(error || (response && response.cod !== 200 && response.message));
  const placeholderText: string = hasError ? (error || response.message) : "search city";

  return (
    <header>
        <div className={s.dashboard_header}>
          <div className={s.dashboard_header__info}>
            <h1 className={s.dashboard_header__logo}>Weather Forecast</h1>
            <h3>{dateNow}</h3>
          </div>
          <form onSubmit={handleSubmit} className={s.dashboard_header__search} style={{ borderColor: hasError && !inputValue ? "red" : "initial" }}>
            <input
              type="search"
              placeholder={placeholderText}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              maxLength={70}    
            />
            <button type="submit">
              <img src="/magnifier.svg" alt="magnifier" />
            </button>
          </form>
        </div>
    </header>
  );
};

export default PlaceSelector;
