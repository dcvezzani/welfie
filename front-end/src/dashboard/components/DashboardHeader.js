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
                <Title isSize={2}>Hi {user}, welcome back!</Title>
                <br />
                <Title isSize={3}>
                  How can we help you improve your financial wellness?
                </Title>
              </Column>
              <Column isSize={4} isOffset={3} hasTextAlign="right">
                <div className="ad-text">
                  A valuable benefit provided courtesy of
                </div>
                <img src={adImageSource} alt="Sponsor Logo" />
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
