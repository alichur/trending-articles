import React from 'react';
import Tag from '../tag/Tag.js'
import { card, author, title, tags } from './Post.module.css';

function Post(props) {
  const tagListItems = props.tags.map((tag) => <li key={tag}><Tag name={tag}></Tag></li>);
  return (
    <article className={card} onClick={() => DisplayFullPost(props.slug)}>
      <div className={author}>{props.author}</div>
      <div className={title} >{props.title}</div>
      {}
      <div>
        <ul className={tags}>
          {tagListItems}
        </ul>
      </div>
    </article>
  );
}

function DisplayFullPost(slug) {
  return slug ?
    fetch(`http://localhost:3000/post/${slug}`)
      .then((result) => result.json())
      .then((post) => {
        alert(
          `I ran out of time to put this content on a new page with proper routing :) \n  
          ${post.title} \n
          ${post.author} \n
          ${post.content}`
        );
      })
    : null;

}
export default Post;
