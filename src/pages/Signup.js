import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Signup() {
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

  const onChangeEmail = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onChangePassword = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const signUp = () => {
    // 회원가입
    axios
      .post('https://pre-onboarding-selection-task.shop/auth/signup', userInfo, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        //항상 실행
      });
  };

  return (
    <Container>
      <div>
        ID {'\u00A0'}
        {'\u00A0'}: <InputBox data-testid='email-input' onChange={onChangeEmail} name='email' />
        <br />
        PW : <InputBox data-testid='password-input' onChange={onChangePassword} name='password' />
      </div>
      <br />
      <button data-testid='signup-button' onClick={() => signUp()} disabled={btnState}>
        회원가입
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.input`
  width: 150px;
`;
