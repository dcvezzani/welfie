import React, { Component } from "react";
import PropTypes from "prop-types";
import { Hero, Title, HeroBody, Container, Columns, Column } from "bloomer";

import "./DashboardHeader.css";

class DashboardHeader extends Component {
  render() {
    const { user, adImageSource } = this.props;
    return (
      <Hero isColor="success" className="extended-hero">
        <HeroBody>
          <Container>
            <Columns>
              <Column isSize={5}>
                <h1 className="title nav-title">Dashboard</h1>
              </Column>
              <Column isSize={5}>
                <p className="welcome">Welcome, {user}!</p>
              </Column>
              <Column isSize={2}>
                <img
                  className="ad-image"
                  src={adImageSource}
                  alt="Sponsor Logo"
                />
              </Column>
            </Columns>
          </Container>
        </HeroBody>
      </Hero>
    );
  }
}

DashboardHeader.propTypes = {};

export default DashboardHeader;
