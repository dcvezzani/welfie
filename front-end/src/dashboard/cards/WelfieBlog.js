import React, { Component } from "react";
import PropTypes from "prop-types";
import { content } from "../../constants";
import SingleColumnCard from "../components/SingleColumnCard";
import { Box, Section, Button } from "bloomer";

class WelfieBlog extends Component {
  render() {
    return (
      <SingleColumnCard
        title="Welfie&reg; Blog"
        subtitleText="Useful stuff, not fluff"
      >
        <Box>{content}</Box>
        <Section hasTextAlign="centered">
          <Button isColor="primary" href="http://welfie.co/blog">
            View All Posts
          </Button>
        </Section>
      </SingleColumnCard>
    );
  }
}

WelfieBlog.propTypes = {};

export default WelfieBlog;
