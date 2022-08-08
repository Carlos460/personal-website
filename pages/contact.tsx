// Import Next
import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

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
  const [isContactTimeout, setIsContactTimeout] = useState(false);

  const timeoutContact = () => {
    setIsContactTimeout(true);
    setTimeout(() => {
      setIsContactTimeout(false);
    }, 20000);
  };

  const sendEmail = async (values: any) => {
    // TS Ignore used due to antd type error?
    // @ts-ignore
    message.loading({ content: 'Sending email...', key: messageKey });
    if (!isContactTimeout) {
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
        timeoutContact();
      } catch (Error) {
        // TS Ignore used to antd type error?
        // @ts-ignore
        message.error({
          content: 'Opps, somthing went wrong!',
          key: messageKey,
          duration: 3,
        });
      }
    } else if (isContactTimeout)
      // TS Ignore used to antd type error?
      // @ts-ignore
      message.info({
        content: 'Please wait before sending another email.',
        key: messageKey,
        duration: 5,
      });
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
            <Form name="form" autoComplete="off" onFinish={sendEmail}>
              <Form.Item
                name={'name'}
                rules={[{ required: true, message: 'Please input your name' }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                name={'email'}
                rules={[{ required: true, message: 'Please input your email' }]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name={'message'}
                rules={[{ required: true, message: 'Please input a message' }]}
              >
                <TextArea rows={10} placeholder="Message" />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ width: '100%' }}
                  type="primary"
                  htmlType="submit"
                >
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
