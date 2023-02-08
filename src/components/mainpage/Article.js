import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Btn } from '../../global/style/SignArticle.styled';

export default function Article() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <h1>wanted-pre-onboarding-frontend</h1>
        <h4>with merrybmc😎</h4>
        <Btn
          onClick={() => {
            navigate('/signup');
          }}
        >
          회원가입
        </Btn>
        <Btn
          onClick={() => {
            navigate('/signin');
          }}
        >
          로그인
        </Btn>
      </Container>
    </>
  );
}
