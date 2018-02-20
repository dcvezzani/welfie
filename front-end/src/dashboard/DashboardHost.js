import React, { Component } from "react";
import DashboardHeader from "./components/DashboardHeader";
import SingleColumnCard from "./components/SingleColumnCard";
import { Container, Columns } from "bloomer";

class DashboardHost extends Component {
  render() {
    return (
      <div>
        <DashboardHeader
          user="Dave"
          adImageSource="http://www.fillmurray.com/g/200/150"
        />
        <Container>
          <Columns>
            <SingleColumnCard title="First Card" />
            <SingleColumnCard title="Second Card" />
            <SingleColumnCard title="Third Card" />
          </Columns>
          <Columns>
            <SingleColumnCard title="Fourth Card" />
            <SingleColumnCard title="Fifth Card" />
            <SingleColumnCard title="Sixth Card" />
          </Columns>
          <Columns>
            <SingleColumnCard title="Seventh Card" />
            <SingleColumnCard title="Eight Card" />
            <SingleColumnCard title="Ninth Card" />
          </Columns>
        </Container>
      </div>
    );
  }
}

export default DashboardHost;
