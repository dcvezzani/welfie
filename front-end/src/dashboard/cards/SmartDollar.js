import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleColumnCard from "../components/SingleColumnCard";
import { Player, BigPlayButton } from "video-react";
import { CardFooterItem, Button, CardFooter } from "bloomer";
import SmartDollarVideo from "../../common/assets/SmartDollar.mp4";
import SmartDollarModal from "./children/SmartDollarModal";

class SmartDollar extends Component {
    state = {
        modalIsActive: false,
        name: "",
        email: "",
        phone: "",
        acceptTerms: false
    };

    openModal = () => {
        this.setState({ modalIsActive: true });
    };

    closeModal = () => {
        this.setState({ modalIsActive: false });
    };

    handleSubmit = formValues => {
        this.setState({ formValues });
    };

    render() {
        const { modalIsActive } = this.state;
        const footerButtons = (
            <CardFooter>
                <CardFooterItem>
                    <Button
                        isColor="primary"
                        href="http://www.smartdollar.com/app/sign-in"
                    >
                        Login & LEARN
                    </Button>
                </CardFooterItem>
                <CardFooterItem>
                    <Button
                        isColor="primary"
                        isOutlined
                        onClick={this.openModal}
                    >
                        Request Access
                    </Button>
                </CardFooterItem>
            </CardFooter>
        );
        return (
            <SingleColumnCard
                title="Smart Dollar&copy;"
                subtitleText="Powered by Ramsey Solutions"
                footerContent={footerButtons}
            >
                <SmartDollarModal
                    modalIsActive={modalIsActive}
                    closeModal={this.closeModal}
                    onSubmit={this.handleSubmit}
                />
                <Player
                    ref="SmartDollarPlayer"
                    src="https://welfie.co/videos/smart-dollar-participant.WebM"
                    poster="http://i.stack.imgur.com/PtbGQ.png"
                >
                    <BigPlayButton />
                </Player>
            </SingleColumnCard>
        );
    }
}

SmartDollar.propTypes = {};

export default SmartDollar;
