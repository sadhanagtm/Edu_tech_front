import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdBusinessCenter } from "react-icons/md";
import { HiCheckCircle } from "react-icons/hi";
import ScrollTo from "react-scroll-into-view";

function BusinessCategory() {
  const [icon, setIcon] = useState(false);
  const [ids, setIds] = useState("");
  const data = [
    {
      id: 1,
      icon1: (
        <RiAccountCircleFill className=" w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16  " />
      ),
      title: "account",
      description:
        "Account section is all about yours learnings. It will hold all information about your earnings, your total works, used money, payable money , etc.",
    },
    {
      id: 2,
      icon1: (
        <MdBusinessCenter className=" w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16  " />
      ),
      title: " business",
      description:
        "This section will hold information about business. It will also hols the information about getting into business ,Growung business further and all future projects. Detailed information about business plans",
    },
    {
      id: 3,
      icon1: (
        <HiCheckCircle className=" w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 " />
      ),
      title: "ownership",
      description:
        " This section is about Sikkai support. there will be a technical team of Sikka-I which is always ready to help our members ans solve their problems shortly as possible. The support team will guide to solve any issues and guide through Sikka-I.",
    },
    {
      id: 4,
      icon1: (
        <IoCloudDownloadSharp className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 " />
      ),
      title: "downloads",
      description:
        "The download section is about all the flies and information required to grow business. It contains all pdf, ppt and other files that will help every individual to grow business",
    },
    // {
    //   id: 5,
    //   icon1: (
    //     <MdOutlineSupportAgent className=" w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16  " />
    //   ),
    //   title: " Online  courses",
    //   description:
    //     "Search Text To Service. Get The Best Result With ZapMeta About Text To Service. Find More Text To Service. ZapMeta Offers The Overview from 6 Engines. Wiki, News & More. The Complete Overview.",
    // },
  ];
  return (
    <div>
      <div id="a" className=" lg:pb-24 lg:pt-10 py-10 px-5  ">
        <div className="text-3xl sm:text-4xl mb-10 text-center font-openSansSeven text-gray-700 capitalize">
          About sikkai business
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  ">
          {data.map((val, i) => {
            return (
              <div
                key={i}
                className={` flex flex-col ${
                  i % 2 === 0 ? " items-start" : " lg:items-start items-end"
                }    justify-center`}
              >
                <div
                  className={`z-10  w-fit  mx-10 p-3
                  
                 ${
                   icon && val.id === ids && i % 2 === 0
                     ? "  sm:translate-x-52"
                     : " "
                 }
                 ${
                   icon && val.id === ids && i % 2 === 1
                     ? "  sm:-translate-x-52 "
                     : " "
                 }
                  ${
                    icon && val.id === ids
                      ? ` bg-gray-300  ${
                          val.id === 1
                            ? " text-primary "
                            : val.id === 2
                            ? " text-secondary"
                            : val.id === 3
                            ? " text-yellow-400"
                            : val.id === 4
                            ? "text-green-500 "
                            : val.id === 5
                            ? "text-orange-600 "
                            : null
                        }  transition-all delay-200 lg:translate-x-36 sm:translate-x-52 duration-500 rounded-full   ease-in-out`
                      : `transition-all rounded-full duration-500 delay-200 ease-in-out 
                      ${
                        val.id === 1
                          ? "bg-primary text-white "
                          : val.id === 2
                          ? "bg-secondary text-white"
                          : val.id === 3
                          ? "bg-yellow-400 text-white"
                          : val.id === 4
                          ? "bg-green-500 text-white"
                          : val.id === 5
                          ? "bg-orange-600 text-white"
                          : null
                      } 
                      `
                  }`}
                >
                  {val.icon1}
                </div>
                <div
                  className={`flex ${
                    icon && val.id === ids
                      ? "text-white cursor-pointer hover:scale-105 hover:bg-gray-300  bg-opacity-80"
                      : null
                  }   text-gray-600
                     transition-all delay-200 ease-in-out 
                    duration-1000 flex-col gap-3 items-center 
                   -mt-9  lg:-mt-10 rounded-md bg-white h4   shadow-lg shadow-gray-400 
                    py-10 px-5`}
                  onMouseEnter={() => {
                    setIcon(true), setIds(val.id);
                  }}
                  onMouseLeave={() => {
                    setIcon(false), setIds(val.id);
                  }}
                >
                  <div className="font-openSansSeven mt-1 text-lg capitalize">
                    {val.title}
                  </div>
                  <div className="font-openSansSix h-40 text-justify">
                    {val.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BusinessCategory;
