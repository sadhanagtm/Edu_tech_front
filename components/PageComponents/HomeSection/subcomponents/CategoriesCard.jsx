import Image from "next/image";
import React from "react";
import Link from "next/link";

function CategoriesCard({ icon, category, courses, id }) {
  return (
    <Link
      href={{
        pathname: "/courses",
        query: {
          category: id,
        },
      }}
      passHref
    >
      <div
        className="border rounded-md hover:scale-105 transiton-all bg-white 
     drop-shadow-md hover:shadow-md cursor-pointer ease-in-out
     duration-700 delay-100 p-4 flex space-x-4"
      >
        <div
          className="bg-primary-light p-2 w-16 h-16
       text-center rounded-md"
        >
          <span className="">
            <div>
              {icon ? (
                <div
                  className="relative  h-12 w-12
                  "
                >
                  <Image
                    alt=""
                    src={icon}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-sm"
                  />
                </div>
              ) : null}
            </div>
          </span>
        </div>
        {/* right section  */}
        <div className="">
          <p className="text-gray-700 font-bold capitalize ">{category}</p>
          <p className="mt-1 sm:text-xs font-medium text-gray-500">
            {courses} Courses
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CategoriesCard;
