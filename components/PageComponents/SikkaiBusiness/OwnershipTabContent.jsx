import React from "react";
import { BsPatchCheck } from "react-icons/bs";

function OwnershipTabContent() {
  return (
    <div>
      <div className="flex items-center space-x-2 font-bold mb-4">
        <BsPatchCheck className="text-xl" />
        <p>OWNERSHIP</p>
      </div>
      <hr className="border-gray-200 my-4" />
      <p className="font-medium leading-relaxed text-justify text-sm">
        Ownership section provides with different platform where you can easily
        invest, own different organization. Ownership section helps to create
        your personality to be like the boss. Various facilities provided under
        this section are given below :
      </p>{" "}
      <ul className="font-medium leading-relaxed text-sm">
        <li>Facilitates you with different platform of ownership.</li>
        <li>
          Provides platform to invest your Sikka – I earnings in various other
          organization.
        </li>
        <li>Guides you with various ways of financial management.</li>
      </ul>
    </div>
  );
}

export default OwnershipTabContent;
