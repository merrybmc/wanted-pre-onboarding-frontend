import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Mainpage() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate('/signup');
        }}
      >
        회원가입
      </button>
    </>
  );
}
