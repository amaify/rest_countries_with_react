import React from "react";

import Aux from "../hoc/aux";
import SearchBar from "../components/search";
import Body from "../components/card";

const Home = ({
  onChange,
  regions,
  filtering,
  cardDetails,
  countryDetails,
  theme
}) => {
  return (
    <Aux>
      <SearchBar
        onChange={onChange}
        regions={regions}
        filtering={filtering}
        theme={theme}
      />
      <Body
        cardDetails={cardDetails}
        countryDetails={countryDetails}
        theme={theme}
      />
    </Aux>
  );
};

export default Home;
