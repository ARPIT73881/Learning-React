import { useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useTheme } from "../hooks/useTheme";
// import { useWindowSize } from "../hooks/useWindowSize.js";

export default function Home() {
  const [query, setQuery] = useState("");
  const [isDark] = useTheme();

  // const windowSize = useWindowSize();

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      {/* <h3
        style={{ textAlign: "center" }}
      >{`${windowSize.width} x ${windowSize.height} `}</h3> */}
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      <CountriesList query={query} />
    </main>
  );
}
