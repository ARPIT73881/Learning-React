import React from "react";

import "./CountriesListShimmer.css";

export default function CountriesListShimmer() {
  // new Array(12).fill('')

  return (
    <div className="countries-container">
      {Array.from({ length: 12 }).map((el, i) => {
        return <div key={i} className="country-card shimmer-card"></div>;
      })}
    </div>
  );
}
