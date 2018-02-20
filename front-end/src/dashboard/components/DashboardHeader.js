import React, { Component } from "react";
import PropTypes from "prop-types";
import { Hero, Title, HeroBody, Container, Columns, Column } from "bloomer";

import "./DashboardHeader.css";

class DashboardHeader extends Component {
  render() {
    const { user, adImageSource } = this.props;
    return (
      <Hero isColor="success">
        <HeroBody>
          <Container>
            <Columns>
              <Column isSize="5/12">
                <Title isSize={2}>Hi {user}, welcome back!</Title>
                <br />
                <Title isSize={3}>
                  How can we help you improve your financial wellness?
                </Title>
              </Column>
              <Column isSize="5/12" isOffset="1/6" hasTextAlign="right">
                <div className="ad-text">
                  A valuable benefit provided courtesy of
                </div>
                <img src={adImageSource} />
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
