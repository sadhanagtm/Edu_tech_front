import React from "react";
import { MdOutlineSupportAgent, MdSettings } from "react-icons/md";
import { RiCoinsFill, RiLightbulbFlashFill } from "react-icons/ri";
import { GiTwoCoins } from "react-icons/gi";
import { FaAward, FaCoins } from "react-icons/fa";

function WhyToBeInstructor() {
  return (
    <div className="my-8">
      <div className="container mx-auto px-4 lg:px-8 2xl:px-16">
        <section className="bg-primary text-white p-8 rounded-md shadow text-center">
          <h1 className="uppercase">
            {" "}
            <span className="font-extrabold text-gray-800">WHY </span>
            To Become A Sikkai GURU{" "}
            <span className="font-extrabold text-gray-800">?</span>
          </h1>
        </section>

        <section className="flex flex-col justify-center items-center mt-8">
          <div className="md:w-3/4 grid grid-cols-12 my-8 items-start">
            <div className="col-span-2">
              <RiLightbulbFlashFill className="text-4xl" />
            </div>
            <div className="col-span-10">
              <p className="font-bold text-xl mb-4">
                To Build Marketing Strategies
              </p>
              <p>
                Sikka-I helps our gurus to grow themselves in multiple ways. Our
                gorilla affiliator team is always focused to push your sales.
                Not only this Sikka-I promotes best courses, gurus on their own.
              </p>
            </div>
          </div>

          <div className="md:w-3/4 grid grid-cols-12 my-8 items-start">
            <div className="col-span-2">
              <MdOutlineSupportAgent className="text-4xl" />
            </div>
            <div className="col-span-10">
              <p className="font-bold text-xl mb-4">Technical Support </p>
              <p>
                Sikka-I is always there to help you technically feom creating
                content to building courses, making them ready and promoting to
                market. Sikka-I has its own course development department where
                you can record your courses for free and leave it rest for
                Sikka-I. Our technical team will always guide you through the
                journey of Sikka-I to be the ultimate Sikkai guru.
              </p>
            </div>
          </div>

          <div className="md:w-3/4 grid grid-cols-12 my-8 items-start">
            <div className="col-span-2">
              <RiCoinsFill className="text-4xl" />
            </div>
            <div className="col-span-10">
              <p className="font-bold text-xl mb-4">
                Biggest Passive Income Platform{" "}
              </p>
              <p>
                Sikka-I is the biggest and growing platform to generate lifetime
                passive income. Providing support we guide younto unlock your
                potential and grow yourself financially free.
              </p>
            </div>
          </div>

          <div className="md:w-3/4 grid grid-cols-12 my-8 items-start">
            <div className="col-span-2">
              <FaAward className="text-4xl" />
            </div>
            <div className="col-span-10">
              <p className="font-bold text-xl mb-4">Awards And Recognition </p>
              <p>
                Sikka-I is always there to cheer you in your success abd guide
                you through your hard times . We always love to cheer gurus and
                create best gurus to help our students. We help you to promote
                your potential and grow fame globally. Our reward plans are
                there to motivate you and deliver your best.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WhyToBeInstructor;
