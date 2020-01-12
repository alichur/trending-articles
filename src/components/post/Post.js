import React from 'react';

function Post(props) {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.author}</div>
      <div>{props.slug}</div>
      <br></br>
    </div>
  );
}

export default Post;
