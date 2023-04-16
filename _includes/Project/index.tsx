// Import Styled Components
import * as S from './styles';

// Import antd
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

import Image from 'next/image';

interface IProjectProps {
  githubLink?: string;
  demoLink?: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  imageContnet: string;
}

const Project = (props: IProjectProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ImageWrapper target={`_blank`} href={props.demoLink}>
          <Image src={props.imageSrc} alt="website demo" fill />
          <S.ImageLink>
            <h1>Live Website</h1>
          </S.ImageLink>
        </S.ImageWrapper>
        <S.Content>
          <S.TitleRow>
            <Title level={2}>{props.title}</Title>
          </S.TitleRow>
          <S.DescriptionRow>
            <Paragraph>{props.description}</Paragraph>
          </S.DescriptionRow>
          <S.ButtonRow>
            {props.githubLink !== undefined ? (
              <a target={`_blank`} href={`${props.githubLink}`}>
                <S.Button type="button">Github</S.Button>
              </a>
            ) : (
              <S.Button disabled={true}>Private</S.Button>
            )}
          </S.ButtonRow>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};

export default Project;
