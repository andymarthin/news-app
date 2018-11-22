import React, { Component } from "react";
import { connect } from "react-redux";
import { articlesFetchData } from "../actions/articles";

class BlogLists extends Component {
  componentDidMount() {
    this.props.fetchData(
      "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json"
    );
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ul>
        {this.props.articles.map(article => (
          <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
          </div>
        ))}
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    articles: state.articles,
    hasErrored: state.articlesHasErrored,
    isLoading: state.articlesIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(articlesFetchData(url))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogLists);
