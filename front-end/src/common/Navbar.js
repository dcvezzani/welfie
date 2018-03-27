import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarEnd,
  Button,
  NavbarBurger,
  NavbarDivider
} from "bloomer";
import "./Navbar.css";
import SocialIcon from "./SocialIcon";
import WelfieLogo from "./assets/logo.png";
import FAIcon from "./FAIcon";
class NavBar extends Component {
  state = {
    isActive: false
  };

  toggleNav = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    const { isActive } = this.state;
    const { openConciergeModal, openLoginModal } = this.props;
    return (
      <Navbar className="is-fixed-top">
        <NavbarBrand>
          <NavbarItem>
            <Link to="/" className="logo">
              <img src={WelfieLogo} alt="Welfie Logo" />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              isColor="warning"
              onClick={openConciergeModal}
              isHidden="mobile"
            >
              <FAIcon iconType="question-circle" />
              Need Help? Ask our Concierge
            </Button>
            <Button
              isColor="warning"
              onClick={openConciergeModal}
              isHidden={["tablet", "desktop", "widescreen"]}
            >
              <FAIcon iconType="question-circle" />
              Need Help?
            </Button>
          </NavbarItem>
          <NavbarBurger isActive={isActive} onClick={this.toggleNav} />
        </NavbarBrand>
        <NavbarMenu isActive={isActive} onClick={this.toggleNav}>
          <NavbarEnd>
            <NavbarItem>
              <Button id="blog" href="https://welfie.co/blog/">
                <span>Blog</span>
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button className="loginButton" onClick={openLoginModal}>
                Client Login
              </Button>
            </NavbarItem>
            <NavbarDivider />
            <NavbarItem>
              <SocialIcon
                iconType="facebook"
                link="https://facebook.com/welfie.co"
              />
              <SocialIcon iconType="twitter" link="https://twitter.com/welfie" />
              <SocialIcon
                iconType="linkedin"
                link="https://linkedin.com/in/welfie"
              />
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

NavBar.propTypes = {
  openConciergeModal: PropTypes.func.isRequired
};
export default NavBar;
