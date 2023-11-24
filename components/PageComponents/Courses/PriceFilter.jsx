import React from "react";
import CourseFilter from "./subcomponents/CourseFilter";

function PriceFilter({ clickSearch, checkActive }) {
  const price = [
    {
      id: "",
      filter_title: "All",
    },
    {
      id: "1-100",
      filter_title: "Rs. 0-100",
    },
    {
      id: "100-500",
      filter_title: "Rs. 100-500",
    },
    {
      id: "500-1500",
      filter_title: "Rs. 500-1500",
    },
    {
      id: "1500-3000",
      filter_title: "Rs. 1500-3000",
    },
    {
      id: "3000-above",
      filter_title: "Rs. 3000-above",
    },
  ];
  console.log(checkActive);
  return (
    <div>
      <CourseFilter
        title="Price Range"
        data={price}
        clickSearch={clickSearch}
        checkActive={checkActive}
      />
    </div>
  );
}

export default PriceFilter;
