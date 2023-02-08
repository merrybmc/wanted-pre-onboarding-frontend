import React from 'react';
import Article from '../components/signup/Article';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('JWT') !== null) {
      navigate('/todo');
    }
  });
  return (
    <>
      <Article />
    </>
  );
}
