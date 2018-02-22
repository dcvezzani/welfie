import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleColumnCard from "../components/SingleColumnCard";
import { Player, BigPlayButton } from "video-react";
import { CardFooterItem, Button, CardFooter } from "bloomer";
import SmartDollarVideo from "./SmartDollarSmall.mp4";

class SmartDollar extends Component {
  render() {
    const footerButtons = (
      <CardFooter>
        <CardFooterItem>
          <Button isColor="primary">Login & LEARN</Button>
        </CardFooterItem>
        <CardFooterItem>
          <Button isColor="primary" isOutlined>
            Request Access
          </Button>
        </CardFooterItem>
      </CardFooter>
    );
    return (
      <SingleColumnCard
        title="Smartdollar&copy;"
        subtitleText="Powered by Ramsey Solutions"
        footerContent={footerButtons}
      >
        <Player
          ref="smartDollar"
          src={SmartDollarVideo}
          poster="http://i.stack.imgur.com/PtbGQ.png"
        >
          <BigPlayButton />
        </Player>
      </SingleColumnCard>
    );
  }
}

SmartDollar.propTypes = {};

export default SmartDollar;
