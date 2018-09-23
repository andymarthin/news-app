import React, { Component } from 'react';
import BlogLists from './components/BlogLists';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import './App.css';

const link =
"https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      articles: [],
      searchKey: '',
      loading: false
    }
  }

  componentDidMount(){
    // fetch(link)
    //   .then((data) => data.json())
    //   .then((data) => {
    //     this.setState({
    //       articles: data
    //     })
    //   console.log(this.state.articles)
    //   })

    axios.get(link)
    .then(response => {
      if(response.status === 200){
        this.setState({
          articles: response.data,
          loading: false
        })
      }
    })
    .catch((err) => {
      if(err){
        this.setState({
          loading: false
        })
      }
    })
  }

  doSearch = (event)=> {
    this.setState({
      searchKey: event.target.value
    })
  }

  render() {
    const filteredArticles = this.state.articles.filter(article => (
      article.title
        .toLowerCase()
        .includes(this.state.searchKey)
    ))

    const Articles = filteredArticles.map((article, index) =>
      <BlogLists 
      article={article}
      key={index} 
      />
      )
    const ComponentLoading = <h1>Loading...</h1>
    return (
      <div className="App">
      <SearchBox onSearch={this.doSearch} />
      <h2>{this.state.searchKey}</h2>
      { this.state.loading ? ComponentLoading : Articles }
      </div>
      );
    }
  }

  export default App;
