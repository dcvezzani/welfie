import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardHeader,
  ModalCardTitle,
  ModalCardFooter,
  ModalCardBody,
  Delete,
  Button,
  Control
} from "bloomer";
import FormInput from "./FormInput";
import FAIcon from "./FAIcon";

class LoginModal extends Component {
  render() {
    const { isActive, closeModal } = this.props;
    return (
      <Modal isActive={isActive}>
        <ModalBackground />
        <ModalCard>
          <ModalCardHeader>
            <ModalCardTitle>Client Login Form</ModalCardTitle>
            <Delete onClick={closeModal} />
          </ModalCardHeader>
          <ModalCardBody>
            <FormInput
              ref="email"
              label="Email Address"
              type="email"
              placeholder="The email address that you registered with"
            />
            <FormInput ref="password" label="Password" type="password" />
          </ModalCardBody>
          <ModalCardFooter>
            <Button isColor="success">
              <FAIcon iconType="sign-in-alt" />
              Login
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

LoginModal.propTypes = {};

export default LoginModal;
