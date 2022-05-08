import Link from 'next/link';
import { Button, Result } from 'antd';

const Custom404 = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        style={{ margin: '75px auto 0px' }}
        extra={
          <Button type="primary">
            <Link href={'/'}>
              <a>Back Home</a>
            </Link>
          </Button>
        }
      />
    </div>
  );
};
export default Custom404;
