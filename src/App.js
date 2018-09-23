import React, { Component } from 'react';
import BlogLists from './components/BlogLists'
import './App.css';
const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";


class App extends Component {
  render() {
    return (
      <div className="App">
        <BlogLists />
      </div>
    );
  }
}

export default App;
