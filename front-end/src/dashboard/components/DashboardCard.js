import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardContent, CardHeaderTitle } from "bloomer";

class DashboardCard extends Component {
  render() {
    const { title } = this.props;
    const content = (
      <p>
        Spicy jalapeno bacon ipsum dolor amet rump t-bone veniam beef, boudin
        sirloin capicola fatback commodo chuck turkey doner aliquip. Pork chop
        elit ullamco, fugiat drumstick dolore nisi consectetur anim meatloaf.
        Cupidatat elit eu doner bacon. Tri-tip elit rump pork belly shank aliqua
        spare ribs, cow picanha proident buffalo qui.
      </p>
    );
    return (
      <Card>
        <CardHeader>
          <CardHeaderTitle hasTextAlign="centered">{title}</CardHeaderTitle>
        </CardHeader>
        <CardContent>{content}</CardContent>
      </Card>
    );
  }
}

DashboardCard.propTypes = {};

export default DashboardCard;
