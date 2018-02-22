import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleColumnCard from "../components/SingleColumnCard";
import { Box, CardFooter, CardFooterItem, Button } from "bloomer";
import { thirdPartyText } from "../../constants";
import FAIcon from "../../common/FAIcon";
import ReactTooltip from "react-tooltip";

class CoachingCard extends Component {
  render() {
    const footer = (
      <CardFooter>
        <CardFooterItem>
          <Button isColor="primary" data-tip={thirdPartyText}>
            <FAIcon iconType="exclamation-triangle" />
            Get Started
          </Button>
        </CardFooterItem>
      </CardFooter>
    );
    const content =
      "Get encouragement, ideas, & accountability tackling debt, facing emergencies, budgeting, planning a bright future, & improving savings.";
    return (
      <SingleColumnCard
        title="Coaching"
        subtitleText="1 Month Free; $50/month thereafter"
        className="card-short"
        footerContent={footer}
      >
        <Box>{content}</Box>
      </SingleColumnCard>
    );
  }
}

CoachingCard.propTypes = {};

export default CoachingCard;
