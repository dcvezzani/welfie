import React, { Component } from "react";
import _ from 'lodash';
import jwt from 'jsonwebtoken';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./landingpage/LandingPage";
import DashboardHost from "./dashboard/DashboardHost";
import NavBar from "./common/Navbar";
import ConciergeModal from "./common/ConciergeModal";
import LoginModal from "./common/LoginModal";
import { links } from './constants'
import "./welfie.css";

class App extends Component {
    state = {
        conciergeModalIsActive: false,
        loginModalIsActive: false, 
    };

    componentWillUnmount() {
        // alert(
        //   "You're leaving the welfie.co site now. The site you're going to are not under the control of Welfie and may require different terms and conditions."
        // );
    }

    openConciergeModal = () => {
        this.setState({ conciergeModalIsActive: true });
    };

    logout = () => {
      localStorage.removeItem('userEmail');
      localStorage.removeItem('token');
      window.location.href = '/';
    };

    openLoginModal = () => {
        // this.setState({ loginModalIsActive: true });
        const url = window.location.href.toString().split(/\?/)[0]
        window.location.href = `${links.AUTHENTICATION_BASE_URL}?page=${escape(url)}`;
    };

    closeConciergeModal = () => {
        this.setState({ conciergeModalIsActive: false });
    };

    closeLoginModal = () => {
        this.setState({ loginModalIsActive: false });
    };

    getEmail = () => {
        const md = window.location.search.match(/^\?token=([^&]+)$/)

        if (!_.isNil(md)) {
          const token = md[1];
          const userData = jwt.decode(token);
          // this.setState({ userEmail: userData.email });
          // this.state.userEmail = userData.email;
          localStorage.setItem('token', token);
          localStorage.setItem('userEmail', userData.email);
        }
        return localStorage.getItem('userEmail');
    };
    
    render() {
        const { conciergeModalIsActive, loginModalIsActive } = this.state;
        return (
            <Router basename="/">
                <div className="App">
                    <NavBar
                        getEmail={this.getEmail}
                        openConciergeModal={this.openConciergeModal}
                        openLoginModal={this.openLoginModal}
                        logout={this.logout}
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
