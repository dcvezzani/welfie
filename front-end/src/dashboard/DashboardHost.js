import React, { Component } from "react";
import DashboardHeader from "./components/DashboardHeader";
import SingleColumnCard from "./components/SingleColumnCard";
import { Container, Columns } from "bloomer";
import SmartDollarCard from "./cards/SmartDollar";
import WelfieBlog from "./cards/WelfieBlog";
import WelfieScoreCard from "./cards/WelfieScoreCard";
import InvestCard from "./cards/Invest";
import OrganizeCard from "./cards/Organize";
import CoachingCard from "./cards/Coaching";
import BasicsCard from "./cards/Basics";
import PlanCard from "./cards/Plan";
import AdviceSupportCard from "./cards/AdviceSupport";

import "./DashboardHost.css";

class DashboardHost extends Component {
  render() {
    return (
      <div class="dashboard-background">
        <DashboardHeader
          user="Dave"
          adImageSource="http://www.fillmurray.com/g/300/150"
        />
        <Container className="card-container">
          <Columns>
            <SmartDollarCard />
            <WelfieBlog />
            <WelfieScoreCard score={97} />
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
