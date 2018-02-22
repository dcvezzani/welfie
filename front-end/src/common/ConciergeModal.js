import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardHeader,
  ModalCardTitle,
  Delete,
  ModalCardBody,
  ModalCardFooter,
  Button,
  Field,
  Label,
  Control,
  TextArea,
  Columns,
  Column
} from "bloomer";
import FormInput from "./FormInput";
import FAIcon from "./FAIcon";
import Phone from "react-phone-number-input";

import "react-phone-number-input/rrui.css";
import "react-phone-number-input/style.css";

class ConciergeModal extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };
  render() {
    const { isActive, closeModal } = this.props;
    return (
      <Modal isActive={isActive}>
        <ModalBackground />
        <ModalCard>
          <ModalCardHeader>
            <ModalCardTitle>
              Get Help from our Financial Wellness Concierge
            </ModalCardTitle>
            <Delete onClick={closeModal} />
          </ModalCardHeader>
          <ModalCardBody>
            <Columns>
              <Column isSize="1/3">
                <FormInput label="Name" placeholder="Your Name" />
              </Column>
              <Column isSize="1/3">
                <FormInput
                  label="Email"
                  type="email"
                  placeholder="Your email address"
                />
              </Column>
              <Column isSize="1/3">
                <Control>
                  <Label>Phone</Label>
                  <Phone
                    placeholder="Enter phone number"
                    value={this.state.phone}
                    onChange={phone => this.setState({ phone })}
                    country="US"
                    countries={["US", "CA"]}
                  />
                </Control>
              </Column>
            </Columns>
            <Field>
              <Label>Message</Label>
              <Control>
                <TextArea placeholder="Enter your message to the concierge here..." />
              </Control>
            </Field>
          </ModalCardBody>
          <ModalCardFooter>
            <Button isColor="success">
              <FAIcon iconType="check" />
              Submit
            </Button>
            <Button isColor="warning" isOutlined onClick={closeModal}>
              <FAIcon iconType="ban" />
              Cancel
            </Button>
          </ModalCardFooter>
        </ModalCard>
      </Modal>
    );
  }
}

ConciergeModal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default ConciergeModal;
