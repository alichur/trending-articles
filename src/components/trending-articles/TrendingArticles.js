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
    const posts = this.state.posts;
    return (
      <main>
        <div>Here are the trending articles:</div>
        {posts ?
          posts.map(
            (post) =>
              <Article
                title={post.title}
                author={post.author}
                slug={post.slug}>
              </Article>
          ) :
          <div>No trending articles found</div>
        }
      </main>
    );
  }
}

export default TrendingArticles;
