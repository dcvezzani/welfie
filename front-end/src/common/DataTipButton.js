import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "bloomer";
import WarningIcon from "./WarningIcon";
import { thirdPartyText } from "../constants";

class DataTipButton extends Component {
    render() {
        const { className, isColor, isOutlined, text, onClick } = this.props;
        const desktopButton = (
            <Button
                data-tip={thirdPartyText}
                className={className}
                isOutlined={isOutlined ? isOutlined : false}
                isColor={isColor}
                onClick={onClick}
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
                onClick={onClick}
                isDisplay="touch"
                isHidden="desktop"
            >
                <WarningIcon />
                {text}
            </Button>
        );

        return (
            <span>
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
