// Import Styled Components
import * as S from './styles';

// Import antd
import { Button, Typography } from 'antd';
const { Title, Paragraph } = Typography;

const Project = (props: {
  githubLink?: string;
  demoLink?: string;
  title: string;
  description: string;
}) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Image></S.Image>
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
                <a href={`${props.githubLink}`}>Code</a>
              </Button>
            ) : (
              <Button disabled={true}>Private</Button>
            )}
            {props.demoLink !== undefined ? (
              <Button>
                <a href={`${props.demoLink}`}>Demo</a>
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
