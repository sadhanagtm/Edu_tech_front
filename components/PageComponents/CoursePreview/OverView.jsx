import React from "react";

function OverView({ corsesDetail }) {
  return (
    <div
      className="h-fit py-2 px-8 
             text-xs lg:text-sm font-openSansFour text-justify  bg-white
             leading-7 max-h-96 scroll
            tracking-wide"
      dangerouslySetInnerHTML={{ __html: corsesDetail }}
    />
  );
}

export default OverView;
