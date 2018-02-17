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
  Image,
  Button,
  Delete
} from "bloomer";
import { Player, BigPlayButton } from "video-react";
import FAIcon from "../common/FAIcon";

import "./LandingPage.css";
import "../../node_modules/video-react/dist/video-react.css";
import WelfieLogo from "./logo.png";
import WelfieMovie from "./welfie.mov";

class LandingPage extends Component {
  state = {
    playIconHovered: false,
    videoIsPlaying: false
  };

  highlightPlayIcon = () => {
    this.setState({ playIconHovered: true });
  };

  normalPlayIcon = () => {
    this.setState({ playIconHovered: false });
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
    const slogan =
      "Promoting financial wellness tools that help you live more and worry less.";
    const { playIconHovered, videoIsPlaying } = this.state;
    const playerIcon = (
      <div
        onMouseOver={this.highlightPlayIcon}
        onMouseOut={this.normalPlayIcon}
        onClick={this.playVideo}
        style={{ color: playIconHovered ? "#97C632" : "#000000" }}
        hidden={videoIsPlaying}
      >
        <FAIcon iconType="play-circle" size="large" />
      </div>
    );
    const videoPlayer = (
      <div hidden={!videoIsPlaying}>
        <Player ref="player" src={WelfieMovie} isFullScreen height={0}>
          <BigPlayButton />
        </Player>
        <br />
        <Button isColor="danger" isSize="small" onClick={this.closeVideo}>
          <Delete isSize="small" />
          Close Video
        </Button>
      </div>
    );
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
                  {playerIcon}
                  {videoPlayer}
                  <Title
                    isSize={1}
                    className="heroTitle"
                    hidden={videoIsPlaying}
                  >
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
