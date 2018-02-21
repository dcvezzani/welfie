import React, { Component } from "react";
import DashboardHeader from "./components/DashboardHeader";
import SingleColumnCard from "./components/SingleColumnCard";
import {
  Container,
  Columns,
  Column,
  Button,
  Section,
  Content,
  Box
} from "bloomer";
import { Player, BigPlayButton } from "video-react";
import { content } from "../constants";
import "./DashboardHost.css";
import SmartDollarVideo from "./SmartDollarSmall.mp4";
import WelfieScore from "./components/WelfieScore";

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
            <SingleColumnCard
              title="Smartdollar&copy;"
              subtitleText="Powered by Ramsey Solutions"
            >
              <Player
                ref="smartDollar"
                src={SmartDollarVideo}
                poster="http://i.stack.imgur.com/PtbGQ.png"
              >
                <BigPlayButton />
              </Player>
              <Section hasTextAlign="centered">
                <Columns>
                  <Column isSize="1/2">
                    <Button isColor="primary">Login & LEARN</Button>
                  </Column>
                  <Column isSize="1/2">
                    <Button isColor="primary" isOutlined>
                      Request Access
                    </Button>
                  </Column>
                </Columns>
              </Section>
            </SingleColumnCard>
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
