import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 50px 0px 50px;
`;

export const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  @media (max-width: 750px) {
    width: 100%;
    flex-direction: column;
  }
`;

interface ImageProps {
  imgSrc: string;
}

export const Image = styled.div<ImageProps>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center;
  background-size: cover;

  width: 500px;
  height: 350px;
  border-radius: 10px;
  @media (max-width: 750px) {
    max-width: none;
    max-height: none;
    width: 100%;
    height: 400px;
  }
  @media (max-width: 675px) {
    height: 375px;
  }
  @media (max-width: 400px) {
    width: 100%;
    height: 350px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 100%;
  @media (max-width: 750px) {
    width: 100%;
    height: 220px;
  }
`;

export const TitleRow = styled.div`
  padding: 10px 20px 0px;
  @media (max-width: 750px) {
    padding: 15px 20px 0px;
  }
`;

export const DescriptionRow = styled.div`
  padding: 0px 20px;
  overflow-y: auto;
  @media (max-width: 750px) {
    padding: 5px 20px;
  }
`;

export const ButtonRow = styled.div`
  width: 100%;
  height: 50px;

  margin: auto 0px 0px;
  display: flex;
  justify-content: right;
  & > button {
    margin: 5px 20px 0px 0px;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;
