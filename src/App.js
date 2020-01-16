import React from 'react';
import BlogPost from './components/blog-post/BlogPost.js'
import TrendingPosts from './components/trending-posts/TrendingPosts.js'
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={TrendingPosts} exact />
        <Route path="/blog/:slug" component={BlogPost} exact />
      </Switch>
    </main>
  )
}

export default App;
