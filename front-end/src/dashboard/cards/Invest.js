import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleColumnCard from "../components/SingleColumnCard";
import { Box, CardFooter, CardFooterItem, Button, Tag } from "bloomer";

class InvestCard extends Component {
  render() {
    const footer = (
      <CardFooter>
        <CardFooterItem>
          <Button isColor="primary" isOutlined>
            Get Prof. Help
            <Tag isColor="light">*</Tag>
          </Button>
        </CardFooterItem>
        <CardFooterItem>
          <Button isColor="primary">Go to 401(k)</Button>
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
