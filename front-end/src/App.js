import React, { Component } from "react";
import LandingPage from "./landingpage/LandingPage";
import { views } from "./constants";

class App extends Component {
  state = {
    activeView: views.LANDING
  };
  showDashboard = () => {
    this.setState({
      activeView: views.DASHBOARD
    });
  };
  render() {
    return (
      <div className="App">
        <LandingPage showDashboard={this.showDashboard} />
      </div>
    );
  }
}

export default App;
