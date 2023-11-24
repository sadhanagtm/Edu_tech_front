import Router from "next/router";
import React from "react";
import { useRouter } from "next/router";
function RecentCourses({ InstructorCourse}) {
  const router = useRouter();
  const RecentCourseRedirectThroughTheirIndex = (id) => {
    router.push(`/course_preview/${id}`);
  };
  return (
    <div className="mx-5 my-1">
      <div className="text-3xl capitalize tracking-tighter mb-7 font-openSansSix ">
        recent courses
      </div>
      {console.log(InstructorCourse)}
      {InstructorCourse.length > 0 ? (
        <div
          className="    "
        >
          {InstructorCourse?.map((val, i) => {
            return (
              <div
                key={i}
                className="flex flex-col
             bg-gray-100 hover:bg-gray-200 border w-11/12 cursor-pointer
             lg:w-full my-5
             lg:p-4 p-3  rounded-md  hover:shadow-sm hover:shadow-gray-300
              hover:scale-105 transition-all duration-300  "
          onClick={() => RecentCourseRedirectThroughTheirIndex(val.id)}

              >
                <div className="flex font-openSansSeven text-sm  capitalize">
                  <div className="line-clamp-1">{val.course_name}</div>
                </div>
                <div className="font-openSansFour text-sm pt-3">
                  <div
                    key={i}
                    className="line-clamp-2 pr-1"
                    dangerouslySetInnerHTML={{ __html: val.course_description }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="h-10 m-2 flex justify-center items-center text-xl text-gray-400">
          No Courses has been added yet
        </div>
      )}
    </div>
  );
}

export default RecentCourses;
