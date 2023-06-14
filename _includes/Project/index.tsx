// Import Styled Components
import * as S from './styles';

// Import antd
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

import Image from 'next/image';

interface IProjectProps {
  title: string;
  description: string;
  imageDescription: string;
  imageSource: string;
  githubLink?: string;
  websiteLink?: string;
}

const Project = (props: IProjectProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ImageWrapper target={`_blank`} href={props.websiteLink}>
          <Image src={props.imageSource} alt="website demo" fill />
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
