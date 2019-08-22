import React from 'react';

import Head from 'next/head';
import BasicLayout from '../components/layout/BasicLayout';
import { Button, Container } from 'reactstrap';

const Index = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <BasicLayout>
      <h1>Welcome to Next JS</h1>
      <Container>
        <Button color="danger"> Danger! </Button>
      </Container>
    </BasicLayout>
  </div>
);

export default Index;
