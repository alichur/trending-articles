import React from 'react';

function Article(props) {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.author}</div>
      <div>{props.slug}</div>
      <br></br>
    </div>
  );
}

export default Article;
