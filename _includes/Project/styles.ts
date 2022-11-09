import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px 80px;
`;

export const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  gap: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }
`;

interface ImageProps {
  imgSrc: string;
}

export const Image = styled.a<ImageProps>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center;
  background-size: cover;

  width: 650px;
  height: 350px;
  border-radius: 2px;
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
  &:hover > div {
    opacity: 1;
  }
  &:hover > div > h1 {
    transform: translateY(0px);
  }
`;

export const ImageLink = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  transition: opacity 0.2s ease;
  opacity: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > h1 {
    width: 100%;
    margin: 0px;
    color: white;
    font-size: 35px;
    transform: translateY(25px);
    transition: transform 0.3s ease;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 100%;
  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
  }
`;

export const TitleRow = styled.div`
  padding: 10px 0px 0px;
  & > h2 {
    color: var(--orange);
  }
`;

export const DescriptionRow = styled.div`
  overflow-y: auto;
  font-size: 17px;
  & > div {
    color: var(--grey);
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

export const Button = styled.button<{ disabled?: boolean }>`
  height: 40px;
  width: 130px;
  background-color: transparent;
  color: ${(props) => (props.disabled ? `var(--grey)` : `var(--orange)`)};
  border: solid 2px
    ${(props) => (props.disabled ? `var(--grey)` : `var(--orange)`)};
  text-decoration: none;
  outline: none;
  margin: 0px 0px 0px;

  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, width 0.3s ease;
  &:hover {
    width: 145px;
  }
  &:active {
    width: 135px;
  }
`;
