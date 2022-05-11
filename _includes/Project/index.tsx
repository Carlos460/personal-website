// Import Styled Components
import * as S from './styles';

// Import antd
import { Button, Typography } from 'antd';
const { Title, Paragraph } = Typography;

interface IProjectProps {
  githubLink?: string;
  demoLink?: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const Project = (props: IProjectProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Image src={`${props.imageSrc}`} alt={`${props.imageAlt}`} />
        <S.Content>
          <S.TitleRow>
            <Title level={3}>{props.title}</Title>
          </S.TitleRow>
          <S.DescriptionRow>
            <Paragraph>{props.description}</Paragraph>
          </S.DescriptionRow>
          <S.ButtonRow>
            {props.githubLink !== undefined ? (
              <Button>
                <a target={`_blank`} href={`${props.githubLink}`}>
                  Code
                </a>
              </Button>
            ) : (
              <Button disabled={true}>Private</Button>
            )}
            {props.demoLink !== undefined ? (
              <Button type={`primary`}>
                <a target={`_blank`} href={`${props.demoLink}`}>
                  Demo
                </a>
              </Button>
            ) : (
              <Button disabled={true}>Offline</Button>
            )}
          </S.ButtonRow>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};

export default Project;
