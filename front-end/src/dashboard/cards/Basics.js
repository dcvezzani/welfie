import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleColumnCard from "../components/SingleColumnCard";
import { Box, CardFooter, CardFooterItem } from "bloomer";
import DataTipButton from "../../common/DataTipButton";

class BasicsCard extends Component {
    render() {
        const footer = (
            <CardFooter>
                <CardFooterItem>
                    <DataTipButton
                        isColor="primary"
                        text="Learn More"
                    />
                </CardFooterItem>
                <CardFooterItem>
                    <DataTipButton isColor="primary" text="Get Blue" />
                </CardFooterItem>
            </CardFooter>
        );
        const content =
            "The starter financial wellness service package provides some basic & compassionate tools to help put you on the path to improvement";
        return (
            <SingleColumnCard
                title="Get the basics"
                className="card-short blue-top"
                subtitleText="$500 one time"
                footerContent={footer}
            >
                <Box>{content}</Box>
            </SingleColumnCard>
        );
    }
}

BasicsCard.propTypes = {};

export default BasicsCard;
