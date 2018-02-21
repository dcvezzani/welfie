import React, { Component } from "react";
import PropTypes from "prop-types";

import "./WelfieScore.css";

class WelfieScore extends Component {
  render() {
    const { score } = this.props;
    return (
      <div className="outer-circle">
        <div className="inner-circle">
          <div className="welfie-score">{score}</div>
        </div>
      </div>
    );
  }
}

WelfieScore.propTypes = {};

export default WelfieScore;
