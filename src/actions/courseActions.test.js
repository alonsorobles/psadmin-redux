// Testing actions may not be worth while since logic is very simple yielding low value tests.

import expect from "expect";
import {describe, it} from "mocha";
import * as courseActions from "./courseActions";
import * as types from "./actionTypes";

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
