import axios from "axios";
import { useState, useEffect } from "react";
import Item from "./Item";
import ResidentInfo from "./ResidentInfo";
import "../css/container.css";
import "../css/banner.css";
import "../css/pagination.css";

const Location = () => {
  const [location, setLocation] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  useEffect(() => {
    const locationRandom = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${locationRandom}`)
      .then((response) => setLocation(response.data));
  }, []);

  useEffect(() => {
    if (searchValue !== "") {
      axios
        .get(`https://rickandmortyapi.com/api/location/?name=${searchValue}`)
        .then((response) => setLocationSuggestions(response.data.results));
    } else {
      setLocationSuggestions([]);
    }
  }, [searchValue]);

  const [page, setPage] = useState(1);
  const lastIndex = page * 10;
  const firstIndex = lastIndex - 10;

  const pagination = location.residents?.slice(firstIndex, lastIndex);

  const lastPage = Math.ceil(location.residents?.length / 10);

  const numbers = [];

  for (let i = 0; i <= lastPage; i++) {
    numbers.push(i);
  }

  document.body.style = "background: #05292e";

  return (
    <div className="containter">
        <div className="banner">
            <div className="title"></div>
            <div className="search">
                <input
                    type="text"
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    placeholder="type a location name or id"
                />
            </div>

        </div>

        <div>
            {locationSuggestions.map(locationSugges => (
                <div className="searh-input" onClick={() => setLocation(locationSugges)}>{locationSugges.name}</div>
            ))}
        </div>

        <div>
            <h1 className="name">{location.name}</h1>
        </div>

        <div>
            <ul className="location">
            <Item location={location} key={location.name} />
            </ul>

            <div className="pagination">
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                Prev
            </button>
            {numbers.map((number) => (
                <button onClick={() => setPage(number)}>{number}</button>
            ))}
            <button
                onClick={() => setPage(page + 1)}
                disabled={page === lastPage}
            >
                Next
            </button>
            </div>

            <ul className="item-list">
            {pagination?.map((rikMorty) => (
                <ResidentInfo rikMorty={rikMorty} key={rikMorty} />
            ))}
            </ul>
        </div>
    </div>
  );
};

export default Location;
