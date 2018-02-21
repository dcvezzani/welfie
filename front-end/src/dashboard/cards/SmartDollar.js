import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleColumnCard from "../components/SingleColumnCard";
import { Player, BigPlayButton } from "video-react";
import { Section, Columns, Column, Button } from "bloomer";
import SmartDollarVideo from "./SmartDollarSmall.mp4";

class SmartDollar extends Component {
  render() {
    return (
      <SingleColumnCard
        title="Smartdollar&copy;"
        subtitleText="Powered by Ramsey Solutions"
      >
        <Player
          ref="smartDollar"
          src={SmartDollarVideo}
          poster="http://i.stack.imgur.com/PtbGQ.png"
        >
          <BigPlayButton />
        </Player>
        <Section hasTextAlign="centered">
          <Columns>
            <Column isSize="1/2">
              <Button isColor="primary">Login & LEARN</Button>
            </Column>
            <Column isSize="1/2">
              <Button isColor="primary" isOutlined>
                Request Access
              </Button>
            </Column>
          </Columns>
        </Section>
      </SingleColumnCard>
    );
  }
}

SmartDollar.propTypes = {};

export default SmartDollar;
