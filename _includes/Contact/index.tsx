// Import Next
import { useState } from 'react';

// Emailjs
import emailjs from '@emailjs/browser';

// Antd Components
import { Row, Col, Form, Input, Button, message } from 'antd';
const { TextArea } = Input;

import * as S from './styles';

const messageKey = 'updatable';

const Contact = () => {
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
      <div id="contact">
        <S.Title>Get in Touch!</S.Title>
        <Form name="form" autoComplete="off" onFinish={sendEmail}>
          <Form.Item
            name={'name'}
            rules={[{ required: true, message: 'Please input your name' }]}
          >
            <S.InputField placeholder="Name" />
          </Form.Item>
          <Form.Item
            name={'email'}
            rules={[{ required: true, message: 'Please input your email' }]}
          >
            <S.InputField placeholder="Email" />
          </Form.Item>
          <Form.Item
            name={'message'}
            rules={[{ required: true, message: 'Please input a message' }]}
          >
            <S.InputTextField rows={10} placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <S.Button type="submit" value={'Submit'}>
              Send Message
            </S.Button>
          </Form.Item>
        </Form>
        <br />
      </div>
    </>
  );
};

export default Contact;
