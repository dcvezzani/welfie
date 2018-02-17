import React, { Component } from "react";
import NavBar from "./components/Navbar";
import {
  Title,
  Hero,
  HeroHeader,
  HeroBody,
  Container,
  Column,
  Columns,
  Image
} from "bloomer";

import "./LandingPage.css";
import WelfieLogo from "./logo.png";
import FAIcon from "../common/FAIcon";

class LandingPage extends Component {
  state = {
    playIconHovered: false
  };

  highlightPlayIcon = () => {
    this.setState({ playIconHovered: true });
  };

  normalPlayIcon = () => {
    this.setState({ playIconHovered: false });
  };
  render() {
    const slogan =
      "Promoting financial wellness tools that help you live more and worry less.";
    const { playIconHovered } = this.state;
    return (
      <Hero isSize="medium" isColor="white" isFullHeight>
        <HeroHeader>
          <NavBar />
          <HeroBody>
            <Container hasTextAlign="centered">
              <Columns>
                <Column
                  isSize={{
                    tablet: 12,
                    desktop: 5
                  }}
                  isOffset={{
                    tablet: 0,
                    desktop: 7
                  }}
                >
                  <div
                    onMouseOver={this.highlightPlayIcon}
                    onMouseOut={this.normalPlayIcon}
                    style={{ color: playIconHovered ? "#97C632" : "#000000" }}
                  >
                    <FAIcon iconType="play-circle" size="large" />
                  </div>
                  <Title isSize={1} className="heroTitle">
                    {slogan}
                  </Title>
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </HeroHeader>
      </Hero>
    );
  }
}

export default LandingPage;
