import React, { Component } from "react";
import PropTypes from "prop-types";
import { Hero, Title, HeroBody, Container, Columns, Column } from "bloomer";

import "./DashboardFooter.css";

class DashboardFooter extends Component {
  render() {
    return (
      <Hero isColor="success" className="footer-hero">
        <HeroBody>
          <Container>
            <Columns>
              <Column isSize={12}>
                <div className="copyright">
                  <p className="copyright-title">Welfie Inc.</p>
                  <p>Copyright 2018, all rights reserved</p>
                </div>
              </Column>
            </Columns>
          </Container>
        </HeroBody>
      </Hero>
    );
  }
}

DashboardFooter.propTypes = {};

export default DashboardFooter;
