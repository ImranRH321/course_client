import { current } from "daisyui/src/colors";
import React from "react";

const Filtering = ({ setSearch, setValue }) => {
  return (
    <div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="search...."
        className="input input-bordered w-full max-w-xs text-black hover:border-danger-400"
      />

      <h1 className="font-bold my-2 mx-2">Company</h1>
      <select
        onChange={(e) => setValue(e.target.value)}
        className="select select-bordered w-full "
      >
        <option>All</option>
        <option>Marcos</option>
        <option>Liddy</option>
        <option>Ikea</option>
        <option>Caressa</option>
      </select>
      <h1 class="font-bold my-2">Colors</h1>
      <button></button>
    </div>
  );
};

export default Filtering;

/* 

*/
