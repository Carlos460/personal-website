import * as S from './styles';
import { GithubOutlined, LinkedinFilled } from '@ant-design/icons';
import Link from 'next/link';

const IconStyle = {
  fontSize: '30px',
  color: 'white',
};

const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          My name is Carlos.
          <br />
          Software Developer
        </S.Title>
        <S.SubTitle>Full-Stack / React.js / Typescript</S.SubTitle>
        <Link href={'/resume'}>
          <a target={'_blank'} rel={'noreferrer'}>
            <S.Button>Resume</S.Button>
          </a>
        </Link>
        <S.IconList>
          <S.IconLink>
            <a
              target={'_blank'}
              rel={'noreferrer'}
              href={'https://github.com/Carlos460'}
            >
              <GithubOutlined style={IconStyle} />
            </a>
          </S.IconLink>
          <a
            target={'_blank'}
            rel={'noreferrer'}
            href={'https://www.linkedin.com/in/carlos-flores-460/'}
          >
            <LinkedinFilled style={IconStyle} />
          </a>
        </S.IconList>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
