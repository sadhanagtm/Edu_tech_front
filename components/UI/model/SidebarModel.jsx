import React from "react";
import Backdrop from "../backdrop/Backdrop";

function Model(props) {
  return (
    <Backdrop show={props.show} setShow={props.setShow}>
      <div>
        <div className="  absolute  flex items-center z-20  justify-items-center  w-full h-full    ">
          {props.children}
        </div>
      </div>
    </Backdrop>
  );
}

export default Model;
