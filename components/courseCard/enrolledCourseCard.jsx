import { BsFillCalendarFill, BsThreeDots } from "react-icons/bs";
import { Circle, Line } from "rc-progress";

import { AiOutlineCalendar } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Rating from "react-rating";
import React, { useState, useEffect } from "react";
import axios from "../../HOC/Axios/Axios";

function EnroledCourseCard({
  id,
  category,
  course_title,
  course_thumbnail,
  date,
  completed_contents,
  total_contents,
  status,
}) {
  const [Progress, setProgress] = useState("");
  const getProgress = () => {
    axios
      .get(`/course-progress/byStudents/${id} `)
      .then((res) => {
        setProgress(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProgress();
  }, [id]);
  const [percent, setPercent] = useState();

  useEffect(() => {
    console.log(Progress.completed_contents);
    const per = (Progress?.completed_contents / Progress?.total_contents) * 100;
    setPercent(per.toFixed(2));
    console.log(per);
  }, [Progress]);
  return (
    <Link
      href={{
        pathname: "/learn",
        query: {
          watch_v: id,
        },
      }}
      passHref
    >
      <div className="bg-white cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out delay-100  shadow-xl relative">
        <div className="relative">
          <div className="absolute z-50 text-4xl text-white top-2 right-4">
            <BsThreeDots />
          </div>
          <div className=" h-56 sm:h-44 md:h-56 lg:h-44 2xl:h-52 w-full  border overflow-hidden relative">
            {/* <Link href={`course_preview/${id}`}> */}
            <Image
              alt=""
              placeholder="blur"
              blurDataURL={course_thumbnail}
              height={"100%"}
              width={"100%"}
              src={course_thumbnail}
              objectPosition="center"
              layout="fill"
              objectFit="cover"
              quality={75}
            />
            {/* </Link> */}
          </div>
        </div>

        {/* card content section  */}
        <div className="p-4 px-8">
          <div className="py-2 rounded px-3  bg-blue-400  text-white font-medium capitalize inline-block">
            <p className="text-sm xl:text-sm line-clamp-1 font-openSansSix ">
              {category}
            </p>
          </div>
          <p
            className="mt-3 capitalize font-openSansSeven 
          tracking-tight font-bold text-xl
          text-gray-800 line-clamp-2"
            title={course_title}
          >
            {course_title}
          </p>

          <div className="py-4">
            <div className="text-gray  py-1 pl-1 text-xs font-openSansFour">
              {percent} % Progress
            </div>
            <Line percent={percent} strokeWidth="1.5" strokeColor="#02A8D9" />
          </div>
          <div className="flex items-center justify-between text-sm font-openSansFour text-gray">
            <div className="flex items-center ">
              <div className="pr-2">
                <AiOutlineCalendar />
              </div>{" "}
              {date}
              {status}
            </div>
            {/* <div className="cursor-pointer">info...</div> */}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default EnroledCourseCard;
