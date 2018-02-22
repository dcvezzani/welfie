import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleColumnCard from "../components/SingleColumnCard";
import { Box, CardFooter, CardFooterItem, Button } from "bloomer";
import FAIcon from "../../common/FAIcon";
import { thirdPartyText } from "../../constants";
import ReactTooltip from "react-tooltip";

class BasicsCard extends Component {
  render() {
    const footer = (
      <CardFooter>
        <CardFooterItem>
          <Button isColor="primary" isOutlined data-tip={thirdPartyText}>
            <FAIcon iconType="exclamation-triangle" />
            Learn More
          </Button>
        </CardFooterItem>
        <CardFooterItem>
          <Button isColor="primary" data-tip={thirdPartyText}>
            <FAIcon iconType="exclamation-triangle" />
            Get PLFS Blue
          </Button>
        </CardFooterItem>
      </CardFooter>
    );
    const content =
      "The starter financial wellness service package provides some basic & compassionate tools to help put you on the path to improvement";
    return (
      <SingleColumnCard
        title="Get the basics"
        className="card-short blue-top"
        subtitleText="$500 one time"
        footerContent={footer}
      >
        <Box>{content}</Box>
      </SingleColumnCard>
    );
  }
}

BasicsCard.propTypes = {};

export default BasicsCard;
