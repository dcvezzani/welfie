import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleColumnCard from "../components/SingleColumnCard";
import { Box, CardFooter, CardFooterItem, Button, Tag } from "bloomer";
import ReactTooltip from "react-tooltip";
import FAIcon from "../../common/FAIcon";
import { thirdPartyText } from "../../constants";

class InvestCard extends Component {
  render() {
    const footer = (
      <CardFooter>
        <ReactTooltip multiline place="top" effect="solid" />
        <CardFooterItem>
          <Button isColor="primary" isOutlined data-tip={thirdPartyText}>
            Get Prof. Help
          </Button>
        </CardFooterItem>
        <CardFooterItem>
          <Button isColor="primary">
            <FAIcon iconType="external-link-alt" />
            Go to 401(k)
          </Button>
        </CardFooterItem>
      </CardFooter>
    );
    const content =
      "Request the Portfolio Builder workbook with recommended allocations & money managers or have your portfolio professionally managed.";
    return (
      <SingleColumnCard title="Invest" footerContent={footer}>
        <Box>{content}</Box>
      </SingleColumnCard>
    );
  }
}

InvestCard.propTypes = {};

export default InvestCard;
