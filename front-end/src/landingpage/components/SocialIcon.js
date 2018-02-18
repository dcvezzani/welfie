import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Icon, NavbarItem } from "bloomer";

class SocialIcon extends Component {
  render() {
    const { iconType, link } = this.props;
    return (
      <NavbarItem>
        <Button href={link} className="social">
          <Icon isSize="medium" className={`fab fa-${iconType}`} />
        </Button>
      </NavbarItem>
    );
  }
}

SocialIcon.propTypes = {
  iconType: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default SocialIcon;
