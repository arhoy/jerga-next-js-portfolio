import React, { Component } from 'react';
import BasicPage from '../components/layout/BasicPage';
import auth0Client from '../services/auth0';
import { withRouter } from 'next/router';

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.router.push('/');
  }

  render() {
    return (
      <BasicPage>
        <h1> Verifying login... </h1>
      </BasicPage>
    );
  }
}

export default withRouter(Callback);
