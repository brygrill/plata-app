// @flow
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

export default class AppBarComponent extends Component {
  props: {
    authed: Boolean,
    rightBtnLabel: string,
    rightBtnIcon: string,
    rightBtnHandler: Function,
  };

  handleMenuClick = (evt: SyntheticEvent) => {
    console.log('click menu');
  };

  handleTitleClick = (evt: SyntheticEvent) => {
    console.log('click title');
  };

  render() {
    const { authed, rightBtnLabel, rightBtnIcon, rightBtnHandler } = this.props;
    return (
      <AppBar
        title={<span className="sbr-appbar-title">TriPlan</span>}
        showMenuIconButton={authed}
        onTitleTouchTap={this.handleTitleClick}
        zDepth={0}
        iconElementRight={
          <FlatButton
            label={rightBtnLabel}
            icon={<FontIcon className={rightBtnIcon} />}
            onTouchTap={rightBtnHandler}
          />
        }
        onLeftIconButtonTouchTap={this.handleMenuClick}
      />
    );
  }
}