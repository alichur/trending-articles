import React from 'react';
import { tag } from './Tag.module.css';

function Tag(props) {
  return (
    <div className={tag}>{props.name}</div>
  );
}

export default Tag;
