import React from "react";
import CourseFilter from "./subcomponents/CourseFilter";

function EnrollmentFilter() {
  const Enrollment = [
    {
      filter_title: "Low Enrollment",
    },
    {
      filter_title: "Average Enrollment",
    },
    {
      filter_title: "High Enrollment",
    },
  ];
  return (
    <div>
      <CourseFilter title="Enrollment" data={Enrollment} />
    </div>
  );
}

export default EnrollmentFilter;
