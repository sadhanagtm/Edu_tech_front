import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { MdOutlineSchool } from "react-icons/md";
import Rating from "react-rating";
import { useRouter } from "next/router";

function CourseCard({
  id,
  category,
  tag,
  course_title,
  rating,
  course_thumbnail,
  ratingNo,
  related,
  preview,
  price,
  RP,
  SP,
  discount,
  instructor_img,
  instructor_name,
  no_videos,
  setSpinner,
}) {
  const [showCourse, setShowCourse] = useState(false);
  const router = useRouter();
  console.log("router", router);

  return (
    <Link
      href={
        related
          ? {
              pathname: `/courseRelatedPreview`,
              query: { id: id },
            }
          : {
              pathname: `/course_preview/${id}`,
              // query: { id: "preview" },
            }
      }
      passHref
    >
      <div className="hover:scale-105  transition-all ease-in-out duration-300 delay-100  shadow-xl relative cursor-pointer">
        <div
          onClick={() => {
            setSpinner ? setSpinner(true) : null;
          }}
          className="h-56 sm:h-44 md:h-56 lg:h-44 2xl:h-52 w-full  border overflow-hidden relative "
        >
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
          <div className="bg-blue-400 capitalize  px-2 py-2 rounded font-openSansSix text-white inline-block">
            <p className="text-xs">{category}</p>
          </div>
          <p
            onClick={() => (setSpinner ? setSpinner(true) : null)}
            className="mt-4 capitalize h-10 leading-5 tracking-tight font-bold text-lg text-gray-800 line-clamp-2"
            title={course_title}
          >
            {course_title}
          </p>
          {/* rating section s */}
          <div className="flex items-center space-x-2 mt-1">
            <Rating
              emptySymbol={
                <AiOutlineStar className="text-lg text-yellow-400" />
              }
              fullSymbol={<AiFillStar className="text-lg text-yellow-400" />}
              fractions={2}
              readonly
              initialRating={parseInt(rating)}
              className="mt-1"
            />
            {ratingNo ? <p className="text-sm">( {ratingNo} )</p> : null}
          </div>
          {/* rating section e  */}

          {/* price section and sp & rp s */}
          <div
            className={`flex  items-center py-1.5  ${
              discount > 0 ? "justify-between " : "flex-row-reverse"
            }`}
          >
            {discount > 0 ? (
              <div className="flex items-center space-x-1">
                <div className="text-secondary font-bold text-verySmall 2xl:text-xs  ">
                  RP.{RP}
                </div>
                <div className="text-gray-600 font-bold text-sm ">/</div>
                <div className="text-primary font-bold  text-verySmall 2xl:text-xs ">
                  SP.{SP}
                  {/* {console.log(RP)} */}
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="flex items- gap-2   ">
              {discount && (
                <p
                  className="text-orange-600 font-bold 
           text-base   2xl:text-lg  line-through"
                >
                  {price <= 0 ? " " : `Rs ${parseInt(price)}`}
                </p>
              )}
              <p className="text-primary font-bold text-lg 2xl:text-xl ">
               
                {discount > 0
                  ? `Rs. ${parseInt(price) - parseInt(discount)}`
                  : discount <= 0
                  ? "Free"
                  : price}
              </p>
            </div>
          </div>
          {/* price section e  */}

          <hr className="my-3 " />
          <div className="flex items-center   justify-between">
            {/* instructor section  */}
            <div className="bottom-0  flex items-center space-x-2">
              <div
                className={`h-8  w-8 bg-gray-300 rounded-full overflow-hidden
            ${instructor_img ? "block" : "flex  items-center justify-center"}
            
            `}
              >
                {instructor_img ? (
                  <Image
                    src={instructor_img}
                    height={50}
                    alt=""
                    width={50}
                    className="w-full object-cover shadow-xl"
                  />
                ) : (
                  <div className="capitalize ">{instructor_name[0]}</div>
                )}
              </div>
              <p className="font-medium text-sm">{instructor_name}</p>
            </div>
            {/* vidoes no section  */}
            <div className="flex items-center space-x-2">
              <MdOutlineSchool className="text-secondary  text-lg" />
              <p className="text-sm font-medium ">{no_videos} Videos</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
