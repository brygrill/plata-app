// @flow
import React, { Component } from 'react';
import { Button, Divider } from 'semantic-ui-react';

// Set div and divider padding
// so its equal with main login
const componentStyle = {};
componentStyle.padding = '2rem 1rem 0 1rem';

const dividerStyle = {
  margin: 0,
  paddingTop: '1rem',
};

const btnStyle = {
  backgroundStyle: '#d4d4d5',
};

export default class LoginGoogleComponent extends Component {
  props: {
    handleClick: Function,
    hideGoogle: Boolean,
  };
  render() {
    if (this.props.hideGoogle) componentStyle.display = 'none';
    return (
      <div style={componentStyle}>
        <Button
          icon="google"
          size="large"
          content="Login with Google"
          style={btnStyle}
          onClick={this.props.handleClick}
        />
        <Divider horizontal style={dividerStyle}>Or</Divider>
      </div>
    );
  }
}
