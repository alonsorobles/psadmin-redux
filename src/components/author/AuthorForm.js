import React, {PropTypes} from "react";
import TextInput from "../common/TextInput";
import SaveButton from "../common/SaveButton";

const AuthorForm = ({author, onChange, onSave, saving, errors}) => {
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
      <SaveButton saving={saving} onSave={onSave}/>
    </form>
  );
};

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  errors: PropTypes.object
};

export default AuthorForm;
