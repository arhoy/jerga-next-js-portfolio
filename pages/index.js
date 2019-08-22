import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import BasicLayout from '../components/layout/BasicLayout';
import { Button, Container, Col, Row } from 'reactstrap';
import Typed from 'react-typed';

import '../scss/pages/index.scss';

const typedValues = [
  'Full Stack Developer',
  'React Developer',
  'Next JS Experience',
  'Programmer',
  'Data Analyst',
  'Problem Sover',
  'Web Developer'
];

const Index = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <BasicLayout className="cover">
      <div className="main-section">
        <div className="background-image">
          <img src="/static/images/background-index.png" />
        </div>

        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper`}>
                  <div className="back">
                    <div className="hero-section-content">
                      <h2> Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Have a look at my portfolio and job history.
                      </div>
                    </div>
                    <img className="image" src="/static/images/section-1.png" />
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>
                  Welcome to the portfolio website of Filip Jerga. Get informed,
                  collaborate and discover projects I was working on through the
                  years!
                </h1>
              </div>

              <Typed
                loop
                typeSpeed={50}
                backSpeed={20}
                strings={typedValues}
                smartBackspace
                shuffle={false}
                backDelay={1000}
                loopCount={0}
                showCursor
                cursorChar="|"
                className="hero-typed"
              />
              <div className="hero-welcome-bio">
                <h1>Let's take a look on my work.</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BasicLayout>
  </div>
);

export default Index;
