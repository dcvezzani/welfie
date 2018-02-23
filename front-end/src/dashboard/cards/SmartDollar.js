import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleColumnCard from "../components/SingleColumnCard";
import { Player, BigPlayButton } from "video-react";
import {
  CardFooterItem,
  Button,
  CardFooter,
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardBody,
  ModalCardFooter,
  ModalCardHeader,
  ModalCardTitle,
  Delete
} from "bloomer";
import SmartDollarVideo from "../../common/assets/SmartDollar.mp4";

class SmartDollar extends Component {
  state = {
    modalIsActive: false
  };

  openModal = () => {
    this.setState({ modalIsActive: true });
  };

  closeModal = () => {
    this.setState({ modalIsActive: false });
  };
  render() {
    const { modalIsActive } = this.state;
    const formModal = (
      <Modal isActive={modalIsActive}>
        <ModalBackground />
        <ModalCard>
          <ModalCardHeader>
            <ModalCardTitle>
              Find out more about SmartMoney&copy;
            </ModalCardTitle>
            <Delete onClick={this.closeModal} />
          </ModalCardHeader>
          <ModalCardBody />
          <ModalCardFooter />
        </ModalCard>
      </Modal>
    );
    const footerButtons = (
      <CardFooter>
        <CardFooterItem>
          <Button isColor="primary">Login & LEARN</Button>
        </CardFooterItem>
        <CardFooterItem>
          <Button isColor="primary" isOutlined onClick={this.openModal}>
            Request Access
          </Button>
        </CardFooterItem>
      </CardFooter>
    );
    return (
      <SingleColumnCard
        title="Smartdollar&copy;"
        subtitleText="Powered by Ramsey Solutions"
        footerContent={footerButtons}
      >
        {formModal}
        <Player
          ref="SmartDollarPlayer"
          src={SmartDollarVideo}
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
