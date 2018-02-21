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
  Button
} from "bloomer";

class ConciergeModal extends Component {
  render() {
    const { isActive, closeModal } = this.props;
    return (
      <Modal isActive={isActive}>
        <ModalBackground />
        <ModalCard>
          <ModalCardHeader>
            <ModalCardTitle>
              Ask for help from our Financial Wellness Concierge Services
            </ModalCardTitle>
            <Delete onClick={closeModal} />
          </ModalCardHeader>
          <ModalCardBody>To come...</ModalCardBody>
          <ModalCardFooter>
            <Button isColor="success">Save</Button>
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
