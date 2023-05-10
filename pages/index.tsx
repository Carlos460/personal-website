// Next Import
import type { NextPage } from 'next';
import Head from 'next/head';

// Custom Components
import Project from '@includes/Project';

// AntD Components
import { Row, Col } from 'antd';
import Contact from '@includes/Contact';
import Header from '@includes/Header';

const projects = [
  {
    title: 'DD Sparkle Cleaning',
    description: `Marketing website featuring a landing, about, services, and
               contact page. Using Next.js with Typescript.`,
    imageDescription: 'cleaning service website',
    imageSource: '/project-img/ddscclip.webp',
    githubLink: 'https://github.com/Carlos460/dd-sparkle-cleaning',
    websiteLink: 'https://ddsparklecleaning.com/',
  },
  {
    title: `P'Unity`,
    description: `A collaborative full-stack project that offers Q&A messaging services.
               This demo features my code contribution I implemented from a design to 
               create a responsive front-end application using React.js and Bootstrap..`,
    imageDescription: 'Q&A community website',
    imageSource: '/project-img/punity.webp',
    githubLink: 'https://github.com/Carlos460/punity-frontend',
    websiteLink: 'https://delicate-sfogliatella-00a164.netlify.app/',
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Row justify="center">
          <Col xs={20} sm={18} lg={18} xxl={12}>
            <div style={{ display: 'flex', width: '100%' }}>
              <div style={{ maxWidth: '1400px', margin: ' 0px auto' }}>
                <Header />
                <h1
                  style={{ color: '#c0c0c0', fontSize: '20px', margin: '0px' }}
                >
                  Portfolio
                </h1>
                <h1
                  style={{
                    color: 'var(--orange)',
                    fontSize: '28px',
                    fontWeight: '600',
                    margin: '0px 0px 5px',
                  }}
                >
                  Recent Projects
                </h1>
                {projects.map((project, index) => {
                  return (
                    <Project
                      key={index}
                      title={project.title}
                      description={project.description}
                      imageDescription={project.imageDescription}
                      imageSource={project.imageSource}
                      githubLink={project.githubLink}
                      websiteLink={project.websiteLink}
                    />
                  );
                })}
                <h1
                  style={{ color: '#c0c0c0', fontSize: '20px', margin: '0px' }}
                >
                  Contact
                </h1>
                <h1
                  style={{
                    color: 'var(--orange)',
                    fontSize: '28px',
                    fontWeight: '600',
                    margin: '0px 0px 5px',
                  }}
                >
                  Get in Touch!
                </h1>
                <Contact />
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
};

export default Home;
