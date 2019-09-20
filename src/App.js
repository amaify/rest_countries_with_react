import React, { Component } from "react";
import "./assets/scss/main.css";

import { Switch, Route } from "react-router-dom";
import Countries from "./container/countries";
import CountryDetails from "./pages/details";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    darkMode: true
  };

  componentDidMount() {
    this.changeBackground();
  }

  changeTheme = () => {
    this.setState(
      prev => ({
        darkMode: !prev.darkMode
      }),
      this.changeBackground
    );
  };

  changeBackground() {
    const mode = this.state.darkMode;
    if (mode) {
      return (document.body.style.background = "#202c36");
    } else {
      return (document.body.style.background = "#fff");
    }
  }

  render() {
    return (
      <div>
        <NavBar click={this.changeTheme} themeMode={this.state.darkMode} />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Countries themeMode={this.state.darkMode} />}
          />
          <Route
            path="/:alpha3Code"
            render={props => (
              <CountryDetails themeMode={this.state.darkMode} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
