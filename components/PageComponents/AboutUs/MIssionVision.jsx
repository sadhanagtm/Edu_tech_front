import Image from "next/image";
import React from "react";
import { BsFillLightbulbFill } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import MvImg from "../../../public/missionVisionImg2.png";
import { SiTarget } from "react-icons/si";
import { GrAchievement } from "react-icons/gr";

function MIssionVision() {
  return (
    <div className="mt-28 grid lg:grid-cols-3 gap-10">
      <div className="relative mt-24 lg:block hidden ">
        <Image src={MvImg} layout="responsive" />
      </div>
      <div className="col-span-2  p-8">
        <div className="flex flex-col items-center justify-center lg:block">
          <div className="flex items-center space-x-4">
            <FaRegLightbulb />
            <h3>OUR VISION</h3>
          </div>
          <p className="w-3/4">
            To establish as the top leading certified digital educational
            company of Nepal by serving the best quality learning platform at
            affordable pricing in field of skill based non-academic education
            for the people and transforming their life through best earning
            opportunity.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center lg:block">
          <div className="flex items-center space-x-4">
            <SiTarget />
            <h3>OUR MISSION</h3>
          </div>
          <p className="w-3/4">
            We provide the certified learning platform from where anybody can
            learn their desired courses easily at anytime from anywhere at their
            own favorable pace. Our mission is also providing the wonderful
            earning opportunities to make their own ownership.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center lg:block">
          <div className="flex items-center space-x-4">
            <GrAchievement />
            <h3>OUR OBJECTIVE</h3>
          </div>
          <p className="w-3/4">
            Our goal is to help millions of people to achieve their own goal of
            success by providing the best learning and earning opportunities.
            Teach and support them as their goal. Finally our goal is to
            establish skill based non-academic University in Nepal to empowering
            the Nation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MIssionVision;
