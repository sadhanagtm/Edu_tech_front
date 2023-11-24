import React from "react";
import CourseFilter from "./subcomponents/CourseFilter";

function CategoryFilter({ category, clickSearch, checkActive }) {
  const categoryed = [{ filter_title: "All", id: "" }];
  category?.map((val, i) => {
    let datas = {
      filter_title: val.category_name,
      id: val.id,
    };
    console.log(category);
    categoryed.push(datas);
  });
  console.log(checkActive);
  return (
    <div>
      <CourseFilter
        clickSearch={clickSearch}
        checkActive={checkActive}
        title="Category"
        data={categoryed}
      />
    </div>
  );
}

export default CategoryFilter;
