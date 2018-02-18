import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarEnd,
  Button,
  Title,
  Icon,
  NavbarBurger,
  NavbarDivider
} from "bloomer";
import "./Navbar.css";
import SocialIcon from "./SocialIcon";
import WelfieLogo from "../logo.png";
class NavBar extends Component {
  state = {
    isActive: false
  };

  toggleNav = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    const { isActive } = this.state;
    return (
      <Navbar className="is-fixed-top">
        <NavbarBrand>
          <NavbarItem>
            <img src={WelfieLogo} />
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
              <Button className="loginButton" href="#">
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

NavBar.propTypes = {};
export default NavBar;
