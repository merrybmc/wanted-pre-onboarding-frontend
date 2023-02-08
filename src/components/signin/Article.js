import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { reOnChange } from '../../global/components/OnChange';
import { Container, InputBox, Btn } from '../../global/style/SignArticle.styled';

export default function Article() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });

  // 로그인
  const signUp = () => {
    axios
      .post('https://pre-onboarding-selection-task.shop/auth/signin', userInfo, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function (response) {
        console.log(response);
        navigate('/todo');
        localStorage.setItem('JWT', response.data.access_token);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  return (
    <Container>
      <div>
        ID {'\u00A0'}
        {'\u00A0'}:{'\u00A0'}
        <InputBox
          data-testid='email-input'
          onChange={(event) => {
            reOnChange(event, userInfo, setUserInfo);
          }}
          name='email'
        />
        <br />
        PW :{'\u00A0'}
        <InputBox
          data-testid='password-input'
          onChange={(event) => {
            reOnChange(event, userInfo, setUserInfo);
          }}
          name='password'
        />
      </div>
      <br />
      <Btn data-testid='signup-button' onClick={() => signUp()}>
        로그인
      </Btn>
      <Btn onClick={() => navigate(-1)}>Home</Btn>
    </Container>
  );
}
