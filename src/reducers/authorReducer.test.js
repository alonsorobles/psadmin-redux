import expect from "expect";
import authorReducer from "./authorReducer";
import * as actions from "../actions/authorActions";
import * as types from "../actions/actionTypes";

describe('Author Reducer', () => {
  it('should add author when passed ' + types.CREATE_AUTHOR_SUCCESS, () => {
    // arrange
    const initialState = [
      {name: 'A'},
      {name: 'B'}
    ];
    const newAuthor = {name: 'C'};
    const action = actions.createAuthorSuccess(newAuthor);

    // act
    const newState = authorReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].name).toEqual('A');
    expect(newState[1].name).toEqual('B');
    expect(newState[2].name).toEqual('C');
  });

  it('should update author when passed ' + types.UPDATE_AUTHOR_SUCCESS, () => {
    // arrange
    const initialState = [
      {id: 'A', name: 'A'},
      {id: 'B', name: 'B'},
      {id: 'C', name: 'C'}
    ];
    const newName = 'New Name';
    const author = {id: 'B', name: newName};
    const action = actions.updateAuthorSuccess(author);

    // act
    const newState = authorReducer(initialState, action);
    const updatedAuthor = newState.find(c => c.id == author.id);
    const untouchedAuthor = newState.find(c => c.id == 'A');

    // assert
    expect(newState.length).toEqual(3);
    expect(updatedAuthor.name).toEqual(newName);
    expect(untouchedAuthor.name).toEqual('A');
  });
});
