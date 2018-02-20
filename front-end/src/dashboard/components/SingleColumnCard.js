import React, { Component } from "react";
import PropTypes from "prop-types";
import { Column } from "bloomer";
import DashboardCard from "./DashboardCard";

class SingleColumnCard extends Component {
  render() {
    const { title } = this.props;
    return (
      <Column isSize="1/3">
        <DashboardCard title={title} />
      </Column>
    );
  }
}

SingleColumnCard.propTypes = {
  title: PropTypes.string
};

export default SingleColumnCard;
