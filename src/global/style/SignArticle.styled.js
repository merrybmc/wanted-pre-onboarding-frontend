import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputBox = styled.input`
  width: 150px;
`;

export const Btn = styled.button`
  width: 80px;
  height: 25px;
  margin: 5px;
  color: #333d79;
  background-color: #faebef;
  font-weight: 700;
  &:hover {
    color: #faebef;
    background-color: #333d79;
  }
`;
