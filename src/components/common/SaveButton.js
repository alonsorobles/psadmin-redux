import React, {PropTypes} from "react";

const SaveButton = ({saving, onSave}) => {
  return (
    <input type="submit"
           disabled={saving}
           className="btn btn-primary"
           onClick={onSave}/>
  );
};

SaveButton.propTypes = {
  saving: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired
};

export default SaveButton;
