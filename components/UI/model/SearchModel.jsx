import React from "react";

function SearchModal({ children }) {
  return (
    <div
      style={{
        background: "rgba(240,240,240,0.8)",
      }}
      className="fixed  z-50 flex justify-center 
    items-center bottom-0 right-0 w-full h-full top-0 left-0 "
    >
      <div className=" z-50 bg-white  top-20 absolute   rounded-xl  w-10/12 sm:w-9/12 lg:w-6/12    ">
        {children}
      </div>
    </div>
  );
}

export default SearchModal;
