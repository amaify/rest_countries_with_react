import React, { Component } from "react";

import ArrowLeft from "../components/svg/arrowLeft";
import ArrowLeftLight from "../components/svg/arrowLeftLight";

import { Link } from "react-router-dom";
import Aux from "../hoc/aux";
import "../assets/scss/main.css";

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.location.data,
      theme: this.props.themeMode,
      countries: [],
      url: "https://restcountries.eu/rest/v2/all"
    };
  }

  componentDidMount() {
    this.getData();
  }

  changeDetails = alpha3Code => {
    let tempDetails = [...this.state.countries];
    const details = tempDetails.find(de => de.alpha3Code === alpha3Code);
    this.setState({ data: details });
  };

  goBackHandler = () => {
    this.props.history.push("/");
  };

  getData = async () => {
    const response = await fetch(this.state.url);
    const resData = await response.json();

    resData.forEach(country => {
      return (country.population = this.formatNumbersWithComma(
        country.population
      ));
    });

    this.setState({ countries: resData });
  };

  formatNumbersWithComma = num =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  render() {
    const { data, theme } = this.state;
    let details = data;
    let detail;
    let message;

    return (
      <Aux>
        <div className="details">
          <div
            onClick={this.goBackHandler}
            className={theme ? "details__backBtn" : "details__backBtn-two"}
          >
            {theme ? <ArrowLeft /> : <ArrowLeftLight />}
            <p>Back</p>
          </div>
          {details
            ? (detail = (
                <div
                  className={
                    theme ? "details__content" : "details__content-two"
                  }
                >
                  <div
                    className={
                      theme
                        ? "details__content-image"
                        : "details__content-two-image"
                    }
                  >
                    <img src={details.flag} alt={`${details.name}'s Flag`} />
                  </div>
                  <div className="details__items">
                    <h1
                      className={
                        theme ? "details__heading" : "details__heading-two"
                      }
                    >
                      {details.name}
                    </h1>
                    <div className="details__lists">
                      <ul className="details__list">
                        <li>
                          <strong>Native Name</strong>: {details.nativeName}
                        </li>
                        <li>
                          <strong>Population</strong>: {details.population}
                        </li>
                        <li>
                          <strong>Region</strong>: {details.region}
                        </li>
                        <li>
                          <strong>Sub-Region</strong>: {details.subregion}
                        </li>
                        <li>
                          <strong>Capital</strong>: {details.capital}
                        </li>
                      </ul>
                      <ul className="details__list2">
                        <li>
                          <strong>Top Level Domain</strong>:{" "}
                          {details.topLevelDomain}
                        </li>
                        <li>
                          <strong>Currencies</strong>:{" "}
                          {details.currencies.map(cu => cu.name).join(", ")}
                        </li>
                        <li>
                          <strong>Languages</strong>:{" "}
                          {details.languages.map(la => la.name).join(", ")}
                        </li>
                      </ul>
                    </div>

                    <div className="borders">
                      <h2
                        className={
                          theme ? "borders__heading" : "borders__heading-two"
                        }
                      >
                        Border Countries:{" "}
                      </h2>
                      <ul
                        className={
                          theme ? "borders__items" : "borders__items-two"
                        }
                      >
                        {details.borders.map((b, i) => (
                          <Link
                            to={`${b}`}
                            onClick={() => this.changeDetails(b)}
                            key={i}
                            className={
                              theme
                                ? "borders__items-links"
                                : "borders__items-links-two"
                            }
                          >
                            {b}
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            : (message = (
                <h1 className="details__instruction">
                  No country selected, click the back button and choose a
                  country!
                </h1>
              ))}
        </div>
      </Aux>
    );
  }
}

export default CountryDetails;
