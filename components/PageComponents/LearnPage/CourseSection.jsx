import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdBarChart,
} from "react-icons/md";
import CourseContent from "./CourseContent";
import React, { useRef, useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

import { BiChevronDownCircle } from "react-icons/bi";
function Collapsable({
  method_second,
  identity,
  getsub,
  unique,
  method,
  setVideos,
  data,
  body,
  clicked,
  setClicked,
}) {
  const [show, setShow] = useState(false);
  const [ID, setID] = useState(0);
  const [Content, setContent] = useState("");

  const ParentRef = useRef();
  if (ParentRef.current) {
    console.log(ParentRef.current.scrollHeight);
    // ParentRef.current.srollHeight();
  }
  const setId = (id) => {
    // setLesson(!lesson);
    if (id === ID) {
      setID(0);
    } else {
      setID(id);
    }
  };
  console.log(clicked);
  console.log(body, data);
  return (
    <div>
      {data?.map((val, i) => (
        <div className="collapsible  relative  h-full" key={i}>
          <div
            className={`toggle 
            border mt-5  ${
              ID === val.id
                ? "bg-white     "
                : " bg-white    cursor-pointer transition duration-700"
            } cursor-pointer flex px-3  flex-col rounded-lg hover:scale-105   
            `}
            onClick={() => {
              //   setShow(!show);
              getsub ? getsub(val.id) : null;
              setId(val.id);
            }}
          >
            <div
              className={`flex  justify-between p-3 `}
              onClick={() => setId(val.id)}
            >
              <div className="flex items-center  w-full justify-between">
                {/* left section flex  */}
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 rounded-full bg-gray-200 p-2 flex flex-col items-center justify-center">
                    <p className="text-gray-500 font-semibold text-sm">
                      {i + 1}
                    </p>
                  </div>
                  <p className="font-bold capitalize">{val.section_title}</p>
                </div>

                {/* right section flex  */}
                <div className="">
                  <BiChevronDownCircle className=" text-xl" />
                </div>
              </div>
              {/* <div>
                {val.id === ID ? (
                  <MdOutlineKeyboardArrowUp
                    className="w-7 h-7 transition-all   duration-700 delay-700 ease-in-out   
                    "
                  />
                ) : (
                  <MdOutlineKeyboardArrowDown className="w-7 h-7 " />
                )}
              </div> */}
            </div>
          </div>
          <div
            className={`content-parent  rounded-t-lg `}
            style={
              ID === val.id
                ? {
                    width: "100%",
                    height: `${val?.course_content?.length * 70}px`,
                  }
                : {
                    width: "100%",
                    height: "0px",
                  }
            }
            ref={ParentRef}
          >
            <div className=" w-full mt-4 rounded-t-lg p-0 m-0 ">
              {val.course_content.map((val, i) => {
                console.log(val, ID, unique, i);
                if (val.id === ID && unique) {
                  return (
                    <div
                      key={i}
                      style={{
                        height: "60px",
                      }}
                      className={`   
                   ${
                     show
                       ? "bg-gray-50 border    "
                       : "bg-sky-0  border border-gray-100 "
                   }   cursor-pointer flex py-4 text-black  `}
                      //   onClick={() => setShow(true)}
                    >
                      <div className="  text-sm capitalize  font-openSansFour">
                        {method_second}
                      </div>
                      <div className="  text-sm  mx-1 font-openSansFour">
                        {/* {val.id ? i + 1 : ""} */}
                      </div>
                      <div
                        className="capitalize  leading-6
                  text-sm md:text-base font-openSansThree  "
                        dangerouslySetInnerHTML={{ __html: val.title }}
                      />
                      {/* {val.title}
                  </div> */}
                    </div>
                  );
                } else if (!unique) {
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        setVideos(val.video);
                        setContent(val.id);
                        // setClicked(Content);
                        setClicked(val.id);
                      }}
                      className={`   
                   ${
                     Content && clicked === val.id
                       ? " border-l-orange-700  bg-white border-r-orange-700 "
                       : "bg-white  border border-gray-100 "
                   }   cursor-pointer flex py-3   w-full h-full  border-l-4 
                    border-r-4
                   border-l-blue-400 shadow-xl hover:text-sky-600  my-2    `}
                      // onClick={() => setShow(true)}
                    >
                      <div
                        className="transition-all cursor-pointer duration-500 w-full 
                        mx-2  "
                      >
                        <div className="">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              {Content === val.id ? (
                                <MdBarChart className="text-xl animate-pulse" />
                              ) : (
                                <BsFillPlayCircleFill className="text-xl" />
                              )}
                              <p className={`capitalize `}>
                                {val.content_title}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div
                        className="  text-sm md:text-base capitalize  
                      font-openSansFour"
                      >
                        {method_second}
                        <span> {val.id ? i + 1 : ""}: &nbsp;</span>
                        {val.content_title}
                      </div> */}

                      {/* {val.title}
                  </div> */}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collapsable;
