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
      <Navbar isTransparent>
        <NavbarBrand>
          <NavbarItem>
            <img src={WelfieLogo} />
          </NavbarItem>
          <NavbarBurger isActive={isActive} onClick={this.toggleNav} />
        </NavbarBrand>
        <NavbarMenu isActive={isActive} onClick={this.toggleNav}>
          <NavbarEnd>
            <NavbarItem>
              <Button id="blog" isOutlined>
                <span>Blog</span>
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button className="loginButton">Client Login</Button>
            </NavbarItem>
            <NavbarDivider />
            <SocialIcon iconType="facebook" />
            <SocialIcon iconType="twitter" />
            <SocialIcon iconType="linkedin" />
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

NavBar.propTypes = {};
export default NavBar;
