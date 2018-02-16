import React, { Component } from "react";
import NavBar from "./components/Navbar";
import { Title } from "bloomer";

import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    const slogan =
      "Promoting financial wellness tools that help you live more and worry less.";
    return (
      <section className="hero is-info is-fullheight">
        <div className="hero-head">
          <NavBar />
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-5 is-offset-7">
              <Title isSize={1} className="heroTitle">
                {slogan}
              </Title>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LandingPage;
