// Import Next
import { NextPage } from 'next';
import Head from 'next/head';

// Custom Components
import Navbar from '@includes/Navbar';
import Header from '@includes/Header';
import Project from '@includes/Project';

// Antd Components
import { Row, Col, Typography, Divider } from 'antd';
const { Title } = Typography;

const Portfolio: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Project List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header>
          <Title>Software Developer Portfolio</Title>
        </Header>
        <Row justify="center">
          <Col span={24}>
            <Navbar />
          </Col>
        </Row>
        <Divider />
        <br />
        <br />
        <Row justify="center">
          <Col xs={20} sm={16} lg={12} xxl={8}>
            <h1>Experiece</h1>
          </Col>
        </Row>
        <br />
        <Project
          imageAlt={`DD Sparkle Cleaning website`}
          demoLink={`https://ddsparklecleaning.com/`}
          imageSrc={`project-img/ddscclip.webp`}
          title={`DD Sparkle Cleaning`}
          description={`
            Marketing website for a cleaning business. This website features a landing, about, services, and
            a contact page. Written in Next.js using Typescript.
          `}
        />
        <br />
        <br />
        <br />
        <Row justify="center">
          <Col xs={20} sm={16} lg={12} xxl={8}>
            <h1>Projects</h1>
          </Col>
        </Row>
        <br />
        <Project
          demoLink={`https://delicate-sfogliatella-00a164.netlify.app`}
          githubLink={`https://github.com/Carlos460/punity-frontend-demo`}
          imageAlt={`Project card for punity`}
          imageSrc={`project-img/punity.webp`}
          title={`P'Unity`}
          description={`
            This collaborative fullstack project features Q&A community services.
            I focused on implementing designs by using react. This is only a demo of the fontend part of the application
            `}
        />
        <br />
      </main>
    </>
  );
};

export default Portfolio;
