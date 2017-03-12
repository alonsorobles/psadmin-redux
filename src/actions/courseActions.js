import * as types from "./actionTypes";
import CourseApi from "../api/mockCourseApi";
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions";

//noinspection JSUnusedGlobalSymbols
export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return CourseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error); // probably want to create a loadCoursesFailure action to handle error.
    });
  };
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

//noinspection JSUnusedGlobalSymbols
export function saveCourse(course) {
  return function (dispatch) { // can use a second optional parameter "getState" to access store state if needed here
    dispatch(beginAjaxCall());
    return CourseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
