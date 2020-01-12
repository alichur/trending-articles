import React from 'react';
import { card } from './Post.module.css';

function Post(props) {
  return (
    <article className={card}>
      <div>{props.title}</div>
      <div>{props.author}</div>
      <div>{props.slug}</div>
      <br></br>
    </article>
  );
}

export default Post;
