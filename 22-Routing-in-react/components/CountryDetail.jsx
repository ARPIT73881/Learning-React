import React, { useEffect, useState } from "react";

import "./CountryDetail.css";

export default function CountryDetails() {
  const countryName = new URLSearchParams(location.search).get("name");

  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data);
        setCountryData({
          flag: data.flags.svg,
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital.join(" , "),
          tld: data.tld,
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", "),
          languages: Object.values(data.languages).join(", "),
        });
      });
  }, []);

  return (
    // countryData && return content
    countryData === null ? (
      "Loading UI ..."
    ) : (
      <main>
        <div className="country-details-container">
          <span className="back-button">
            <i className="fa-solid fa-arrow-left" />
            &nbsp; Back
          </span>
          <div className="country-details">
            <img src={countryData.flag} alt={`${countryData.name} Flag`} />
            <div className="details-text-container">
              <h1>{countryData.name}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name: {countryData.nativeName} </b>
                  <span className="native-name" />
                </p>
                <p>
                  <b>
                    Population: {countryData.population.toLocaleString("en-IN")}{" "}
                  </b>
                  <span className="population" />
                </p>
                <p>
                  <b>Region: {countryData.region} </b>
                  <span className="region" />
                </p>
                <p>
                  <b>Sub Region: {countryData.subregion} </b>
                  <span className="sub-region" />
                </p>
                <p>
                  <b>Capital: {countryData.capital} </b>
                  <span className="capital" />
                </p>
                <p>
                  <b>Top Level Domain: {countryData.tld} </b>
                  <span className="top-level-domain" />
                </p>
                <p>
                  <b>Currencies: {countryData.currencies} </b>
                  <span className="currencies" />
                </p>
                <p>
                  <b>Languages: {countryData.languages} </b>
                  <span className="languages" />
                </p>
              </div>
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  );
}
