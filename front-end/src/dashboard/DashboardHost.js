import React, { Component } from "react";
import DashboardHeader from "./components/DashboardHeader";
import SingleColumnCard from "./components/SingleColumnCard";
import { Container, Columns } from "bloomer";
import { content } from "../constants";
import "./DashboardHost.css";
import SmartDollarCard from "./cards/SmartDollar";
import WelfieBlog from "./cards/WelfieBlog";
import WelfieScoreCard from "./cards/WelfieScoreCard";

class DashboardHost extends Component {
  render() {
    return (
      <div>
        <DashboardHeader
          user="Dave"
          adImageSource="http://www.fillmurray.com/g/200/150"
        />
        <Container className="card-container">
          <Columns>
            <SmartDollarCard />
            <WelfieBlog />
            <WelfieScoreCard />
          </Columns>
          <Columns>
            <SingleColumnCard title="Invest">{content}</SingleColumnCard>
            <SingleColumnCard title="Organize" />
            <SingleColumnCard title="Coaching" />
          </Columns>
          <Columns>
            <SingleColumnCard title="Get the Basics" />
            <SingleColumnCard title="Plan" />
            <SingleColumnCard title="Advice/Support" />
          </Columns>
        </Container>
      </div>
    );
  }
}

export default DashboardHost;
