import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { MdOutlineSchool } from "react-icons/md";
import Rating from "react-rating";

function DownloadCourseCard({
  id,
  category,
  tag,
  course_title,
  rating,
  course_thumbnail,
  ratingNo,
  price,
  discount,
  instructor_img,
  instructor_name,
  no_time,
  setSpinner,
}) {
  return (
    <div className="hover:scale-105 transition-all ease-in-out duration-300 delay-100  shadow-xl relative cursor-pointer">
      <div
        onClick={() => (setSpinner ? setSpinner(true) : null)}
        className="h-56 sm:h-44 md:h-56 lg:h-44 2xl:h-52 w-full  border overflow-hidden relative "
      >
        <Link href={`course_preview/${id}`} passHref>
          <a href="">
            <Image
              alt=""
              placeholder="blur"
              blurDataURL={course_thumbnail}
              src={course_thumbnail}
              objectPosition="center"
              layout="fill"
              objectFit="cover"
              quality={75}
              priority={true}
              sizes={"40vw"}
              className="hover:transition-all  hover:ease-in hover:delay-75"
            />
          </a>
        </Link>
      </div>
      {tag && (
        <div className="bg-red-400 absolute z-10 top-2 right-0 px-4 font-medium rounded-bl-full shadow-md">
          {tag}
        </div>
      )}
      {/* this validation will be done from backend but for testing purpose i've dont following code  */}
      {tag === "Top Rated" && (
        <div className="bg-purple-600 absolute z-10 top-2 right-0 px-4 font-medium rounded-bl-full shadow-md text-white">
          {tag}
        </div>
      )}
      {/* card content section  */}
      <div className="p-4 ">
        <div className="bg-primary px-2 py-1 rounded font-medium text-white inline-block">
          <p className="text-xs">{category}</p>
        </div>
        <Link href={`course_preview/${encodeURIComponent(id)}`} passHref>
          <p
            onClick={() => (setSpinner ? setSpinner(true) : null)}
            className="mt-4 capitalize h-10 leading-5 tracking-tight font-bold text-lg text-gray-800 line-clamp-2"
            title={course_title}
          >
            {course_title}
          </p>
        </Link>

        <hr className="my-3" />
        <div className="flex items-center justify-between">
          {/* instructor section  */}
          <div className="bottom-0 flex items-center space-x-2">
            <div
              className={`h-8  w-8 bg-gray-300 rounded-full overflow-hidden
            ${instructor_img ? "block" : "flex  items-center justify-center"}
            
            `}
            ></div>
            <p className="font-medium text-sm">{instructor_name}</p>
          </div>
          {/* vidoes no section  */}
          <div className="flex items-center space-x-2">
            <MdOutlineSchool className="text-secondary  text-lg" />
            <p className="text-sm font-medium ">{no_time} Videos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadCourseCard;
