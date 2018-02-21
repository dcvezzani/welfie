import React, { Component } from "react";
import PropTypes from "prop-types";
import { Column } from "bloomer";
import DashboardCard from "./DashboardCard";

class SingleColumnCard extends Component {
  render() {
    return (
      <Column isSize="1/3">
        <DashboardCard {...this.props}>{this.props.children}</DashboardCard>
      </Column>
    );
  }
}

SingleColumnCard.propTypes = {
  title: PropTypes.string
};

export default SingleColumnCard;
