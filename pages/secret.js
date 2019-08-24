import React from 'react';
import Head from 'next/head';
import BasicPage from '../components/layout/BasicPage';
import withAuth from '../components/hoc/withAuth';

class Secret extends React.Component {
  render() {
    console.log(this.props.secret);
    return <BasicPage>I am a secret page</BasicPage>;
  }
}

export default withAuth(Secret);
