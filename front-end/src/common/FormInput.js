import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field, Label, Input, Control } from "bloomer";

class FormInput extends Component {
  render() {
    const { label, type, placeholder } = this.props;
    return (
      <Field>
        <Label>{label}</Label>
        <Control>
          <Input type={type ? type : "text"} placeholder={placeholder} />
        </Control>
      </Field>
    );
  }
}

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

export default FormInput;
