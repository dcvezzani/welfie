import React, { Component } from "react";
import PropTypes from "prop-types";
import WelfieScore from "../components/WelfieScore";
import SingleColumnCard from "../components/SingleColumnCard";
import { Button, CardFooter, CardFooterItem } from "bloomer";

class WelfieScoreCard extends Component {
  render() {
    const footer = (
      <CardFooter>
        <CardFooterItem>
          <Button isColor="primary">Details</Button>
        </CardFooterItem>
        <CardFooterItem>
          <Button isColor="primary" isOutlined>
            Update
          </Button>
        </CardFooterItem>
      </CardFooter>
    );
    return (
      <SingleColumnCard title="Welfie&reg; Score" footerContent={footer}>
        <WelfieScore score={97} />
      </SingleColumnCard>
    );
  }
}

WelfieScoreCard.propTypes = {
  score: PropTypes.number.isRequired
};

export default WelfieScoreCard;
