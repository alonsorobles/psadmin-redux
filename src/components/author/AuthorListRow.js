import React, {PropTypes} from "react";
import {Link} from "react-router";

const AuthorListRow = ({author, onDelete}) => {
  const callDelete = () => {
    onDelete(author);
  };
  return (
        <tr>
          <td><Link to={'/author/' + author.id}>{author.firstName} {author.lastName}</Link></td>
          <td><a onClick={callDelete}><i className="fa fa-trash-o" aria-hidden="true"/></a></td>
        </tr>
      );
};

AuthorListRow.propTypes = {
  author: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default AuthorListRow;
