import React, { useState, useEffect } from "react";
import { Line } from "rc-progress";
import { FaBookReader } from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";

function UserProgress({ completed_contents, clicked, total_contents }) {
  const [percent, setPercent] = useState();

  useEffect(() => {
    const per = (completed_contents / total_contents) * 100;
    setPercent(per.toFixed(2));
    // console.log(per);
  }, [completed_contents, total_contents]);
  return (
    <div>
      <div className="bg-primary rounded-md shadow-lg px-6 py-4">
        {/* top section   */}
        <div className="flex justify-between">
          {/* left section  */}
          <div className="flex text-white ">
            <div className="text-5xl font-bold w-fit ">{percent}</div>
            <div className=" text-xl    px-1 font-bold">%</div>
          </div>
          {/* right section  */}
          <div className="mt-1 px-3 ">
            <FaBookReader className="text-white text-4xl" />
          </div>
        </div>
        {/* mid section  */}
        <div className="text-white my-4">
          <p className="flex items-center">
            <BsFillCaretRightFill className="mr-1" />
            Completed {completed_contents}
          </p>
          <p className="flex items-center">
            <BsFillCaretRightFill className="mr-1" />
            Total {total_contents}
          </p>
        </div>
        {/* Last section  */}
        {console.log("iddddddddddddddddddddddddddd", clicked)}{" "}
        <div className="mt-4 text-white">
          <p className="font-bold text-lg mb-3">My Progress</p>
          <Line
            clicked={clicked}
            percent={percent}
            strokeWidth="2"
            trailWidth="2"
            strokeLinecap="round"
            strokeColor="#EF3C23"
            trailColor="#fff"
          />
        </div>
      </div>
      {/* {" "}
      <div className="bg-white rounded-b-lg shadow-xl -mt-2 px-2 pt-7 pb-1">
        <div className="flex items-center my-2">
          <p className="text-primary font-bold">38%</p>

          <p className="font-semibold ml-3">Update in progress...</p>
        </div>
      </div> */}
    </div>
  );
}

export default UserProgress;
