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
          <div class="action-button-group download">
            <div class="action-button full">
              <Button isColor="primary">
                <FAIcon iconType="download" />
                Download Free PDF templates & kits
              </Button>
            </div>
            <div class="action-button short">
              <Button isColor="primary">
                <FAIcon iconType="download" />
                Download
              </Button>
            </div>
          </div>
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
