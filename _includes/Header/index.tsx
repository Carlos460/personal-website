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
          I'm Carlos Flores Tufiño, a Software Engineer specialized in
          full-stack development.
          <br />
        </S.Title>
        <S.SkillList>
          <S.SkillIcon>Typescript</S.SkillIcon>
          <S.SkillIcon>JavaScript</S.SkillIcon>
          <S.SkillIcon>Next.js</S.SkillIcon>
          <S.SkillIcon>Java</S.SkillIcon>
          <S.SkillIcon>Spring</S.SkillIcon>
          <S.SkillIcon>Python</S.SkillIcon>
        </S.SkillList>
        <Link target={'_blank'} href={'/resume'} passHref>
          <S.Button>Resume</S.Button>
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
