import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleColumnCard from "../components/SingleColumnCard";
import { Box, Tag, CardFooter, CardFooterItem, Button } from "bloomer";
import FAIcon from "../../common/FAIcon";
import WarningIcon from "../../common/WarningIcon";
import { thirdPartyText } from "../../constants";

class AdviceSupportCard extends Component {
  render() {
    const footer = (
      <CardFooter>
        <CardFooterItem>
          <Button data-tip={thirdPartyText} className="platinum" isOutlined>
            <WarningIcon />
            Learn More
          </Button>
        </CardFooterItem>
        <CardFooterItem>
          <Button
            data-tip={thirdPartyText}
            className="platinum"
            isColor="light"
          >
            <WarningIcon />
            Get PLFS Platinum
          </Button>
        </CardFooterItem>
      </CardFooter>
    );
    const content = (
      <div>
        All the benefits of{" "}
        <Tag isColor="warning" className="gold">
          Gold
        </Tag>{" "}
        <em>PLUS</em> your very own licensed professional sounding-board for
        questions, answers and direction
      </div>
    );
    return (
      <SingleColumnCard
        title="Advice/Support"
        className="card-short platinum-top"
        subtitleText="From $299/year"
        footerContent={footer}
      >
        <Box>{content}</Box>
      </SingleColumnCard>
    );
  }
}

AdviceSupportCard.propTypes = {};

export default AdviceSupportCard;
