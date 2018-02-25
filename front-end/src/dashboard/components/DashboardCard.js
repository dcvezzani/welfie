import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardContent, CardHeaderTitle, Title } from "bloomer";

class DashboardCard extends Component {
    render() {
        const {
            title,
            subtitleText,
            children,
            footerContent,
            className
        } = this.props;
        const subtitle = subtitleText !== "" && (
            <Title isSize={5} hasTextAlign="centered">
                {subtitleText}
            </Title>
        );

        return (
            <Card className={className}>
                <CardHeader>
                    <div class="title-canvas margin" />
                    <div class="title-canvas body">
                        <CardHeaderTitle hasTextAlign="centered">
                            {title}
                        </CardHeaderTitle>
                    </div>
                    <div class="title-canvas margin" />
                </CardHeader>
                <CardContent>
                    {subtitle}
                    {children}
                </CardContent>
                {footerContent}
            </Card>
        );
    }
}

DashboardCard.propTypes = {
    children: PropTypes.object,
    title: PropTypes.string,
    subtitleText: PropTypes.string
};

export default DashboardCard;
