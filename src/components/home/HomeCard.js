// @flow
import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';

export default class HomeCard extends Component {
  props: {
    title: string,
    background: string,
    icon: string,
    content: string,
  };
  render() {
    const { title, background, icon, content } = this.props;
    return (
      <Card>
        <CardMedia
          className="sbr-home-card-media"
          style={{ backgroundColor: background }}
        >
          <div>
            <FontIcon
              className={icon}
              style={{ fontSize: '6rem', color: '#fff' }}
            />
          </div>
        </CardMedia>
        <CardTitle title={title} />
        <CardText className="sbr-home-card-content">
          {content}
        </CardText>
      </Card>
    );
  }
}