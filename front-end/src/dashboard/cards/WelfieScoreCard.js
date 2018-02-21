import React, { Component } from "react";
import PropTypes from "prop-types";
import WelfieScore from "../components/WelfieScore";
import SingleColumnCard from "../components/SingleColumnCard";
import { Section, Columns, Column, Button } from "bloomer";

class WelfieScoreCard extends Component {
  render() {
    return (
      <SingleColumnCard title="Welfie&reg; Score">
        <WelfieScore score={97} />
        <Section hasTextAlign="centered">
          <Columns>
            <Column isSize="1/2">
              <Button isColor="primary">Details</Button>
            </Column>
            <Column isSize="1/2">
              <Button isColor="primary" isOutlined>
                Update
              </Button>
            </Column>
          </Columns>
        </Section>
      </SingleColumnCard>
    );
  }
}

WelfieScoreCard.propTypes = {};

export default WelfieScoreCard;
