import { useContext } from "react";
import { FilterContext } from "../pages/_app";

function Tag(props) {
  const ctx = useContext(FilterContext);

  const addFilterTag = () => {
    if (!ctx.filteredTags.includes(props.tag)) {
      ctx.setFilteredTags((prevState) => {
        return [...prevState, props.tag];
      });
    }
  };

  return (
    <button
      onClick={addFilterTag}
      className="py-1 px-3 rounded-md bg-lightGrayishCyan_bg text-desaturatedDarkCyan font-bold hover:bg-desaturatedDarkCyan hover:text-white transition-all"
    >
      {props.tag}
    </button>
  );
}

export default Tag;
