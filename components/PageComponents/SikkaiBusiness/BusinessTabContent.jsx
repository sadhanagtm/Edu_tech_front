import React from "react";
import { MdOutlineBusinessCenter } from "react-icons/md";

function BusinessTabContent() {
  return (
    <div>
      <div>
        <div className="flex items-center space-x-2 font-bold mb-4">
          <MdOutlineBusinessCenter className="text-xl" />
          <p>BUSINESS</p>
        </div>
        <hr className="border-gray-200 my-4" />
        <p className="font-medium leading-relaxed text-justify text-sm">
          Business section will hold information about business. It will also
          hold the information about getting into business platform, growing
          business further and all future projects. Detail information about
          business platform are given below :
        </p>{" "}
        <ul className="font-medium leading-relaxed text-sm">
          <li>
            Guides you with different ideas and strategies to develop your
            business in a smart way
          </li>
          <li>
            Encourages you to increase your earnings by offering amazing offers.
          </li>
          <li>
            Guides you to setup business platform in digital way with the help
            of text & videos.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BusinessTabContent;
