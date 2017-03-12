import React, {PropTypes} from "react";

const SelectInput = ({name, label, value, defaultOption, options, onChange, error}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += ' has-error';
  }
  const helpBlock = 'helpBlock-' + name;
  return (
    <div className={wrapperClass}>
      <label htmlFor={name} className="control-label">{label}</label>
      <select name={name}
              value={value}
              onChange={onChange}
              className="form-control">
        <option value="">{defaultOption}</option>
        {options.map((option) => {
          return <option key={option.value} value={option.value}>{option.text}</option>;
        })}
      </select>
      <span id={helpBlock} className="help-block">{error}</span>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default SelectInput;
