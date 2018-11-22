import axios from "axios";

export function articlesHasErrored(bool) {
  return {
    type: "ARTICLES_HAS_ERRORED",
    hasErrored: bool
  };
}

export function articlesIsLoading(bool) {
  return {
    type: "ARTICLES_IS_LOADING",
    isLoading: bool
  };
}

export function articlesFetchDataSuccess(articles) {
  return {
    type: "ARTICLES_FETCH_DATA_SUCCESS",
    articles
  };
}

export function articlesFetchData(url) {
  return dispatch => {
    dispatch(articlesIsLoading(true));
    axios
      .get(url)
      .then(response => {
        if (response.status === 200) {
          dispatch(articlesIsLoading(false));
          dispatch(articlesFetchDataSuccess(response.data));
        } else {
          throw Error(response.statusText);
        }
      })
      .catch(err => {
        dispatch(articlesHasErrored(true));
      });
  };
}
