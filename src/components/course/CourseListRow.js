import React, {PropTypes} from "react";
import {Link} from 'react-router';

const CourseListRow = ({course, onDelete}) => {
  const callDelete = () => {
    // Consider using a BootStrap modal here instead of a confirm
    // http://getbootstrap.com/javascript/#modals
    if (confirm('Are you sure you want to delete the "' + course.title + '" course?')) {
      onDelete(course);
    }
  };
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
      <td><a href="#" onClick={callDelete}><i className="fa fa-trash-o" aria-hidden="true"/></a></td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CourseListRow;
