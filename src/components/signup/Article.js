import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { reOnChange } from '../../global/components/OnChange';
import { Container, InputBox } from '../../global/style/SignArticle.styled';

export default function Article() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [btnState, setBtnState] = useState();

  useEffect(() => {
    const checkEmail = userInfo.email.toString().includes('@');
    const checkPassword = userInfo.password.length;

    if (checkEmail === true && checkPassword >= 8) {
      setBtnState(false);
      console.log(userInfo);
    } else if (checkEmail === false || userInfo.password.length < 8) {
      setBtnState(true);
      console.log(userInfo);
    }
  }, [userInfo]);

  // 회원가입
  const signUp = () => {
    axios
      .post('https://pre-onboarding-selection-task.shop/auth/signup', userInfo, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function (response) {
        console.log(response);
        navigate('/signin');
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
      <button data-testid='signup-button' onClick={() => signUp()} disabled={btnState}>
        회원가입
      </button>
    </Container>
  );
}
