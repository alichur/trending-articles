import React from 'react';
import Article from '../article/Article.js'

class TrendingArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3000/posts')
      .then((result) => result.json())
      .then((posts) => {
        console.log(posts);
        this.setState({ posts: posts });
      });
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
