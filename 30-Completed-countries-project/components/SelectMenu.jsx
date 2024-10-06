import React from "react";

export default function SelectMenu({ setQuery }) {
  // function setQuery(e) {
  //   return e.target.value.toLowerCase();

  return (
    <select
      className="filter-by-region"
      onChange={(e) => setQuery(e.target.value.toLowerCase())}
    >
      <option hidden>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
