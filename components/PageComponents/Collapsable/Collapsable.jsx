import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import React, { useRef, useState } from "react";

function Collapsable({
  method_second,
  identity,
  getsub,
  unique,
  method,
  data,
  body,
}) {
  const [show, setShow] = useState(false);
  const [ID, setID] = useState(0);

  const ParentRef = useRef();
  if (ParentRef.current) {
    console.log(ParentRef.current.scrollHeight);
  }

  const setId = (id) => {
    if (id === ID) {
      setID(0);
    } else {
      setID(id);
    }
  };
  console.log(body);
  return (
    <div className="">
      {data.map((val, i) => (
        <div className="collapsible" key={i}>
          <div
            className={`toggle 
            border mt-5  ${
              ID === val.id
                ? "bg-primary text-white     "
                : " transition-all duration-75 bg-gray-100 text-black"
            } cursor-pointer flex  flex-col   border-gray-300
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
              <div className="flex ">
                <div className="  capitalize  text-xs text-justify  lg:text-base font-openSansFive">
                  {" "}
                  <span>
                    {method} {i + 1} : &nbsp;
                  </span>
                  {val.title}
                </div>
                <div className="capitalize font-openSansFive text-sm "> </div>
              </div>
              <div>
                {val.id === ID ? (
                  <MdOutlineKeyboardArrowUp
                    className="w-7 h-7 transition-all   duration-700 delay-700 ease-in-out   
                    "
                  />
                ) : (
                  <MdOutlineKeyboardArrowDown className="w-7 h-7 " />
                )}
              </div>
            </div>
          </div>
          <div
            className={`content-parent`}
            style={
              ID === val.id
                ? {
                    height: `${body.length * 70}px`,
                  }
                : {
                    height: "0px",
                  }
            }
            ref={ParentRef}
          >
            <div className="content ">
              {body.map((val, i) => {
                console.log(val, ID, unique);
                if (val.id === ID && unique) {
                  return (
                    <div
                      key={i}
                      style={{
                        height: "90px",
                      }}
                      className={`   
                   ${
                     show
                       ? "bg-gray-50 border    "
                       : "bg-sky-0  border border-gray-100 "
                   }   cursor-pointer flex p-4 text-black  `}
                    >
                      <div className="  text-sm capitalize  font-openSansFour">
                        {method_second}
                      </div>
                      <div className="  text-sm  mx-1 font-openSansFour"></div>
                      <div
                        className="capitalize  leading-6
                  text-sm md:text-base font-openSansThree  "
                        dangerouslySetInnerHTML={{ __html: val.title }}
                      />
                    </div>
                  );
                } else if (!unique) {
                  return (
                    <div
                      key={i}
                      className={`   
                   ${
                     show
                       ? "bg-gray-50 border    "
                       : "bg-sky-0  border border-gray-100 "
                   }   cursor-pointer flex p-4 text-black  `}
                    >
                      <div className="  text-sm md:text-base capitalize  font-openSansFour">
                        {method_second}
                        <span> {val.id ? i + 1 : ""}: &nbsp;</span>
                        {val.title}
                      </div>
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
