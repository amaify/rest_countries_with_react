import React, { Component } from "react";

import Aux from "../hoc/aux";
import Home from "../pages/home";

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      filteredCountries: [],
      renderedCountries: [],
      searchQuery: "",
      error: "loading",
      filterBy: null,
      url: "https://restcountries.com/v2/all"
    };

    this.searchInputHandler = this.searchInputHandler.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const data = await fetch(this.state.url);
    const response = await data.json();

    response.forEach(item => {
      return (item.population = this.formatNumbersWithComma(item.population));
    });

    try {
      if (response.length === 0) {
        this.setState({ error: "Oops could not fetch data" });
      } else {
        this.setState({
          countries: response,
          filteredCountries: response,
          renderedCountries: response
        });
      }
    } catch (error) {
      return response.error("hello");
    }
  };

  getCountryDetails = alpha3Code => {
    let tempCountries = [...this.state.countries];

    const countryDetail = tempCountries.find(
      country => country.alpha3Code === alpha3Code
    );
    return countryDetail;
  };

  searchInputHandler = query => {
    let tempCountries = [...this.state.filteredCountries];

    if (this.state.searchQuery) {
      tempCountries = tempCountries.filter(country => {
        const cl = country.name.toLowerCase();
        const el = query.toLowerCase();

        return cl.includes(el);
      });
    }
    this.setState({ renderedCountries: tempCountries, searchQuery: query });
  };

  filterByLabel = label => {
    let tempCountries = [...this.state.countries];

    if (label !== "Filter by Region") {
      tempCountries = tempCountries.filter(country => country.region === label);
    }
    this.setState({
      filteredCountries: tempCountries,
      renderedCountries: tempCountries,
      filterBy: label
    });
  };

  formatNumbersWithComma = num =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  render() {
    return (
      <Aux>
        <Home
          onChange={this.searchInputHandler}
          regions={this.state.countries}
          filtering={this.filterByLabel}
          cardDetails={this.state.renderedCountries}
          countryDetails={this.getCountryDetails}
          theme={this.props.themeMode}
        />
      </Aux>
    );
  }
}

export default Countries;
