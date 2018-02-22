import React, { Component } from "react";
import DashboardHeader from "./components/DashboardHeader";
import SingleColumnCard from "./components/SingleColumnCard";
import { Container, Columns } from "bloomer";
import { content } from "../constants";
import "./DashboardHost.css";
import SmartDollarCard from "./cards/SmartDollar";
import WelfieBlog from "./cards/WelfieBlog";
import WelfieScoreCard from "./cards/WelfieScoreCard";
import InvestCard from "./cards/Invest";
import OrganizeCard from "./cards/Organize";
import CoachingCard from "./cards/Coaching";
import BasicsCard from "./cards/Basics";
import PlanCard from "./cards/Plan";
import AdviceSupportCard from "./cards/AdviceSupport";

class DashboardHost extends Component {
  render() {
    return (
      <div>
        <DashboardHeader
          user="Dave"
          adImageSource="http://www.fillmurray.com/g/300/150"
        />
        <Container className="card-container">
          <Columns>
            <SmartDollarCard />
            <WelfieBlog />
            <WelfieScoreCard />
          </Columns>
          <Columns>
            <InvestCard />
            <OrganizeCard />
            <CoachingCard />
          </Columns>
          <Columns>
            <BasicsCard />
            <PlanCard />
            <AdviceSupportCard />
          </Columns>
        </Container>
      </div>
    );
  }
}

export default DashboardHost;
