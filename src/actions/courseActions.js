import * as types from './actionTypes';

//noinspection JSUnusedGlobalSymbols
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course};
}
