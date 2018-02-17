import React, { Component } from "react";
import NavBar from "./components/Navbar";
import {
  Title,
  Hero,
  HeroHeader,
  HeroBody,
  Container,
  Column,
  Columns
} from "bloomer";

import "./LandingPage.css";

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
                <Column isSize={5} isOffset={7}>
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
