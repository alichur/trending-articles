import React from 'react';
import Post from '../post/Post.js';
import { wrapper } from './TrendingPosts.module.css';

class TrendingPosts extends React.Component {
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
      <main className={wrapper}>
        <div>Here are the trending articles:</div>
        {posts ?
          posts.map(
            (post) =>
              <Post
                title={post.title}
                author={post.author}
                slug={post.slug}>
              </Post>
          ) :
          <div>No trending articles found</div>
        }
      </main>
    );
  }
}

export default TrendingPosts;
