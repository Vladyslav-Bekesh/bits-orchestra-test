import React from "react";
import { TFilter } from "../../utils";

type FilterProps = {
  setFilter: React.Dispatch<React.SetStateAction<TFilter>>;
  filter: TFilter;
};

const Filter: React.FC<FilterProps> = ({ setFilter, filter }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as TFilter);
  };

  return (
    <select
      name="filter-selector"
      id="filter-selector"
      value={filter}
      onChange={handleChange}
    >
      <option value="All">Show All</option>
      <option value="Active">Show Active</option>
      <option value="Deactivated">Show Deactivated</option>
    </select>
  );
};

export default Filter;
