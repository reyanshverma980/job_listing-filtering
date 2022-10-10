import React from "react";
import { useContext } from "react";
import { FilterContext } from "../pages/_app";
import FilterTags from "./FilterTags";

const Filter = () => {
  const ctx = useContext(FilterContext);

  const clearFilterTags = () => {
    ctx.setFilteredTags([]);
  };

  return (
    <div className=" w-11/12 lg:w-9/12 flex justify-between items-center absolute bg-white rounded-lg shadow-xl px-8 py-5 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
      <div className="flex flex-wrap flex-grow gap-4 items-center ">
        {ctx.filteredTags.map((tag) => {
          return <FilterTags key={tag} tag={tag} />;
        })}
      </div>
      <button
        onClick={clearFilterTags}
        className="text-darkGrayishCyan border-b border-b-white hover:text-desaturatedDarkCyan  hover:border-b-desaturatedDarkCyan"
      >
        Clear
      </button>
    </div>
  );
};

export default Filter;
