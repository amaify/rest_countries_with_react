import React, { Component } from "react";
import Arrowdown from "../svg/angleDown";
import ArrowUp from "../svg/angleUp";
import ArrowUpLight from "../svg/angleUpLight";
import ArrowDownLight from "../svg/angleDownLight";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      label: "Filter by Region"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prev => ({ visible: !prev.visible }));
  }

  changeLabelHandler = item => {
    if (item === "All") {
      this.setState({ label: "Filter by Region" }, () => {
        this.handleClick();
        this.props.filter(this.state.label);
      });
    } else {
      this.setState({ label: item }, () => {
        this.handleClick();
        this.props.filter(this.state.label);
      });
    }
  };

  render() {
    const { regions, theme } = this.props;
    let tempCountries = regions;
    tempCountries = tempCountries.map(reg => reg.region);

    function getRegion(arr) {
      return arr.filter((e, i) => arr.indexOf(e) >= i);
    }
    let region;

    region = getRegion(tempCountries)
      .filter(el => el !== "")
      .sort();
    const filterList = ["All", ...region];

    return (
      <div className={theme ? "form__select" : "form__select-two"}>
        <div
          className={theme ? "form__regions" : "form__regions-two"}
          onClick={this.handleClick}
        >
          <p>{this.state.label}</p>
          {this.state.visible ? (
            theme ? (
              <ArrowUp />
            ) : (
              <ArrowUpLight />
            )
          ) : theme ? (
            <Arrowdown />
          ) : (
            <ArrowDownLight />
          )}
        </div>
        {this.state.visible ? (
          <ul
            className={
              theme ? "form__regions-list" : "form__regions-two-list-two"
            }
          >
            {filterList.map((reg, i) => (
              <li
                key={i}
                value={reg}
                onClick={() => this.changeLabelHandler(reg)}
              >
                {reg}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Filter;
