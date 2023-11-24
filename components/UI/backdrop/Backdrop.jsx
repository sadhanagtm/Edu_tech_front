import { AiOutlineClose } from "react-icons/ai";
import React from "react";

function Backdrop(props) {
  return (
    <div
      className=" grid  grid-cols-12  fixed bg-black  top-0
      bottom-0 right-0  left-0   z-10 h-full w-full bg-opacity-80"
    >
      <div className="col-span-8"> {props.children}</div>

      <div
        onClick={() => props.setShow(false)}
        className="h-full col-start-11 col-span-3 z-50 "
      >
        <AiOutlineClose
          onClick={() => props.setShow(false)}
          className=" h-10 w-10 bg-white absolute z-50   p-1 rounded-full mt-3 shadow-3xl"
        />
      </div>
    </div>
  );
}

export default Backdrop;
