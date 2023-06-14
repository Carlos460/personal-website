import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5px 0px 80px;
`;

export const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  gap: 25px;
  padding: 15px;
  border-radius: 5px;
  transition: background-color 300ms ease;
  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const ImageWrapper = styled.a`
  position: relative;
  width: 650px;
  height: 350px;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 1000px) {
    max-width: none;
    max-height: none;
    width: 100%;
    height: 500px;
  }

  @media (max-width: 675px) {
    height: 375px;
  }

  @media (max-width: 400px) {
    width: 100%;
    height: 350px;
  }
  & > img {
    transition: transform 400ms ease;
  }

  &:hover > img {
    transform: scale(1.05);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 4px;

  width: 50%;
  height: 100%;
  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  margin-bottom: 8px;
  & > h2 {
    color: var(--orange);
    margin: 0px;
    font-size: 22px;
    text-decoration: underline;
  }
`;

export const DescriptionRow = styled.div`
  overflow-y: auto;
  font-size: 16px;
  & > div {
    color: var(--grey);
  }
`;

export const ButtonRow = styled.div`
  width: 100%;

  margin: auto 0px 0px;
  & > button {
    margin: 5px 20px 0px 0px;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Button = styled.button<{ disabled?: boolean }>`
  height: 50px;
  width: 100%;
  margin: 0px 0px 0px;

  border-radius: 5px;
  background-color: transparent;
  color: ${(props) => (props.disabled ? `var(--grey)` : `var(--orange)`)};
  border: solid 2px
    ${(props) => (props.disabled ? `var(--grey)` : `var(--orange)`)};
  text-decoration: none;
  outline: none;

  text-align: center;
  vertical-align: center;
  font-size: 20px;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
  &:hover {
    color: white;
    border-color: white;
  }
  &:active {
    color: var(--orange);
    border-color: var(--orange);
  }
`;
