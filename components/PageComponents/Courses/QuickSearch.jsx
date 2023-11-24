import React from "react";
import { FiSearch } from "react-icons/fi";

function QuickSearch() {
  return (
    <div className="border border-gray-200 rounded-md px-4 py-2 flex items-center space-x-3 text-gray-400 cursor-pointer mb-2">
      <FiSearch />
      <p>Quick search ...</p>
    </div>
  );
}

export default QuickSearch;
