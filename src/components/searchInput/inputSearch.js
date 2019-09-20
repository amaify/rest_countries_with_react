import React from "react";
import SvgLight from "../svg/searchSvg";
import SvgDark from "../svg/searchDark";

const SearchInput = ({ change, theme }) => {
  return (
    <div className={theme ? "form__search" : "form__search-two"}>
      {theme ? <SvgLight /> : <SvgDark />}
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for country here"
        onChange={e => change(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchInput;
