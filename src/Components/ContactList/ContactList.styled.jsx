import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  gap: 7px;
`;

export const Btn = styled.button`
  margin-left: auto;
  font-size: 18px;

  color: red;
  background-color: transparent;

  border: none;

  &:hover {
    color: green;
  }
`;
