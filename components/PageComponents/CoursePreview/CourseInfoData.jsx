import { FaBook, FaFacebook, FaShareAlt, FaVideo } from "react-icons/fa";
import React, { useEffect, useState } from "react";

import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { FacebookShareButton } from "react-share";
import { FiClock } from "react-icons/fi";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import Link from "next/link";
import cookie from "js-cookie";
import { useRouter } from "next/router";

function CourseInfoData({
  id,
  price,
  last_updated,
  duration,
  duration_type,
  chapters,
  meEnrolled,
  videos,
  CheckAuth,
  enrolled,
  discount,
  setSpinner,
}) {
  const [quuote, setQuuote] = useState("");
  const [Status, setStatus] = useState(false);
  const [toasti, setToasti] = useState(false);
  const router = useRouter();
  // console.log(discount);

  useEffect(() => {
    if (process.browser) {
      if (cookie.get("token")) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    }
  }, [cookie]);

  return (
    <div className="card-one bg-white  w-full lg:p-8 rounded-md ">
      <div className="">
        <div
          className="text-primary  
       text-xl my-4 
      font-openSansSeven flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            {discount && (
              <p
                className="text-secondary font-bold text-sm
            lg:text-xl my-3 line-through"
              >
                NRs. {price}
              </p>
            )}
            <p className="text-primary font-bold text-sm lg:text-xl my-3">
              NRs. {discount ? parseInt(price) - parseInt(discount) : price}
            </p>
          </div>
          <div className="flex items-center  ml-2 text-sm lg:text-xl justify-center  text-black ">
            4.0
            <BsFillStarFill className="h-5 w-5 ml-2 text-sm lg:text-2xl text-yellow-400" />
          </div>
        </div>
        <hr />
        <div
          className="grid grid-cols-2 gap-y-9 mt-8  text-gray-600 
      font-openSansSix text-sm"
        >
          <div className="place-items-start">
            <div className="flex items-center space-x-2">
              <GiAnticlockwiseRotation />
              <p>Last updated</p>
            </div>
          </div>
          <div className="flex justify-end ">
            {new Date(last_updated).toDateString()}
          </div>

          <div className="place-items-start">
            <div className="flex items-center space-x-2">
              <FiClock className="font-bold text-base" />
              <p>Duration</p>
            </div>
          </div>
          <div className="flex justify-end ">
            {duration} {duration_type}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <BsFillPeopleFill className="font-bold text-base" />
              <p>Enrolled</p>
            </div>
          </div>
          <div className="flex justify-end ">{enrolled}</div>
          <div>
            <div className="flex items-center space-x-2">
              <FaBook className="font-bold text-base" />
              <p>Chapters</p>
            </div>
          </div>
          <div className="flex justify-end ">{chapters}</div>
          <div>
            <div className="flex items-center space-x-2">
              <FaVideo className="font-bold text-base" />
              <p>Videos</p>
            </div>
          </div>
          <div className="flex justify-end ">{videos}+</div>
        </div>
      </div>
      <hr className="my-8" />
      {/* <BreakPointTest /> */}
      {meEnrolled !== true || Status !== true ? (
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row lg:space-y-0 items-center sm:space-x-4 my-2 ">
          <div
            onClick={() => {
              CheckAuth();
            }}
            className="btn-primary rounded-md h-14 transition hover:opacity-75 border w-full"
          >
            {price === "0.0000" ? "Enroll Now" : "Buy Now"}
          </div>

          <p className="flex items-center justify-center space-x-2 rounded-md w-full h-14 transition hover:opacity-75 hover:shadow-xl border border-gray-700 px-3 cursor-pointer">
            {/* <FaFacebook className="h-4 w-4 md:w-4 md:h-4 text-blue-600" />{" "} */}
            <FaShareAlt />
            <span className="text-sm">Share Course</span>
          </p>
        </div>
      ) : (
        <div className="flex md:flex-col md:space-y-4 lg:flex-row lg:space-y-0 items-center justify-between my-2  ">
          <Link
            href={{
              pathname: "/learn",
              query: {
                watch_v: id,
              },
            }}
            passHref
          >
            <div
              className="btn-primary rounded-md w-full 
              transition hover:opacity-75"
              onClick={() => setSpinner(true)}
            >
              Start Course
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CourseInfoData;
