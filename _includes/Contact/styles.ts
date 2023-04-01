import styled from 'styled-components';

export const Title = styled.h1`
  color: var(--orange);
  font-size: 30px;
  font-weight: 600;
`;

export const InputField = styled.input`
  width: 100%;
  height: 55px;
  border: none;
  outline: none;
  padding-left: 10px;
  background-color: #333333;
  color: var(--grey);
  font-size: 18px;
  border-radius: 2px;
`;

export const InputTextField = styled.textarea`
  width: 100%;
  height: 300px;
  border: none;
  outline: none;
  padding: 10px;
  background-color: #333333;
  color: var(--grey);
  font-size: 18px;
  border-radius: 2px;
`;

export const Button = styled.button`
  height: 50px;
  width: 250px;
  color: var(--orange);
  background-color: transparent;
  outline: none;
  border: var(--orange) solid 2px;
  font-size: 24px;
  border-radius: 2px;
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
