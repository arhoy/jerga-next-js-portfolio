import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import BasicPage from '../components/layout/BasicPage';
import withAuth from '../components/hoc/withAuth';
import axios from 'axios';

const Secret = ({ auth: { user }, secret }) => {
  const [newSecret, setNewSecret] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let secretData = [];
      try {
        const res = await axios.get('/api/v1/secret');
        secretData = res.data.msg;
      } catch (error) {
        console.error('There as an error', error);
        secretData = [
          { title: 'Error', description: 'Please try again later' }
        ];
      }
      setNewSecret(secretData);
    };

    fetchData();
  }, []);
  return (
    <div>
      <BasicPage>
        <h1>I am secret page</h1>
        <p>Dear {user.given_name} welcome to the covenant secret page </p>
        <p>
          The super secret value is <b> {secret}</b>
        </p>
        My new super secret messages are:
        <ul>
          {newSecret &&
            newSecret.length > 0 &&
            newSecret.map((secret, i) => (
              <li key={i}>
                {secret.title}: <b>{secret.description}</b>
              </li>
            ))}
        </ul>
      </BasicPage>
    </div>
  );
};

Secret.getInitialProps = () => {
  const secret = 'abc Secret Page';
  return { secret };
};

export default withAuth(Secret);
