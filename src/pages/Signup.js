import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function Signup() {
  let data = { email: 'merrybmc@gmail.com', password: '1q2w3e4r' };

  const SignUp = () => {
    // 회원가입
    axios
      .post('https://pre-onboarding-selection-task.shop/auth/signup', data, {
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
        {'\u00A0'}: <InputBox data-testid='email-input' />
        <br />
        PW : <InputBox data-testid='password-input' />
      </div>
      <br />
      <button data-testid='signup-button'>회원가입</button>
      <button onClick={() => SignUp()}>axios 테스트</button>
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
