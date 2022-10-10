import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: felx;
  justify-content: space-between;
`;

export const Name = styled.div`
  margin: auto 0px;
  & > h2 {
    color: rgb(50, 50, 50);
    margin: 0px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;

  margin: auto 0px;
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
