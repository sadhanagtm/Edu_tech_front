import React, { useState } from "react";

function CategoriesCard(props) {
  const [showCategories, setShowCategories] = useState(false);
  const [showData, setShowData] = useState([]);
  const showMoreData = (subtitleValue) => {
    console.log(subtitleValue);
  };
  return (
    <div className="">
      <div
        className={` flex flex-row justify-between h-14 px-4 items-center w-full  ${
          showCategories ? "bg-blue-400 text-white" : "bg-gray-200 "
        }`}
        onClick={() => setShowCategories(!showCategories)}
      >
        <div className="font-semibold">{props.title}</div>

        {!showCategories ? <div>{props.icon1}</div> : <div>{props.icon2}</div>}
      </div>

      {showCategories ? (
        <div className="bg-gray  text-base  py-3">
          {props.subtitle.map((val, i) => {
            return (
              <div
                key={i}
                className="flex items-center space-x-4 mx-3 leading-10"
              >
                <div className="flex space-x-1">
                  <div className="">
                    <input type="radio" />
                  </div>

                  <div className="font-base"> {val.name}</div>
                </div>
                <div> {val.totalCourses}</div>
              </div>
            );
          })}
          {showData}

          <button
            className="px-4"
            onClick={() => showMoreData(props.subtitle[3])}
          >
            more categories...
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default CategoriesCard;
