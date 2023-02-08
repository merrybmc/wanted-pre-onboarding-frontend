import React from 'react';
import { Container } from '../../global/style/SignArticle.styled';
export default function Article() {
  return (
    <Container>
      <h1>To do List ✔</h1>
      <li>
        <label>
          <input type='checkbox' />
          <span>TODO 1</span>
        </label>
      </li>
      <li>
        <label>
          <input type='checkbox' />
          <span>TODO 2</span>
        </label>
      </li>
    </Container>
  );
}
