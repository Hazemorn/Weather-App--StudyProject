import s from "./PlaceSelector.module.scss";
import getDate from "../../hooks/getDate";
import { useState } from "react";
import type { SubmitEvent } from "react";

interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const PlaceSelector: React.FC<SearchProps> = ( {setSearch}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const dateNow: string = getDate();

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue === "") {
      setError("Please, enter the name of the city");
      return;
    }
    setSearch(trimmedValue);
    setError("");
  };

  return (
    <header>
        <div className={s.dashboard_header}>
          <div className={s.dashboard_header__info}>
            <h1 className={s.dashboard_header__logo}>Weather Forecast</h1>
            <h3>{dateNow}</h3>
          </div>
          <form onSubmit={handleSubmit} className={s.dashboard_header__search}>
            <input
              type="search"
              placeholder="Search city"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              maxLength={70}
              style={{ borderColor: error ? "red" : "initial" }}
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
