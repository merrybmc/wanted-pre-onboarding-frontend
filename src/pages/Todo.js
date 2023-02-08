import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Article from '../components/todo/Article';

export default function Todo() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('JWT') === null) {
      navigate('/signin');
    }
  });
  return (
    <>
      <Article />
    </>
  );
}
