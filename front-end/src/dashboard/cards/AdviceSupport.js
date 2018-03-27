import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleColumnCard from "../components/SingleColumnCard";
import { Box, Tag, CardFooter, CardFooterItem, Button } from "bloomer";
import DataTipButton from "../../common/DataTipButton";

class AdviceSupportCard extends Component {
    render() {
        const footer = (
            <CardFooter>
                <CardFooterItem>
                    <DataTipButton
                        className="platinum"
                        isOutlined
                        text="Learn More"
                    />
                </CardFooterItem>
                <CardFooterItem>
                    <DataTipButton
                        className="platinum"
                        isColor="light"
                        text="Get Platinum"
                    />
                </CardFooterItem>
            </CardFooter>
        );
        const content = (
            <div>
                All the benefits of{" "}
                <Tag isColor="warning" className="gold">
                    Gold
                </Tag>{" "}
                <em>PLUS</em> your very own licensed professional sounding-board
                for questions, answers and direction
            </div>
        );
        return (
            <SingleColumnCard
                title="Advice & Support"
                className="card-short platinum-top"
                subtitleText="From $299/year"
                footerContent={footer}
            >
                <Box>{content}</Box>
            </SingleColumnCard>
        );
    }
}

AdviceSupportCard.propTypes = {};

export default AdviceSupportCard;
