import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, ModalBackground, ModalClose, ModalContent } from "bloomer";

class AlertModal extends Component {
    render() {
        const { isActive, onClose, children } = this.props;
        return (
            <Modal isActive={isActive}>
                <ModalBackground />
                <ModalContent>{children}</ModalContent>
                <ModalClose onClick={onClose} isSize="large" />
            </Modal>
        );
    }
}

AlertModal.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default AlertModal;
