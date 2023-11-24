import React from "react";
import CourseFilter from "./subcomponents/CourseFilter";

function RatingFilter() {
  const Rating = [
    {
      filter_title: "0-2 Stars",
    },
    {
      filter_title: "2-3 Stars",
    },
    {
      filter_title: "3-4 Stars",
    },
    {
      filter_title: "4-5 Stars",
    },
  ];
  return (
    <div>
      <CourseFilter title="Course Ratings" data={Rating} />
    </div>
  );
}

export default RatingFilter;
