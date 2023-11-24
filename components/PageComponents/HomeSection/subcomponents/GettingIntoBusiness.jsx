import React, { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";
function GettingIntoBusiness() {
  const [ids, setIds] = useState("");
  const [icon, setIcons] = useState(false);

  const infos = [
    {
      id: 0,
      icons: <BiRupee className="w-20 h-20" />,
      step: "angular js",
      description1:
        " The min-height property will apply to all elements except",
      title: "how we can help?",
      description2:
        "  Authors may use any of the length values as long as they are a positive value.",
    },
    {
      id: 1,
      icons: <AiFillShopping className="w-20 h-20" />,
      step: "react js",
      description1:
        " The min-height property will apply to all elements except",
      title: "how we can help?",
      description2:
        "  Authors may use any of the length values as long as they are a positive value.",
    },
    {
      id: 2,
      icons: <MdOutlineSupportAgent className="w-20 h-20" />,
      step: "node js",
      description1:
        " The min-height property will apply to all elements except",
      title: "how we can help?",
      description2:
        "  Authors may use any of the length values as long as they are a positive value.",
    },
  ];
  return (
    <div className="lg:pb-14 pb-10 pt-14    bg-blue-100 ">
      <div className=" px-5 ">
        <div className="text-3xl sm:text-4xl mb-10 text-center font-openSansSeven text-gray-700 capitalize">
          Getting into business
        </div>
        <div className="flex justify-center ">
          <div>
            {infos.map((val, i) => {
              return (
                <div key={i} className="flex flex-col">
                  <div
                    className={`flex flex-col lg:gap-20 gap-10 w-fit sm:w-full sm:items-center sm:justify-between py-5 ${
                      i % 2 === 0 ? " md:flex-row " : "  md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={` flex sm:items-center cursor-pointer w-fit  p-10 text-white  rounded-full h-fit  sm:justify-center 
                    ${
                      icon && val.id === ids
                        ? ` bg-gray-400    transition-all delay-200 duration-500    ease-in-out`
                        : `transition-all rounded-full duration-500 delay-200 ease-in-out 
                        ${
                          val.id === 0
                            ? "bg-primary text-white "
                            : val.id === 1
                            ? "bg-secondary text-white"
                            : val.id === 2
                            ? "bg-yellow-400 text-white"
                            : null
                        } 
                        `
                    }
                  
                  
                    
                 
                  `}
                      onMouseEnter={() => {
                        setIds(val.id), setIcons(true);
                      }}
                    >
                      {val.icons}
                    </div>

                    <div className="px-5 lg:px-0  sm:w-7/12 space-y-4 flex flex-col   ">
                      <div className="uppercase  font-openSansSeven text-2xl text-gray-700">
                        process {i + 1}
                        <div className="border-b-4 border-primary  rounded-lg w-20"></div>
                      </div>
                      <div className=" text-xl font-openSansSeven capitalize">
                        {val.step}
                      </div>
                      <div className="text-base font-openSansSix">
                        {val.description1}
                      </div>
                      <div className=" text-xl capitalize font-openSansSix">
                        - {val.title}
                      </div>
                      <div className=" text-base font-openSansFive">
                        {val.description2}
                      </div>
                    </div>
                  </div>
                  <div className="border-b-2 border-gray-400 h-1 w-11/12 lg:hidden mx-auto"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GettingIntoBusiness;
