import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "bloomer/lib/elements/Icon";

class FAIcon extends Component {
  render() {
    const { iconType, size } = this.props;
    return (
      <Icon className={`fas fa-${iconType}`} isSize={size ? size : "medium"} />
    );
  }
}

FAIcon.propTypes = {
  iconType: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default FAIcon;
