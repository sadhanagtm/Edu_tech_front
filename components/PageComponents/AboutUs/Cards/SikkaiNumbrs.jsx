import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";

function SikkaiNumbrs() {
  return (
    <div className="shadow-lg border border-gray-100 rounded-xl w-3/4 grid md:grid-cols-3 gap-8">
      <div className=" h-32 rounded-xl flex flex-col items-center justify-center">
        <div className="flex items-center space-x-4">
          <div className="bg-purple-600 h-14 w-14 p-4 flex flex-col justify-center items-center rounded-full">
            <AiOutlineUser className="text-4xl text-white" />
          </div>
          <div className="text-left">
            <p>Students</p>
            <p className="text-4xl font-bold">200+</p>
          </div>
        </div>
      </div>

      <div className=" h-32 rounded-xl flex flex-col items-center justify-center">
        <div className="flex items-center space-x-4">
          <div className="bg-pink-600 h-14 w-14 p-4 flex flex-col justify-center items-center rounded-full">
            <FaUserTie className="text-4xl text-white" />
          </div>
          <div className="text-left">
            <p>Instructor</p>
            <p className="text-4xl font-bold">14+</p>
          </div>
        </div>
      </div>

      <div className="h-32 rounded-xl flex flex-col items-center justify-center">
        <div className="flex items-center space-x-4">
          <div className="bg-green-600 h-14 w-14 p-4 flex flex-col justify-center items-center rounded-full">
            <BiBook className="text-4xl text-white" />
          </div>
          <div className="text-left">
            <p>Students</p>
            <p className="text-4xl font-bold">200+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SikkaiNumbrs;
