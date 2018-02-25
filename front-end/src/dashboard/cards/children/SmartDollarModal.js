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
    Columns,
    Column,
    Field,
    Control,
    Checkbox,
    Button
} from "bloomer";
import FormInput from "../../../common/FormInput";
import PhoneInput from "../../../common/PhoneInput";
import FAIcon from "../../../common/FAIcon";

class SmartDollarModal extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        acceptTerms: false
    };

    phoneNumberChanged = phone => {
        this.setState({ phone });
    };
    render() {
        const { modalIsActive, closeModal } = this.props;
        const { name, email, emailIsValid, phone, acceptTerms } = this.state;
        return (
            <Modal isActive={modalIsActive}>
                <ModalBackground />
                <ModalCard>
                    <ModalCardHeader>
                        <ModalCardTitle>
                            Request access to Smart Dollar&copy;
                        </ModalCardTitle>
                        <Delete onClick={closeModal} />
                    </ModalCardHeader>
                    <ModalCardBody>
                        <Columns>
                            <Column isSize="1/3">
                                <FormInput
                                    label="Name"
                                    placeholder="Your Name"
                                    value={name}
                                />
                            </Column>
                            <Column isSize="1/3">
                                <FormInput
                                    label="Email"
                                    type="email"
                                    placeholder="Your email address"
                                    value={email}
                                    isValid={emailIsValid}
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
                                <Checkbox
                                    value={acceptTerms}
                                    onChange={this.acceptTermsChanged}
                                >
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
                        <Button
                            isColor="warning"
                            isOutlined
                            onClick={closeModal}
                        >
                            <FAIcon iconType="ban" />
                            Cancel
                        </Button>
                    </ModalCardFooter>
                </ModalCard>
            </Modal>
        );
    }
}

SmartDollarModal.propTypes = {};

export default SmartDollarModal;
