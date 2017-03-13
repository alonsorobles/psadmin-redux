import expect from "expect";
import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";
import * as types from "../actions/actionTypes";

describe('Course Reducer', () => {
  it('should add course when passed ' + types.CREATE_COURSE_SUCCESS, () => {
    // arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];
    const newCourse = {title: 'C'};
    const action = actions.createCourseSuccess(newCourse);

    // act
    const newState = courseReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('should update course when passed ' + types.UPDATE_COURSE_SUCCESS, () => {
    // arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];
    const newTitle = 'New Title';
    const course = {id: 'B', title: newTitle};
    const action = actions.updateCourseSuccess(course);

    // act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(c => c.id == course.id);
    const untouchedCourse = newState.find(c => c.id == 'A');

    // assert
    expect(newState.length).toEqual(3);
    expect(updatedCourse.title).toEqual(newTitle);
    expect(untouchedCourse.title).toEqual('A');
  });

  it('should delete course when passed ' + types.DELETE_COURSE_SUCCESS, () => {
    // arrange
    const initialState = [
      {id: 'A'},
      {id: 'B'},
      {id: 'C'}
    ];
    const course = {id: 'B'};
    const action = actions.deleteCourseSuccess(course);

    // act
    const newState = courseReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(2);
    expect(newState[0].title).toNotEqual('B');
    expect(newState[1].title).toNotEqual('B');
  });
});
