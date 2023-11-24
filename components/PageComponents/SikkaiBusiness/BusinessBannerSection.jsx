import React from "react";
import ScrollTo from "react-scroll-into-view";

function BusinessBannerSection() {
  return (
    <div className="businessbg">
      <div className="container mx-auto px-4 lg:px-8 pt-36 pb-8 lg:py-32">
        <h2 className="text-4xl font-bold text-gray-700 -tracking-[.04em] leading-normal">
          <span className="text-6xl">Sikka-I</span> <br />
          <span className="font-medium">
            {" "}
            Learn, <span className="font-bold text-primary">Earn</span> & Own
          </span>
        </h2>
        <p className=" lg:w-1/2">
          Sikka – I is a platform that provides every individual with the
          opportunity of learning the desired skills, earning good income and
          owning the dream life. We work to uplift the life of youths by
          providing them multiple learning, earning and owning opportunities.
        </p>
        <ScrollTo selector={"#howsikkasection"}>
          <button className="btn-primary rounded-full my-12">
            Get Started
          </button>
        </ScrollTo>
      </div>

      <div className="" id="howsikkasection"></div>
    </div>
  );
}

export default BusinessBannerSection;
