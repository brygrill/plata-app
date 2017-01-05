/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { login } from '../firebase/auth';
import Login from '../components/Login';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPwdChange = this.onPwdChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      email: '',
      pwd: '',
    };
  }

  onEmailChange(evt, val) {
    this.setState({ email: val.value });
  }

  onPwdChange(evt, val) {
    this.setState({ pwd: val.value });
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    login(this.state.email, this.state.pwd)
      .then((resp) => {
        console.log(resp);
        this.context.router.transitionTo({ pathname: '/dashboard' });
        this.setState({ email: '', pwd: '' });
      })
      .catch((err) => {
        if (err.code === 'auth/wrong-password') {
          console.log('wrong pwd');
        }
      });
  }

  render() {
    return (
      <Login
        title="Log-in to your Dashboard"
        colWidth="500px"
        emailVal={this.state.email}
        emailChange={this.onEmailChange}
        pwdVal={this.state.pwd}
        pwdChange={this.onPwdChange}
        handleSubmit={this.onFormSubmit}
      />
    );
  }
}

LoginPage.contextTypes = {
  router: React.PropTypes.object,
};

export default LoginPage;