import React from "react";
import { AiOutlineClose } from "react-icons/ai";
function Backdrop2(props) {
  return (
    <div
      className="  fixed bg-black  top-0
      bottom-0 right-0  left-0   z-10 h-full w-full bg-opacity-80"
    >
      <div className=""> {props.children}</div>
    </div>
  );
}

export default Backdrop2;
