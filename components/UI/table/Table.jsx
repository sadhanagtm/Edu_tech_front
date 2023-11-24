import PropTypes from "prop-types";
import React from "react";

function Table({ Thead, value, children }) {
  return (
    <table
      cellPadding="0px"
      cellSpacing="0px"
      border={"0px solid white"}
      className="w-12/12  bg-hoverThree  "
    >
      <thead
        className={`${
          value === "simple"
            ? ""
            : "border-l border-t border-r   border-gray-600"
        }`}
      >
        <tr className="">
          {value === "simple"
            ? Thead?.map((val, i) => {
                return (
                  <td
                    key={i}
                    style={{
                      width: val.width,
                    }}
                    width={val.width}
                    className={` 
                 capitalize border-b-2 border-gray-100    OpenSans font-bold text-black
                 xs:text-sm  sm:text-sm  md:text-base 
                  lg:text-base  xl:py-4 xl:text-sm xxl:text-base  xs:font-light
                  bg-hoverThree  w-screen 
                  "
                      `}
                  >
                    {val.title}
                  </td>
                );
              })
            : Thead?.map((val, i) => {
                return (
                  <td
                    key={i}
                    style={{
                      width: val.width,
                    }}
                    width={val.width}
                    className={` 
                   capitalize border-r  bg-gray-600 text-center   OpenSans font-bold text-white
                   xs:text-sm xs:py-4 sm:text-sm py-4 md:text-base md:py-4
                    lg:text-base lg:py-3 xl:py-4 xl:text-sm xxl:py-5 xxl:text-base  xs:font-light
                    bg-hoverThree  w-screen 
                    px-2 py-4"
                        `}
                  >
                    {val.title}
                  </td>
                );
              })}
        </tr>
      </thead>
      <tbody className={value === "simple" ? "bg-white" : " bg-gray-100 "}>
        {children}
      </tbody>
    </table>
  );
}
Table.propTypes = {
  Thead: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ),
  children: PropTypes.element,
};

export default Table;
