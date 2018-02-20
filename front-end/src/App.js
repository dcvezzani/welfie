import React, { Component } from "react";
import LandingPage from "./landingpage/LandingPage";
import DashboardHost from "./dashboard/DashboardHost";
import { views } from "./constants";
import NavBar from "./landingpage/components/Navbar";
import "./welfie.css";
class App extends Component {
  state = {
    activeView: views.LANDING
  };
  showDashboard = () => {
    this.setState({
      activeView: views.DASHBOARD
    });
  };
  showLandingPage = () => {
    this.setState({
      activeView: views.LANDING
    });
  };
  render() {
    const { activeView } = this.state;
    const landingPage = <LandingPage showDashboard={this.showDashboard} />;
    const dashboard = <DashboardHost />;
    return (
      <div className="App">
        <NavBar showLandingPage={this.showLandingPage} />
        <div className="has-navbar-fixed-top">
          {activeView === views.DASHBOARD ? dashboard : landingPage}
        </div>
      </div>
    );
  }
}

export default App;
