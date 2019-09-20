import React from "react";
import InputSearch from "./searchInput/inputSearch";
import Filter from "./searchInput/filterSearch.js";
import "../assets/scss/main.css";

const searchField = ({ onChange, regions, filtering, theme }) => {
  return (
    <form className="form">
      <InputSearch change={onChange} theme={theme} />
      <Filter regions={regions} filter={filtering} theme={theme} />
    </form>
  );
};

export default searchField;
