import React, {PropTypes} from "react";

const TextInput = ({name, label, value, onChange, error}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += ' has-error';
  }
  const helpBlock = 'helpBlock-' + name;
  return (
    <div className={wrapperClass}>
      <label htmlFor={name} className="control-label">{label}</label>
      <input type="text"
             name={name}
             className="form-control"
        //placeholder={this.props.placeholder}
             value={value}
             onChange={onChange}
             aria-describedby={helpBlock}/>
      <span id={helpBlock} className="help-block">{error}</span>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default TextInput;
