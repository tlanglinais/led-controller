import React from "react";
import "./Select.scss";

// empty first string leaves the first option black
const Select = ({
  name,
  label,
  onChange,
  selectName,
  defaultValue,
  options,
  value,
}) => (
  <div className="select">
    <select
      name={selectName}
      data-name={name}
      // data-value here for CSS
      data-value={value}
      value={value}
      onChange={onChange}
      className="select__select"
    >
      {defaultValue && (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <option key="All" value="All" className="select__option" />
      )}

      {options.map(option => (
        <option key={option} value={option} className="select__option">
          {option}
        </option>
      ))}
    </select>

    {label && (
      <label htmlFor={name} className="select__label">
        {label}
      </label>
    )}
  </div>
);

export default Select;