import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Container, Btn } from '../../global/style/SignArticle.styled';
import { reOnChange } from '../../global/components/OnChange';
export default function Article() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [todo, setTodo] = useState({ todo: '' });

  // 로그인
  const token = localStorage.getItem('JWT');
  const signUp = () => {
    axios
      .post('https://pre-onboarding-selection-task.shop/todos', todo, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
  return (
    <Container>
      <h1>To do List ✔</h1>
      <div>
        <input data-testid='new-todo-input' onChange={(event) => reOnChange(event, todo, setTodo)} name='todo' />
        {'\u00A0'}
        <Btn
          data-testid='new-todo-add-button'
          onClick={() => {
            signUp();
          }}
        >
          추가
        </Btn>
      </div>
      <li>
        <label>
          <input type='checkbox' />
          <span>TODO 1</span>
        </label>
      </li>
      <li>
        <label>
          <input type='checkbox' />
          <span>TODO 2</span>
        </label>
      </li>
    </Container>
  );
}
