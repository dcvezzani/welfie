import React, { Component } from "react";
import PropTypes from "prop-types";
import { content } from "../../constants";
import SingleColumnCard from "../components/SingleColumnCard";
import { Box, Button, CardFooter, CardFooterItem } from "bloomer";

class WelfieBlog extends Component {
  render() {
    const footer = (
      <CardFooter>
        <CardFooterItem>
          <Button isColor="primary" href="http://welfie.co/blog">
            View All Posts
          </Button>
        </CardFooterItem>
      </CardFooter>
    );
    return (
      <SingleColumnCard
        title="Welfie&reg; Blog"
        subtitleText="Useful stuff, not fluff"
        footerContent={footer}
      >
        <Box>{content}</Box>
      </SingleColumnCard>
    );
  }
}

WelfieBlog.propTypes = {};

export default WelfieBlog;
