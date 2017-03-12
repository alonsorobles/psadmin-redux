// Testing actions may not be worth while since logic is very simple yielding low value tests.
// Although testing thunks provide more value since mocked API behavior maybe tested.
import expect from "expect";
import {describe, it, afterEach} from "mocha";
import * as courseActions from "./courseActions";
import * as types from "./actionTypes";
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";

describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a ' + types.CREATE_COURSE_SUCCESS + ' action', () => {
      // arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      // act
      const action = courseActions.createCourseSuccess(course);

      // assert
      expect(action).toEqual(expectedAction);
    })
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Course Actions (a.k.a Course Thunks)', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create ' + types.BEGIN_AJAX_CALL + ' and ' + types.LOAD_COURSES_SUCCESS + ' when loading courses', (done) => {
    // Here is an example call to nock.
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, {body: {course: [{id: 1, firstName: 'Cory', lastName: 'House'}]}});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });
  });
});
