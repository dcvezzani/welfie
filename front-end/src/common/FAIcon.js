import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Icon } from "bloomer/lib/elements/Icon";

class FAIcon extends Component {
  render() {
    const { iconType, size, extraClasses } = this.props;
    const classes = classNames(["fas", `fa-${iconType}`, extraClasses]);
    return <Icon className={classes} isSize={size ? size : "medium"} />;
  }
}

FAIcon.propTypes = {
  extraClasses: PropTypes.string,
  iconType: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default FAIcon;
