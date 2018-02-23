import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./landingpage/LandingPage";
import DashboardHost from "./dashboard/DashboardHost";
import NavBar from "./common/Navbar";
import ConciergeModal from "./common/ConciergeModal";
import LoginModal from "./common/LoginModal";
import "./welfie.css";
class App extends Component {
  state = {
    conciergeModalIsActive: false,
    loginModalIsActive: false
  };

  openConciergeModal = () => {
    this.setState({ conciergeModalIsActive: true });
  };

  openLoginModal = () => {
    this.setState({ loginModalIsActive: true });
  };

  closeConciergeModal = () => {
    this.setState({ conciergeModalIsActive: false });
  };

  closeLoginModal = () => {
    this.setState({ loginModalIsActive: false });
  };
  render() {
    const { conciergeModalIsActive, loginModalIsActive } = this.state;
    return (
      <Router>
        <div className="App">
          <NavBar
            openConciergeModal={this.openConciergeModal}
            openLoginModal={this.openLoginModal}
          />
          <ConciergeModal
            isActive={conciergeModalIsActive}
            closeModal={this.closeConciergeModal}
          />
          <LoginModal
            isActive={loginModalIsActive}
            closeModal={this.closeLoginModal}
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
