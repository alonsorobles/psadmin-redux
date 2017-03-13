import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/course/CoursesPage";
// eslint-disable-next-line import/no-named-as-default
import ManageCoursePage from "./components/course/ManageCoursePage";
import AuthorsPage from "./components/author/AuthorsPage";
import ManageAuthorPage from "./components/author/ManageAuthorPage";
import NotFoundPage from "./components/404";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="course" component={ManageCoursePage}/>
    <Route path="course/:id" component={ManageCoursePage}/>
    <Route path="authors" component={AuthorsPage}/>
    <Route path="author" component={ManageAuthorPage} />
    <Route path="author/:id" component={ManageAuthorPage} />
    <Route path="about" component={AboutPage}/>
    <Route path="404" component={NotFoundPage}/>
  </Route>
);
