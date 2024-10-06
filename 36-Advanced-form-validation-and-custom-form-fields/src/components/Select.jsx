import React from "react";

export default function Select({
  label,
  id,
  name,
  value,
  onChange,
  options,
  defaultOption,
  error,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultOption && (
          <option value="" hidden>
            {defaultOption}
          </option>
        )}

        {options.map((el, i) => {
          return (
            <option key={i} value={el}>
              {el}
            </option>
          );
        })}
        {/* <option value="Grocery">Grocery</option>
        <option value="Clothes">Clothes</option>
        <option value="Bills">Bills</option>
        <option value="Education">Education</option>
        <option value="Medicine">Medicine</option> */}
      </select>
      <p className="error">{error}</p>
    </div>
  );
}
