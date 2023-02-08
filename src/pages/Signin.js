import React from 'react';
import Article from '../components/signin/Article';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Signin() {
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
