import React, { Component } from "react";
import PropTypes from "prop-types";
import SingleColumnCard from "../components/SingleColumnCard";
import { Box, CardFooter, CardFooterItem, Button, Tag } from "bloomer";
import ReactTooltip from "react-tooltip";
import FAIcon from "../../common/FAIcon";
import DataTipButton from "../../common/DataTipButton";

class InvestCard extends Component {
    render() {
        const footer = (
            <CardFooter>
                <CardFooterItem>
                    <DataTipButton
                        isColor="primary"
                        isOutlined
                        text="Get help"
                    />
                </CardFooterItem>
                <CardFooterItem>
                    <Button isColor="primary">
                        Go to 401(k)
                    </Button>
                </CardFooterItem>
            </CardFooter>
        );
        const content =
            "Request the Portfolio Builder workbook with recommended allocations & money managers or have your portfolio professionally managed.";
        return (
            <SingleColumnCard
                title="Invest"
                footerContent={footer}
                className="card-short"
            >
                <Box>{content}</Box>
            </SingleColumnCard>
        );
    }
}

InvestCard.propTypes = {};

export default InvestCard;
