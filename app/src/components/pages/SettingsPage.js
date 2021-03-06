import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Header } from 'semantic-ui-react';

import Loading from '../Loading';

const propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
};

const defaultProps = {
  loading: false,
  error: false,
};

export default class SettingsPage extends Component {
  state = {
    loading: false,
    error: false,
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <Segment inverted padded className="back-black">
        <Header as="h2" inverted textAlign="center">
          Settings Page
        </Header>
      </Segment>
    );
  }
}

SettingsPage.propTypes = propTypes;
SettingsPage.defaultProps = defaultProps;
