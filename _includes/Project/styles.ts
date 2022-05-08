import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 700px;

  display: flex;
  flex-direction: row;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 750px) {
    width: 350px;

    flex-direction: column;
  }
`;

export const Image = styled.div`
  width: 50%;
  height: 250px;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 50%;
  height: 250px;
  @media (max-width: 750px) {
    width: 100%;
    height: 275px;
  }
`;

export const TitleRow = styled.div`
  padding-top: 10px;
  height: 50px;
  @media (max-width: 750px) {
    padding: 5px 20px;
  }
`;

export const DescriptionRow = styled.div`
  padding-right: 20px;
  height: 150px;
  overflow-y: auto;
  @media (max-width: 750px) {
    height: 175px;
    padding: 5px 20px;
  }
`;

export const ButtonRow = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: right;
  & > button {
    margin: 5px 20px 0px 0px;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;
