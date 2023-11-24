import { BiDollarCircle } from "react-icons/bi";
import FeatureCard from "./subcomponents/FeatureCard";
import { IoPeopleSharp } from "react-icons/io5";
import { IoSchool } from "react-icons/io5";
import React from "react";
import BreakPointTest from "../../test/BreakPointTest";

function Features() {
  const data = [
    {
      icon: <IoSchool className="text-primary text-xl xl:text-3xl" />,
      title: "Sikkai for Learning",
      link: "/courses",
      desciption:
        "Sikka-I is the best platform to learn the desired skills for everyone.",
    },
    {
      icon: <BiDollarCircle className="text-primary text-xl xl:text-3xl" />,
      title: "Sikkai for Earning",
      link: "/businessPage",

      desciption:
        "Sikka-I is the growing platform with best earning opportunity for everyone.",
    },
    {
      icon: <IoPeopleSharp className="text-primary text-xl xl:text-3xl" />,
      title: "Sikkai for Ownership",
      link: "/become_instructor",

      desciption:
        "Sikka-I guides everyone to own their dream life. Sikka-I  is launching multiple ownership models that will help to achieve team life.",
    },
  ];
  return (
    <div className=" md:h-148 lg:h-96 ">
      <div className="font-bold text-gray-700  text-3xl md:text-4xl text-center pb-4 md:pb-14">
        Sikka-I Concept
      </div>

      <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3">
        {data.map((item, i) => (
          <div
            key={i}
            className="transition duration-1000 hover:scale-105 hover:shadow-xl p-4 sm:p-8 hover:border hover:rounded-lg cursor-pointer "
          >
            {" "}
            <FeatureCard
              key={i}
              title={item.title}
              icon={item.icon}
              description={item.desciption}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
