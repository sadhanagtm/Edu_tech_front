import { BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Instructors({ img, courses, name, id, lastname }) {
  return (
    <div className="bg-gray-50 rounded-tl-md rounded-tr-md overflow-hidden shadow-md">
      <div className="relative w-full h-64 bg-white overflow-hidden">
        {img ? (
          <Image
            src={img}
            alt="image"
            placeholder="blur"
            blurDataURL={img}
            height={100}
            width={100}
            layout="fill"
            objectFit="cover"
            objectPosition="top center"
            quality={100}
          />
        ) : (
          <div className="h-full w-full bg-gray-300 flex justify-center items-center text-2xl uppercase OpenSans font-medium">
            {name[0]}
            {lastname[0]}
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-xl capitalize font-bold text-gray-800">{name}</p>
        <p className="text-md text-gray-400 my-1">{courses} + courses</p>
        <Link href={`/Instructor/${id}`} passHref>
          <p className="flex items-center text-blue-500 cursor-pointer bg-blue-100 w-fit px-3 py-1.5 mt-3 rounded-sm text-sm font-semibold">
            Visit Profile <BsArrowRightShort className="text-xl" />
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Instructors;
