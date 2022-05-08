import { ReactElement } from 'react';
import { Row, Col } from 'antd';

const Header = (props: { children: ReactElement }) => {
  return (
    <Row>
      <Col span={24} style={{ textAlign: 'center', margin: '25px 0px 0px' }}>
        {props.children}
      </Col>
    </Row>
  );
};

export default Header;
