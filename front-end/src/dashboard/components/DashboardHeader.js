import React, { Component } from "react";
import PropTypes from "prop-types";
import { Hero, Title, HeroBody, Container, Columns, Column, Button } from "bloomer";
import ConciergeModal from "../../common/ConciergeModal";
import FAIcon from "../../common/FAIcon";

import "./DashboardHeader.css";

class DashboardHeader extends Component {
  state = {
      conciergeModalIsActive: false,
      loginModalIsActive: false
  };

  openConciergeModal = () => {
      this.setState({ conciergeModalIsActive: true });
  };

  closeConciergeModal = () => {
      this.setState({ conciergeModalIsActive: false });
  };
  
  render() {
    const { user, adImageSource } = this.props;
    const { conciergeModalIsActive } = this.state;

    return (
      <Hero isColor="success" className="extended-hero">
      
        <ConciergeModal
            isActive={conciergeModalIsActive}
            closeModal={this.closeConciergeModal}
        />
      
        <HeroBody>
          <Container>
            <Columns>
              <Column isSize={5}>
                <Button
                  className="concierge-button"
                  isColor="warning"
                  onClick={this.openConciergeModal}
                  isHidden="mobile"
                >
                  <FAIcon iconType="question-circle" />
                  Need Help? Ask our Concierge
                </Button>
                <Button
                  isColor="warning"
                  onClick={this.openConciergeModal}
                  isHidden={["tablet", "desktop", "widescreen"]}
                >
                  <FAIcon iconType="question-circle" />
                  Need Help?
                </Button>

              </Column>
              <Column isSize={5}>
                &nbsp;
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
