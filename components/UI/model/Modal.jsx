import React from "react";

function Modal({ children }) {
  return (
    <div
      style={{
        background: "rgba(0,0,0,.8)",
      }}
      className="fixed  z-50 flex justify-center 
    items-center bottom-0 right-0 w-full h-full top-0 left-0 "
    >
      <div className=" z-50 bg-white     w-10/12 sm:w-8/12 lg:w-4/12   pb-10  ">
        {children}
      </div>
    </div>
  );
}

export default Modal;
