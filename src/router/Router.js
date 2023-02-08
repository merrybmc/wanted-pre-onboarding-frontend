import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from '../pages/Signup';
import MainPage from '../pages/Mainpage';
import TodoList from '../pages/Todo';
import styled from 'styled-components';

export default function router() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/todolist' element={<TodoList />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
