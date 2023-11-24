import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";

function Pagination({
  metaTag,
  changePageClick,
  buttonPagination,
  sideButton,
}) {
  let data = [];
  for (let i = 1; i <= metaTag?.pageCount; i++) {
    data.push({ i: i });
    console.log(metaTag, i);
  }

  return (
    <div className="my-24">
      <div className="flex items-center space-x-3 text-gray-500">
        <div
          className="h-14 w-14 py-3 bg-gray-200 cursor-pointer"
          onClick={() => sideButton("previous")}
        >
          <BiChevronLeft className="text-3xl mx-auto" />
        </div>
        {data?.map((val, i) => {
          return (
            <div
              key={i}
              onClick={() => buttonPagination(val.i)}
              className={`h-14 w-14 py-3 ${
                +changePageClick === val.i
                  ? "bg-primary text-white "
                  : "bg-gray-200"
              } mx-auto text-center cursor-pointer`}
            >
              <p className="text-xl font-bold">{val.i}</p>
            </div>
          );
        })}

        <div
          className="h-14 w-14 py-3 text-center bg-gray-200 cursor-pointer"
          onClick={() => sideButton("next")}
        >
          <BiChevronLeft className="rotate-180 text-3xl mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Pagination;
