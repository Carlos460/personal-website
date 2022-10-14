// Import Next
import { useState } from 'react';

// Emailjs
import emailjs from '@emailjs/browser';

// Antd Components
import { Row, Col, Form, Input, Button, message } from 'antd';
const { TextArea } = Input;

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
        <br />

        <Row justify="center">
          <Col xs={24} sm={20} lg={14} xxl={12}>
            <h1>Lets talk!</h1>
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
      </div>
    </>
  );
};

export default Contact;
