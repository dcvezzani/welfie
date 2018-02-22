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

class ConciergeModal extends Component {
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
                <FormInput
                  label="Phone"
                  type="tel"
                  placeholder="(xxx) xxx-xxxx"
                />
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
            <Button isColor="success">Submit</Button>
            <Button isColor="warning" onClick={closeModal}>
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
