import React from "react";
import DownloadCourseCard from "../../courseCard/DownloadCourseCard";
import bgImage from "../../resources/images/japan.jpg";

function All() {
  const datas = [
    {
      course_thumbnail: bgImage,
      category_name: "adventure sports",
      course_name: " fear of Driving and automatic negative thoughts",
      no_lessons: "12",
      no_time: "3 hr 30 min",
    },
  ];
  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8">
        {datas.map((item, i) => {
          //   let uploads = `${process.env.NEXT_PUBLIC_FILE}/images`;
          return (
            <DownloadCourseCard
              key={i}
              id={item.id}
              course_thumbnail={item.course_thumbnail}
              category={item.category_name}
              course_title={item.course_name}
              no_lessons={item.no_lessons}
              no_time={item.no_time}
            />
          );
        })}
      </section>
    </div>
  );
}

export default All;
