import * as types from "./actionTypes";
import AuthorApi from "../api/mockAuthorApi";
import {beginAjaxCall} from "./ajaxStatusActions";

//noinspection JSUnusedGlobalSymbols
export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error); // probably want to create a loadCoursesFailure action to handle error.
    });
  };
}

export function createAuthorSuccess(author) {
  return {type: types.CREATE_AUTHOR_SUCCESS, author};
}

export function updateAuthorSuccess(author) {
  return {type: types.UPDATE_AUTHOR_SUCCESS, author};
}

export function saveAuthor(author) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi.saveAuthor(author).then(savedAuthor => {
      author.id ? dispatch(updateAuthorSuccess(savedAuthor)) : dispatch(createAuthorSuccess(savedAuthor));
    }).catch(error => {
      throw(error);
    });
  };
}
