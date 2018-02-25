import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleColumnCard from "../components/SingleColumnCard";
import { Box, CardFooter, CardFooterItem } from "bloomer";
import DataTipButton from "../../common/DataTipButton";

class CoachingCard extends Component {
    render() {
        const footer = (
            <CardFooter>
                <CardFooterItem>
                    <DataTipButton isColor="primary" text="Get Started" />
                </CardFooterItem>
            </CardFooter>
        );
        const content =
            "Get encouragement, ideas, & accountability tackling debt, facing emergencies, budgeting, planning a bright future, & improving savings.";
        return (
            <SingleColumnCard
                title="Coaching"
                subtitleText="1 Month Free; $50/month thereafter"
                className="card-short"
                footerContent={footer}
            >
                <Box>{content}</Box>
            </SingleColumnCard>
        );
    }
}

CoachingCard.propTypes = {};

export default CoachingCard;
