import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useEffect, useState } from "react";

import EnroledCourseCard from "../../../../components/courseCard/enrolledCourseCard";
import axios from "../../../../HOC/Axios/Axios";
import { useRouter } from "next/router";
function Ongoing({ total_contents, Acitvated, completed_contents }) {
  const [MyCourses, setMyCourses] = useState([]);

  const [Status, setStatus] = useState(false);
  const router = useRouter();

  const getCourses = () => {
    axios
      .get(`/enrolled/coursesByStudents/${Acitvated}`)
      .then((res) => {
        if (res.status === 200) {
          setMyCourses(res.data.data.reverse());
          // router.push('/myCourses')
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div>
      <div className="bg-grayOne ">
        <div>
          <div className="flex flex-col md:flex-row justify-between ">
            <div
              className=" w-full md:w-9/12 
            lg:w-6/12 xl:w-5/12 grid grid-cols-4 gap-2 
            place-content-center "
            ></div>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 py-8 
          md:grid-cols-2
          
          lg:grid-cols-3  xl:grid-cols-4 xl:gap-6 gap-8"
          >
            {MyCourses.map((val, i) => {
              let image = `${process.env.NEXT_PUBLIC_FILE}/course/${val.course?.thumbnail_img}`;
              console.log(val);
              return (
                <EnroledCourseCard
                  key={i}
                  id={val.course.id}
                  category={val.course.category.category_name}
                  course_title={val.course.course_name}
                  date={new Date(val.createdAt).toLocaleString("default", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                  course_thumbnail={val.course?.thumbnail_img}
                  completed_contents={completed_contents}
                  total_contents={total_contents}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ongoing;
