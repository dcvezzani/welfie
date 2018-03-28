import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleColumnCard from "../components/SingleColumnCard";
import { Box, Tag, CardFooter, CardFooterItem, Button } from "bloomer";
import DataTipButton from "../../common/DataTipButton";

class PlanCard extends Component {
    render() {
        const footer = (
            <CardFooter>
                <CardFooterItem>
                    <DataTipButton
                        className="gold"
                        text="Learn More"
                    />
                </CardFooterItem>
                <CardFooterItem>
                    <DataTipButton
                        className="gold"
                        isColor="platinum"
                        text="Get Gold"
                    />
                </CardFooterItem>
            </CardFooter>
        );
        const content = (
            <Box>
                All the benefits of <Tag isColor="primary">Blue</Tag>{" "}
                <em>PLUS</em> an affordable financial planning solution with
                your own designated planning associate to make the journey with
                you… and much more.
            </Box>
        );
        return (
            <SingleColumnCard
                title="Plan"
                className="card-short gold-top"
                subtitleText="From $150/year"
                footerContent={footer}
            >
                {content}
            </SingleColumnCard>
        );
    }
}

PlanCard.propTypes = {};

export default PlanCard;
