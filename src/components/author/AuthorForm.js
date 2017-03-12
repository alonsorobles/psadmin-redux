import React, {PropTypes} from "react";
import TextInput from "../common/TextInput";

const AuthorForm = ({author, onChange, errors}) => {
    return (
        <form>
          <TextInput name="firstName" label="First Name" onChange={onChange} value={author.firstName} error={errors.firstName}/>
        </form>
    );
};

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default AuthorForm;
