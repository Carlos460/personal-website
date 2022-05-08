import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;

  height: 100%;
  width: 100%;
  list-style: none;
`;

export const Item = styled.li`
  margin: 0px 20px;

  font-size: 16px;
  font-weight: 600;
  & > a {
    color: rgb(33, 33, 33);
    text-align: center;
  }
`;
