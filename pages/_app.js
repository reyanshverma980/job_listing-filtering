import { useState } from "react";
import "../styles/globals.css";
import React from "react";

export const FilterContext = React.createContext();

function MyApp({ Component, pageProps }) {
  const [filteredTags, setFilteredTags] = useState([]);
  return (
    <FilterContext.Provider value={{ filteredTags, setFilteredTags }}>
      <Component {...pageProps} />
    </FilterContext.Provider>
  );
}

export default MyApp;
