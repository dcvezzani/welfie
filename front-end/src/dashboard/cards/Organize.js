import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleColumnCard from "../components/SingleColumnCard";
import { Box, CardFooter, CardFooterItem, Button } from "bloomer";
import FAIcon from "../../common/FAIcon";

class OrganizeCard extends Component {
    render() {
        const footer = (
            <CardFooter>
                <CardFooterItem>
                    <Button
                        isColor="primary"
                        isDisplay="desktop"
                        isHidden="touch"
                    >
                        <FAIcon iconType="download" />
                        Download Free PDF templates & kits
                    </Button>

                    <Button
                        isColor="primary"
                        isDisplay="touch"
                        isHidden="desktop"
                    >
                        <FAIcon iconType="download" />
                        Download
                    </Button>
                </CardFooterItem>
            </CardFooter>
        );
        const content =
            "Improved financial wellness begins with better organization";
        return (
            <SingleColumnCard
                title="Organize"
                footerContent={footer}
                className="card-short"
            >
                <Box>{content}</Box>
            </SingleColumnCard>
        );
    }
}

OrganizeCard.propTypes = {};

export default OrganizeCard;
