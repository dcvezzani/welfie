import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "bloomer";
import WarningIcon from "./WarningIcon";
import { thirdPartyText } from "../constants";
import AlertModal from "./AlertModal";

class DataTipButton extends Component {
    state = {
        modalIsActive: false
    };

    showWarningModal = () => {
        this.setState({ modalIsActive: true });
    };

    closeModalAndProceed = () => {
        const { onClick } = this.props;
        this.setState({ modalIsActive: false });
        onClick();
    };
    render() {
        const { className, isColor, isOutlined, text } = this.props;
        const desktopButton = (
            <Button
                data-tip={thirdPartyText}
                className={className}
                isOutlined={isOutlined ? isOutlined : false}
                isColor={isColor}
                onClick={this.warnAndProceed}
                isDisplay="desktop"
                isHidden="touch"
            >
                <WarningIcon />
                {text}
            </Button>
        );

        const mobileButton = (
            <Button
                className={className}
                isOutlined={isOutlined ? isOutlined : false}
                isColor={isColor}
                onClick={this.warnAndProceed}
                isDisplay="touch"
                isHidden="desktop"
            >
                <WarningIcon />
                {text}
            </Button>
        );

        return (
            <span>
                <AlertModal
                    isActive={this.state.modalIsActive}
                    onClose={this.closeModalAndProceed}
                >
                    <h3>
                        You are now leaving <strong>welfie.co</strong> to visit
                        a third-party site.
                    </h3>
                    <Button onClick={this.closeModalAndProceed} isOutlined>
                        OK
                    </Button>
                </AlertModal>
                {desktopButton}
                {mobileButton}
            </span>
        );
    }
}

DataTipButton.propTypes = {
    className: PropTypes.string,
    isColor: PropTypes.string,
    isOutlined: PropTypes.bool,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default DataTipButton;
