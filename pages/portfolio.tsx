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
        <Project
          imageAlt={`Project card for tax-tracker`}
          imageSrc={``}
          title={`Tax Tracker`}
          description={`
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam
            veritatis laboriosam temporibus, facere nihil, quisquam amet ea
            dolorem minima id consectetur nostrum asperiores deleniti nesciunt
            beatae aspernatur. Ducimus, enim.
            `}
        />
        <br />
        <br />
        <br />
        <Project
          demoLink={`https://delicate-sfogliatella-00a164.netlify.app`}
          githubLink={`https://github.com/Carlos460/punity-frontend-demo`}
          imageAlt={`Project card for punity`}
          imageSrc={`project-img/punity.webp`}
          title={`P'Unity`}
          description={`
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam
            veritatis laboriosam temporibus, facere nihil, quisquam amet ea
            dolorem minima id consectetur nostrum asperiores deleniti nesciunt
            beatae aspernatur. Ducimus, enim.
            `}
        />
        <br />
      </main>
    </>
  );
};

export default Portfolio;
