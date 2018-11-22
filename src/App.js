import React, { Component } from "react";
import BlogLists from "./components/BlogLists";
import axios from "axios";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
const store = configureStore();

const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      searchKey: "",
      loading: false
    };
  }

  componentDidMount() {
    // fetch(link)
    //   .then((data) => data.json())
    //   .then((data) => {
    //     this.setState({
    //       articles: data
    //     })
    //   console.log(this.state.articles)
    //   })
  }

  doSearch = event => {
    this.setState({
      searchKey: event.target.value
    });
  };

  render() {
    return (
      <Provider store={store}>
        <BlogLists />
      </Provider>
    );
  }
}

export default App;
