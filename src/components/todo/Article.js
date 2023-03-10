import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Container, Btn, TodoList } from '../../global/style/SignArticle.styled';
import { reOnChange } from '../../global/components/OnChange';

export default function Article() {
  const [todo, setTodo] = useState({ todo: '' });
  const [todolist, setTodolist] = useState();
  const [updateTodoItem, setUpdateTodoItem] = useState();
  const [updateState, setUpdateState] = useState(false);
  const [updateTodoNum, setUpdateTodoNum] = useState();

  useEffect(() => {
    getTodo();
  }, []);

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

  const updateCheckState = (id, todo, state) => {
    if (state === false) {
      axios
        .put(
          `https://pre-onboarding-selection-task.shop/todos/${id}`,
          { todo: todo, isCompleted: true },
          {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
          }
        )
        .then(function (response) {
          console.log(response);
          getTodo();
          setTodolist(response.data.map((datas) => datas));
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {});
    } else if (state === true) {
      axios
        .put(
          `https://pre-onboarding-selection-task.shop/todos/${id}`,
          { todo: todo, isCompleted: false },
          {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
          }
        )
        .then(function (response) {
          console.log(response);
          getTodo();
          setTodolist(response.data.map((datas) => datas));
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {});
    }
  };

  const updateTodo = (id, todo, state) => {
    axios
      .put(
        `https://pre-onboarding-selection-task.shop/todos/${id}`,
        {
          todo: todo,
          isCompleted: state,
        },
        {
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        }
      )
      .then(function (response) {
        getTodo();
        setUpdateState(false);
        setUpdateTodoNum('');
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  const deleteTodo = (id) => {
    axios
      .delete(`https://pre-onboarding-selection-task.shop/todos/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (response) {
        console.log(response);
        getTodo();
        //   setTodolist(response.data.map((datas) => datas));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  const setState = (id) => {
    setUpdateState(true);
    setUpdateTodoNum(id);
  };

  const cancelState = (id) => {
    setUpdateState(false);
    setUpdateTodoNum('');
  };

  return (
    <Container>
      <h1>To do List ???</h1>
      <div>
        <input data-testid='new-todo-input' onChange={(event) => reOnChange(event, todo, setTodo)} name='todo' />
        {'\u00A0'}
        <Btn
          data-testid='new-todo-add-button'
          onClick={() => {
            createTodo();
          }}
        >
          ??????
        </Btn>
      </div>
      <TodoList>
        {todolist &&
          todolist.map((datas) => (
            <li key={datas.id}>
              <label>
                <input
                  type='checkbox'
                  checked={datas.isCompleted}
                  onClick={() => {
                    updateCheckState(datas.id, datas.todo, datas.isCompleted);
                  }}
                />

                {updateState === true && updateTodoNum === datas.id ? (
                  <>
                    <input data-testid='modify-input' onChange={(event) => reOnChange(event, updateTodoItem, setUpdateTodoItem)} name='todo'></input>
                    <button
                      data-testid='submit-button'
                      onClick={() => {
                        updateTodo(datas.id, updateTodoItem.todo, datas.isCompleted);
                      }}
                    >
                      ??????
                    </button>
                    <button
                      data-testid='cancel-button'
                      onClick={() => {
                        cancelState(datas.id);
                      }}
                    >
                      ??????
                    </button>
                  </>
                ) : (
                  <>
                    <span>
                      {datas.todo}
                      {'\u00A0'}
                    </span>
                    <button
                      data-testid='modify-button'
                      onClick={() => {
                        setState(datas.id);
                      }}
                    >
                      ??????
                    </button>
                    <button
                      data-testid='delete-button'
                      onClick={() => {
                        deleteTodo(datas.id);
                      }}
                    >
                      ??????
                    </button>
                  </>
                )}
              </label>
            </li>
          ))}
      </TodoList>
    </Container>
  );
}
