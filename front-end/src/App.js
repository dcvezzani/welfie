import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./landingpage/LandingPage";
import DashboardHost from "./dashboard/DashboardHost";
import { views } from "./constants";
import NavBar from "./landingpage/components/Navbar";
import ConciergeModal from "./common/ConciergeModal";
import "./welfie.css";
class App extends Component {
  state = {
    conciergeModalIsActive: false
  };

  openConciergeModal = () => {
    this.setState({ conciergeModalIsActive: true });
  };

  closeConciergeModal = () => {
    this.setState({ conciergeModalIsActive: false });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar openConciergeModal={this.openConciergeModal} />
          <ConciergeModal
            isActive={this.state.conciergeModalIsActive}
            closeModal={this.closeConciergeModal}
          />
          <div className="has-navbar-fixed-top">
            <Route exact path="/" component={LandingPage} />
            <Route path="/dashboard" component={DashboardHost} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
