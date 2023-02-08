import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Container, Btn } from '../../global/style/SignArticle.styled';
import { reOnChange } from '../../global/components/OnChange';
export default function Article() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [todo, setTodo] = useState({ todo: '' });
  const [todolist, setTodolist] = useState();

  useEffect(() => {
    getTodo();
  }, []);

  // 로그인
  const token = localStorage.getItem('JWT');

  const createTodo = () => {
    axios
      .post('https://pre-onboarding-selection-task.shop/todos', todo, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      })
      .then(function (response) {
        getTodo();
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  const getTodo = () => {
    axios
      .get('https://pre-onboarding-selection-task.shop/todos', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        console.log(response);
        setTodolist(response.data.map((datas) => datas));
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
            createTodo();
          }}
        >
          추가
        </Btn>
      </div>
      {todolist &&
        todolist.map((datas) => (
          <li>
            <label>
              <input type='checkbox' />
              <span>{datas.todo}</span>
            </label>
          </li>
        ))}
    </Container>
  );
}
