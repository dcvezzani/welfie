import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardContent, CardHeaderTitle, Title } from "bloomer";

class DashboardCard extends Component {
  render() {
    const { title, subtitleText, children } = this.props;
    const subtitle = subtitleText !== "" && (
      <Title isSize={5} hasTextAlign="centered">
        {subtitleText}
      </Title>
    );

    return (
      <Card>
        <CardHeader>
          <CardHeaderTitle hasTextAlign="centered">{title}</CardHeaderTitle>
        </CardHeader>
        <CardContent>
          {subtitle}
          {children}
        </CardContent>
      </Card>
    );
  }
}

DashboardCard.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  subtitleText: PropTypes.string
};

export default DashboardCard;
