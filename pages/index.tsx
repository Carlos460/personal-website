// Next Import
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

// Custom Components
import Header from '@includes/Header';
import Navbar from '@includes/Navbar';

// AntD Components
import { Row, Col, Typography, Divider, Button } from 'antd';
const { Title, Paragraph } = Typography;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Carlos Flores</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header>
          <Title>Carlos Flores</Title>
        </Header>
        <Row justify="center">
          <Col span={24}>
            <Navbar />
          </Col>
        </Row>
        <Divider />
        <Row justify="center">
          <Col xs={20} sm={16} lg={12} xxl={8}>
            <Title level={2}>About</Title>
            <Paragraph strong={true}>
              Software developer using Typescript to bring web applications to
              life. Experience with full-stack development using react and
              node.js web frameworks.
            </Paragraph>
            <Title level={3}>Technologies</Title>
            <Paragraph strong={true}>
              Frontend : Typescript - React - HTML5 - CSS3
            </Paragraph>
            <Paragraph strong={true}>
              Backend : MySql - MongoDB - Node.js - Linux
            </Paragraph>
            <Paragraph strong={true}>
              Development: Git - npm - Vim - VsCode - Postman - Figma
            </Paragraph>
            <Paragraph strong={true}>Other: Python</Paragraph>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={20} sm={16} lg={12} xxl={8} style={{ display: 'flex' }}>
            <div
              style={{
                marginLeft: ' auto ',
                width: '210px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button>
                <Link href={'/portfolio'}>
                  <a>View Portfolio</a>
                </Link>
              </Button>
              <Button type="primary">
                <Link href={`/resume`}>
                  <a target={`_blank`}>Resume</a>
                </Link>
              </Button>
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={20} sm={16} lg={12} xxl={8}>
            <Divider />
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={20} sm={16} lg={12} xxl={8}>
            <Title level={2}>Services</Title>
            <Paragraph style={{ fontSize: '16px' }} strong={true}>
              Create a custom website for your business or personal brand.
            </Paragraph>
            <Paragraph strong={true}> - Marketing Website</Paragraph>
            <Paragraph strong={true}> - E-Commerce Website</Paragraph>
            <Paragraph strong={true}> - Portfolio Website</Paragraph>
            <Paragraph strong={true}> - Business Website</Paragraph>
            <Paragraph style={{ fontSize: '16px' }} strong={true}>
              Need a bug fixed, redesign, or a new feature for your website?
            </Paragraph>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={20} sm={16} lg={12} xxl={8} style={{ display: 'flex' }}>
            <div
              style={{
                marginLeft: ' auto ',
              }}
            >
              <Button>
                <Link href={'/contact'}>
                  <a>Lets Talk!</a>
                </Link>
              </Button>
            </div>
          </Col>
        </Row>
        <br />
      </main>
    </div>
  );
};

export default Home;
