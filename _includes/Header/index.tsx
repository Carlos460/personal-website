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
        <S.Title style={{ fontWeight: 500 }}>
          I'm Carlos Flores Tufiño
          <br />
        </S.Title>
        <S.Title style={{ fontSize: '22px', color: '#cccccc' }}>
          Software Engineer specialized in Full-Stack Development.
        </S.Title>
        <S.SkillList>
          <S.SkillIcon>Typescript</S.SkillIcon>
          <S.SkillIcon>JavaScript</S.SkillIcon>
          <S.SkillIcon>Next.js</S.SkillIcon>
          <S.SkillIcon>Java</S.SkillIcon>
          <S.SkillIcon>Spring</S.SkillIcon>
          <S.SkillIcon>Python</S.SkillIcon>
        </S.SkillList>
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
