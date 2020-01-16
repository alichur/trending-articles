import React from 'react';
import Post from '../post-preview/PostPreview.js';
import HeaderBar from '../header-bar/HeaderBar.js'
import { wrapper, content, heading } from './TrendingPosts.module.css';


class TrendingPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3000/posts')
      .then((result) => result.json())
      .then((posts) => {
        this.setState({ posts: posts });
      });
  }

  render() {
    const posts = this.state.posts;
    return (

      <main className={wrapper}>
        <HeaderBar />
        <h1 className={heading}>Trending Articles</h1>
        <div className={content}>
          {posts.length > 0 ?
            posts.map(
              (post, index) =>
                <Post
                  key={index}
                  title={post.title}
                  author={post.author}
                  tags={post.tags}
                  slug={post.slug}>
                </Post>
            ) :
            <div>No trending articles found</div>
          }
        </div>
      </main>
    );
  }
}

export default TrendingPosts;
