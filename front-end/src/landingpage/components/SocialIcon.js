import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavbarItem } from "bloomer/lib/components/Navbar/NavbarItem";
import { Icon } from "bloomer/lib/elements/Icon";

class SocialIcon extends Component {
    render() {
        const { iconType } = this.props;
        return (
            <NavbarItem className="social">
                <Icon isSize="medium" className={`fab fa-${iconType}`} />
            </NavbarItem>
        );
    }
}

SocialIcon.propTypes = {
    iconType: PropTypes.string.isRequired
};

export default SocialIcon;
