import React from "react";
import Link from "next/link";

function FeatureCard({ icon, title, description, link }) {
  return (
    <div className="flex items-start space-x-4 ">
      <div className="bg-primary-light  h-14 w-14 xl:h-16 xl:w-16  md:w-auto  p-4 rounded-full mt-3 sm:mt-0">
        {icon}
      </div>
      {/* right section  */}
      <div className="">
        <h2 className="text-gray-700  font-bold sm:text-lg lg:text-base xl:text-xl ">
          {title}
        </h2>
        <p className="md:mt-4 lg:mt-8 md:h-20 lg:h-24 xl:h-20 text-gray-800 text-justify text-sm">
          {description}
        </p>
        <Link href={link} passHref>
          <div
            className="  hover:shadow-sm
                  hover:shadow-gray-300  hover:opacity-75 
                  shadow-xl transition-all duration-300 ease-in-out mt-6 w-fit lg:w-32 h-fit btn-primary rounded-md"
          >
            View More
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FeatureCard;
