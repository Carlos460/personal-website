// Import Next Components
import { NextPage } from 'next';
import Head from 'next/head';

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta name="description" content="resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <embed
        height={`100%`}
        width={`100%`}
        style={{ position: 'absolute' }}
        src="Resume.pdf"
        type="application/pdf"
      />
      ;
    </>
  );
};

export default Resume;
