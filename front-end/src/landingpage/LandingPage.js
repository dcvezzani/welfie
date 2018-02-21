import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Title,
  Hero,
  HeroHeader,
  HeroBody,
  Container,
  Column,
  Columns,
  Button,
  Section,
  Modal,
  ModalContent,
  ModalClose,
  ModalBackground
} from "bloomer";
import { Player, BigPlayButton } from "video-react";
import FAIcon from "../common/FAIcon";

import "./LandingPage.css";
import "../../node_modules/video-react/dist/video-react.css";
import WelfieMovie from "./welfie.mov";

class LandingPage extends Component {
  state = {
    videoIsPlaying: false
  };

  playVideo = () => {
    this.setState({ videoIsPlaying: true });
    this.refs.player.play();
  };

  closeVideo = () => {
    this.refs.player.pause();
    this.setState({ videoIsPlaying: false });
  };

  render() {
    const { showDashboard } = this.props;
    const { videoIsPlaying } = this.state;
    const playerIcon = (
      <div className="play-button-container" onClick={this.playVideo}>
        <FAIcon
          iconType="play-circle"
          size="large"
          extraClasses="play-button"
        />
      </div>
    );
    const videoPlayer = (
      <Modal isActive={videoIsPlaying}>
        <ModalBackground />
        <ModalContent>
          <Player ref="player" src={WelfieMovie}>
            <BigPlayButton />
          </Player>
        </ModalContent>
        <ModalClose isSize="large" onClick={this.closeVideo} />
      </Modal>
    );

    const textBlock = (
      <Section className="text-block">
        <Title isSize={5}>
          Promoting financial wellness tools that help you
        </Title>
        <Title isSize={1} className="heroTitle">
          live more
        </Title>
        <Title isSize={2} className="heroTitle">
          & worry less
        </Title>
      </Section>
    );

    const actionBlock = (
      <Section>
        <Button isSize="large" isColor="primary">
          <Link to="/dashboard">Get Started</Link>
        </Button>
        <p>(no payment required)</p>
        <br />
        <br />
        {playerIcon}
        {videoPlayer}
      </Section>
    );

    return (
      <Hero isSize="medium" isColor="white" isFullHeight>
        <HeroHeader>
          <HeroBody className="has-navbar-fixed-top">
            <Container hasTextAlign="centered">
              <Columns>
                <Column
                  className="heroColumn"
                  isSize={{
                    tablet: 12,
                    desktop: 5
                  }}
                  isOffset={{
                    tablet: 0,
                    desktop: 7
                  }}
                >
                  {textBlock}
                  {actionBlock}
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
