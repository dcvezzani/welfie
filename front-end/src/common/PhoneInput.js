import React, { Component } from "react";
import PropTypes from "prop-types";
import Phone from "react-phone-number-input";
import { Control, Label } from "bloomer";
import "../../node_modules/react-phone-number-input/rrui.css";
import "../../node_modules/react-phone-number-input/style.css";

class PhoneInput extends Component {
  render() {
    const { phoneNumber, phoneNumberChanged } = this.props;
    return (
      <Control>
        <Label>Phone</Label>
        <Phone
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={phoneNumberChanged}
          country="US"
          countries={["US", "CA"]}
        />
      </Control>
    );
  }
}

PhoneInput.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  phoneNumberChanged: PropTypes.func.isRequired
};

export default PhoneInput;
