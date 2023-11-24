import Image from "next/image";
import React from "react";
import { TiTick } from "react-icons/ti";

function PackagesCard({
  i,
  id,
  package_img,
  packageFeature,
  package_name,
  package_price,
  SP,
  RP,
  setShowPackage,
  ShowPackage,
  // color,
  // feature1,
  // feature2,
  // feature3,
  // feature4,
  // feat2,
  buyPackage,
}) {
  return (
    <div
      className={`${
        i === 1
          ? " scale:105  2xl:scale-110 hover:scale-110 md:mt-5 lg:mt-0 mt-0  xl:hover:scale-125 row-start-2"
          : " scale-90 2xl:scale-95  hover:scale-110"
      } bg-gray-800  shadow-xl relative shadow-gray-500 h-full w-full mx-auto 
      rounded-sm overflow-hidden z-50 transition-all  duration-300 delay-70 ease-in-out  pt-20 pb-6
       cursor-pointer`}
      onClick={() => buyPackage(id)}
    >
      <div
        className={` capitalize bg-gradient-to-r  absolute top-0  from-blue-500
        to-red-500 h-10 lg:h-10   font-openSansSix  z-50
        text-white  -rotate-45 -ml-20 ssm:-ml-40 sm:-ml-48 md:-ml-28 w-10/12 lg:-ml-28 xl:-ml-16   2xl:-ml-24    sm:w-full text-xs sm:text-sm lg:text-base  flex items-center justify-around
      `}
      >
        <div className=" -ml-8 sm:-ml-12 md:-ml-6 lg:-ml-20 xl:-ml-12 2xl:-ml-14 leading-5">
          <div className="">packages</div>
        </div>
      </div>
      <div className="text-center -my-3 px-10 pb-3 2xl:pb-5">
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-14 h-14 ">
            <Image
              src={package_img}
              alt={package_img}
              placeholder="blur"
              blurDataURL={package_img}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>
        <div className="font-openSansSeven capitalize  text-gray-200  text-lg 2xl:text-xl tracking-wide mt-8 mb-4">
          {package_name}
        </div>
        <div className=" pt-5">
          <div className="flex gap-2  items-end my-2 justify-between flex-row-reverse ">
            <div>
              <p className="font-bold text-base text-primary ">NRs</p>
              <div className="leading-5">
                <div
                  className="font-bold  text-white"
                  // text-transparent  bg-clip-text bg-gradient-to-r from-red-500  to-cyan-500 text-lg tracking-wider "

                  // style={{ color: `${color}` }}
                >
                  {/* <div className="text-sm text-gray-700">per month</div> */}
                  {package_price}
                </div>
              </div>
            </div>
            <div className="flex  flex-col  items-start">
              <div>
                {" "}
                <span className="text-primary text-base mx-1 font-openSansSix ">
                  SP:
                </span>
                <span className="text-white text-sm  font-openSansFive">
                  {SP}
                </span>
              </div>{" "}
              <div>
                {" "}
                <span className="text-primary text-base mx-1 font-openSansSix ">
                  RP:
                </span>
                <span className=" text-white text-sm font-openSansFive">
                  {RP}
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* <p className="text-gray-500 mt-4">Plan includes</p> */}
      </div>
      <div className="w-11/12 pb-4 mx-auto text-gray-300">
        <div className={` `}>
          <div>
            {packageFeature.map((val, i) => {
              return (
                <div
                  key={i}
                  className="w-full flex font-openSansSix gap-2 my-3 px-3 text-xs"
                >
                  {/* <div>{val.id}</div> */}
                  <div>
                    {" "}
                    <div className="w-2 h-2 bg-primary rounded-full my-1 "></div>
                  </div>{" "}
                  <div>{val.feature}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className=" flex justify-center bg-gradient-to-r  from-red-400 
        to-cyan-400  w-11/12  mx-auto py-2 rounded-md"
      >
        <div
          onClick={() => buyPackage(id)}
          className="  cursor-pointer text-white uppercase font-openSansFive text-sm  "
        >
          buy packages
        </div>
      </div>
    </div>
  );
}

export default PackagesCard;
