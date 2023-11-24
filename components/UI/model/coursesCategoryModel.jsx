import React from "react";

function CoursesCategoryModel(props) {
  return (
    <div
      className="absolute  left-0 z-50 top-20  h-150 
      overflow-hidden  rounded-md  shadow-md shadow-gray-800  w-full  bg-white "
    >
      {props.children}
    </div>
  );
}

export default CoursesCategoryModel;
