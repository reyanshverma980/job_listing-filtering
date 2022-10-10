import React, { useContext } from "react";
import { FilterContext } from "../pages/_app";

const FilterTags = (props) => {
  const ctx = useContext(FilterContext);
  const removeTag = () => {
    ctx.setFilteredTags((prevState) => {
      const newState = prevState.filter((value) => value !== props.tag);
      return [...newState];
    });
  };

  return (
    <div className="flex items-stretch rounded-md overflow-hidden">
      <div className="bg-lightGrayishCyan_filter py-2 px-3 text-desaturatedDarkCyan font-bold">
        {props.tag}
      </div>
      <button
        onClick={removeTag}
        className="py-2 px-3 bg-desaturatedDarkCyan hover:bg-veryDarkGrayishCyan transition-all"
      >
        <img src="/images/icon-remove.svg" alt="" />
      </button>
    </div>
  );
};

export default FilterTags;
