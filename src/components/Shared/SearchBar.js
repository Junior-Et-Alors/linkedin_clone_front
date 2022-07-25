/* 
Le composant home :

import { useEffect, useState } from "react";

const Home = () => {
  const [type, setType] = useState("people");
  return (
    <div className="home">
      <header>
        <SearchBar type={type} />
      </header>
    </div>
  );
};

const SearchBar = ({ type }) => {

  const handleChange = (type) => {

  }

  return (
    <div className={searchBarType}>
      {type === "truc" && (
        <form onChange={() => handleChange(type)}>
          <input />
        </form>
      )}
    </div>
  );
};

export default SearchBar; */
