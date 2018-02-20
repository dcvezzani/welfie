import React, { Component } from "react";
import LandingPage from "./landingpage/LandingPage";
import DashboardHost from "./dashboard/DashboardHost";
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
    const { activeView } = this.state;
    const landingPage = <LandingPage showDashboard={this.showDashboard} />;
    const dashboard = <DashboardHost />;
    return (
      <div className="App">
        {activeView === views.DASHBOARD ? dashboard : landingPage}
      </div>
    );
  }
}

export default App;
