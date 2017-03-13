# psadmin-redux

* Consider adding a library like "Reselect" to memoize function calls if we are implementing expensive mapStateToProp functions
* Look into redux-promise when it becomes more stable and look at redux-saga as well as an alternative to redux-thunk
* Testing actions may not be worth while since logic is very simple yielding low value tests.
* Consider looking into "Redux Test Recorder" to automate testing redux reducers
* Redux store tests are integration tests that test actions, selectors, and reducers 
* Prod footprint can be made smaller by: 
  * Dropping babel-polyfill and pulling in only the polyfills we use such as Object.assign()
  * Dropping toastr, jQuery, and bootstrap and pulling them in from a CDN instead

## Challenge
1. ~~Author administration (hint: don't delete author who currently has a course)~~
2. ~~Delete course~~
3. ~~Hide empty course list~~
4. ~~Unsaved changes message (prevent navigation away from unsaved form)~~
5. ~~Client side validation (category and length data)~~
6. ~~Handle 404's (hint: try adding logic to mapStateToProps)~~
7. Show # of courses in the header
8. Pagination
9. Sort Course table by title by default (Hint: mapStateToProps again)
10. Revert abandoned changes (when user navigates away from form with out saving)
 
 If you get stuck... look at Building Applications with React and Flux course on Pluralsight
