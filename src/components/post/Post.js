import React from 'react';
import { card, author, title } from './Post.module.css';

function Post(props) {
  return (
    <article className={card}>
      <div className={author}>{props.author}</div>
      <div className={title}>{props.title}</div>
      <div>{props.slug}</div>
      <br></br>
    </article>
  );
}

export default Post;
