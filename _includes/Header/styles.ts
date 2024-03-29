import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
`;

export const Container = styled.div`
  width: 100%;
  margin: auto 0px;
  border-left: 2px white solid;
  padding-left: 25px;
`;

export const Title = styled.h1`
  color: white;
  margin: 0px;
  font-size: 32px;
  line-height: 36px;
  max-width: 600px;
  font-weight: 300;
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const SkillList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
`;

export const SkillIcon = styled.div`
  color: #fafafa;
  font-size: 16px;
  padding: 5px 10px;
  margin: 15px 0px 0px;
  border-radius: 5px;
  background-color: var(--orange);
  transition: transform 300ms ease;
  cursor: default;
  &:hover {
    transform: translateY(-4px);
  }
`;

export const IconList = styled.ul`
  margin: 15px 0px 0px;
  list-style: none;
  display: flex;
  gap: 20px;
`;

export const IconLink = styled.li`
  & > *:hover {
    color: var(--orange);
  }
`;

export const Button = styled.button`
  height: 50px;
  width: 150px;
  background-color: transparent;
  color: var(--orange);
  border: solid 2px var(--orange);
  outline: none;
  margin: 0px 0px 0px;

  font-size: 24px;
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
