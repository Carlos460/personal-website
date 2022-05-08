// Import Next
import { NextPage } from 'next';
import Head from 'next/head';
import { useRef } from 'react';

// Emailjs
import emailjs from '@emailjs/browser';

// Custom Components
import Navbar from '@includes/Navbar';
import Header from '@includes/Header';

// Antd Components
import {
  Row,
  Col,
  Typography,
  Divider,
  Form,
  Input,
  Button,
  message,
} from 'antd';
const { TextArea } = Input;
const { Title } = Typography;

const messageKey = 'updatable';

const Contact: NextPage = () => {
  const sendEmail = async (values: any) => {
    // TS Ignore used due to antd type error?
    // @ts-ignore
    message.loading({ content: 'Sending email...', key: messageKey });
    try {
      const response = await emailjs.send(
        `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID}`,
        values,
        `${process.env.NEXT_PUBLIC_EMAIL_PUBLIC_ID}`
      );
      if (response.status === 200)
        // TS Ignore used to antd type error?
        // @ts-ignore
        message.success({
          content: 'Email was sent!',
          key: messageKey,
          duration: 3,
        });
    } catch (Error) {
      // TS Ignore used to antd type error?
      // @ts-ignore
      message.error({
        content: 'Opps, somthing went wrong!',
        key: messageKey,
        duration: 3,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Project List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header>
          <Title>Lets get in touch</Title>
        </Header>
        <Row justify="center">
          <Col span={24}>
            <Navbar />
          </Col>
        </Row>
        <Divider />
        <Row justify="center">
          <Col xs={20} sm={16} lg={12} xxl={8}>
            <Form name="form" autoComplete="off" onFinish={sendEmail}>
              <Form.Item
                name={'Name'}
                rules={[{ required: true, message: 'Please input your name' }]}
              >
                <Input placeholder="name" />
              </Form.Item>
              <Form.Item
                name={'Email'}
                rules={[{ required: true, message: 'Please input your email' }]}
              >
                <Input placeholder="email" />
              </Form.Item>
              <Form.Item
                name={'Message'}
                rules={[{ required: true, message: 'Please input a message' }]}
              >
                <TextArea rows={10} placeholder="message" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
        <br />
      </main>
    </>
  );
};

export default Contact;
