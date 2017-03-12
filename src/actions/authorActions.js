import * as types from "./actionTypes";
import AuthorApi from "../api/mockAuthorApi";

//noinspection JSUnusedGlobalSymbols
export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return function (dispatch) {
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error); // probably want to create a loadCoursesFailure action to handle error.
    });
  };
}
