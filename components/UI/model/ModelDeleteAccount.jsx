import React from "react";
import Backdrop2 from "../backdrop/Backdrop2";

function ModelDeleteAccount(props) {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-full flex items-center "
      style={{
        background: "rgba(0,0,0,.5)",
      }}
    >
      <div className=" mx-3 px-2  md:p-4 h-fit w-fit bg-white md:mx-auto rounded-lg">
        <div className="    flex items-center z-20  justify-items-center  w-full h-full    ">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default ModelDeleteAccount;
