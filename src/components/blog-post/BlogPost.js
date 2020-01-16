import React from 'react';
import Markdown from 'markdown-to-jsx';

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', author: '', content: '' };
  }

  componentDidMount() {
    const slug = this.props.match.params.slug;
    fetch(`http://localhost:3000/post/${slug}`)
      .then((result) => result.json())
      .then((post) => {
        this.setState({ title: post.title, author: post.author, content: post.content });
      })
  }

  render() {
    return (
      <article>
        <h1>{this.state.title}</h1>
        <h2>{this.state.author}</h2>
        <Markdown>{this.state.content}</Markdown>
      </article >
    );
  }
}

export default BlogPost;