import React from 'react';
import { Link } from "react-router-dom";
import Tag from '../tag/Tag.js'
import { card, author, title, tags } from './PostPreview.module.css';

function PostPreview(props) {
  const tagListItems = props.tags.map((tag) => <li key={tag}><Tag name={tag}></Tag></li>);
  return (
    <article className={card}>
      <div className={author}>{props.author}</div>
      <Link className={title} to={`/blog/${props.slug}`}>{props.title}</Link>
      <div>
        <ul className={tags}>
          {tagListItems}
        </ul>
      </div>
    </article>
  );
}

export default PostPreview;
