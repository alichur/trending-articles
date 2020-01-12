import React from 'react';
import Article from '../article/Article.js'

class TrendingArticles extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/posts')
      .then((result) => result.json())
      .then((posts) => console.log(posts));
  }

  render() {
    return (
      <main>
        <div>Here are the trending articles:</div>
        <Article></Article>
        <Article></Article>
        <Article></Article>
      </main>
    );
  }
}

export default TrendingArticles;
