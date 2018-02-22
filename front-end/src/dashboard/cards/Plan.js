import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleColumnCard from "../components/SingleColumnCard";
import { Box, Tag, CardFooter, CardFooterItem, Button } from "bloomer";
import FAIcon from "../../common/FAIcon";
import WarningIcon from "../../common/WarningIcon";
import { thirdPartyText } from "../../constants";

class PlanCard extends Component {
  render() {
    const footer = (
      <CardFooter>
        <CardFooterItem>
          <Button data-tip={thirdPartyText} className="gold" isOutlined>
            <WarningIcon />
            Learn More
          </Button>
        </CardFooterItem>
        <CardFooterItem>
          <Button data-tip={thirdPartyText} className="gold" isColor="warning">
            <WarningIcon />
            Get PLFS Gold
          </Button>
        </CardFooterItem>
      </CardFooter>
    );
    const content = (
      <div>
        All the benefits of <Tag isColor="primary">Blue</Tag> <em>PLUS</em> an
        affordable financial planning solution with your own designated planning
        associate to make the journey with you… and much more.
      </div>
    );
    return (
      <SingleColumnCard
        title="Plan"
        className="card-short gold-top"
        subtitleText="From $150/year"
        footerContent={footer}
      >
        <Box>{content}</Box>
      </SingleColumnCard>
    );
  }
}

PlanCard.propTypes = {};

export default PlanCard;
