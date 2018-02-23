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
            <Button isColor="warning" onClick={openConciergeModal}>
              Need Help? Ask our Concierge
            </Button>
          </NavbarItem>
          <NavbarBurger isActive={isActive} onClick={this.toggleNav} />
        </NavbarBrand>
        <NavbarMenu isActive={isActive} onClick={this.toggleNav}>
          <NavbarEnd>
            <NavbarItem>
              <Button id="blog" isOutlined href="https://welfie.co/blog/">
                <span>Blog</span>
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button className="loginButton" onClick={openLoginModal}>
                Client Login
              </Button>
            </NavbarItem>
            <NavbarDivider />
            <SocialIcon
              iconType="facebook"
              link="https://facebook.com/welfie.co"
            />
            <SocialIcon iconType="twitter" link="https://twitter.com/welfie" />
            <SocialIcon
              iconType="linkedin"
              link="https://linkedin.com/in/welfie"
            />
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
