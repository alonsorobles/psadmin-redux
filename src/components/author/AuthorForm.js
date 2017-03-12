import React, {PropTypes} from "react";
import TextInput from "../common/TextInput";

const AuthorForm = ({author, onChange, errors}) => {
  return (
    <form>
      <TextInput name="firstName"
                 label="First Name"
                 onChange={onChange}
                 value={author.firstName}
                 error={errors.firstName}/>
      <TextInput name="lastName"
                 label="Last Name"
                 onChange={onChange}
                 value={author.lastName}
                 error={errors.lastName}/>
    </form>
  );
};

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default AuthorForm;
