import React, {PropTypes} from "react";
import {Link} from "react-router";

const CourseListRow = ({course, onDelete}) => {
  const callDelete = (event) => {
    // Consider using a BootStrap modal to confirm the deletion
    // http://getbootstrap.com/javascript/#modals
    event.preventDefault();
    onDelete(course);
  };
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
      <td>
        <a href="#delete" onClick={callDelete}>
          <i className="fa fa-trash-o" aria-hidden="true"/>
        </a>
      </td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CourseListRow;
