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
  Delete,
  Columns,
  Column,
  Label,
  Control,
  Checkbox,
  Field
} from "bloomer";
import SmartDollarVideo from "../../common/assets/SmartDollar.mp4";
import FormInput from "../../common/FormInput";
import PhoneInput from "../../common/PhoneInput";
import classNames from "classnames";
import FAIcon from "../../common/FAIcon";

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

  phoneNumberChanged = phone => {
    this.setState({ phone });
  };

  acceptTermsChanged = () => {
    this.setState({ acceptTerms: !this.state.acceptTerms });
  };
  render() {
    const { modalIsActive, name, email, phone, acceptTerms } = this.state;
    const formModal = (
      <Modal isActive={modalIsActive}>
        <ModalBackground />
        <ModalCard>
          <ModalCardHeader>
            <ModalCardTitle>Request access to SmartDollar&copy;</ModalCardTitle>
            <Delete onClick={this.closeModal} />
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
                <PhoneInput
                  phoneNumber={phone}
                  phoneNumberChanged={this.phoneNumberChanged}
                />
              </Column>
            </Columns>
            <Field>
              <Control>
                <Checkbox onChange={this.acceptTermsChanged}>
                  I accept the terms and conditions.
                </Checkbox>
              </Control>
            </Field>
          </ModalCardBody>
          <ModalCardFooter>
            <Button isColor="success">
              <FAIcon iconType="check" />
              Submit
            </Button>
            <Button isColor="warning" isOutlined onClick={this.closeModal}>
              <FAIcon iconType="ban" />
              Cancel
            </Button>
          </ModalCardFooter>
        </ModalCard>
      </Modal>
    );
    const footerButtons = (
      <CardFooter>
        <CardFooterItem>
          <Button
            isColor="primary"
            href="https://smartdollar.id.ramseysolutions.net/sign-in?response_type=code&client_id=smartdollar&scope=profile%20openid&redirect_uri=https://www.smartdollar.com/app/session/access&state=eyJzdG9yZWRfbG9jYXRpb24iOiIvYXBwIn0=&code_challenge=L7bGZYCiWNgpcrHKMpBv0tzg1I4lmrjq8QE0yozVq8s&code_challenge_method=S256"
          >
            Login & LEARN
          </Button>
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
