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

class LandingPage extends Component {
  render() {
    const slogan =
      "Promoting financial wellness tools that help you live more and worry less.";
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
