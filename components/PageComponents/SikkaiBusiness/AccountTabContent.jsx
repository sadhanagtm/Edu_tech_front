import React from "react";
import { AiOutlineUser } from "react-icons/ai";

function AccountTabContent() {
  return (
    <div>
      <div className="flex items-center space-x-2 font-bold mb-4">
        <AiOutlineUser className="text-xl" />
        <p>ACCOUNT</p>
      </div>
      <hr className="border-gray-200 my-4" />
      <p className="font-medium leading-relaxed text-justify text-sm">
        {" "}
        Account section is all about yours earnings. It will hold all
        information about your earnings, total works, withdrawn amount, received
        amount etc. Account section are developed by using highly secure tools
        and techniques to prevent and protect from any kinds of damage or loss
        and to build the user’s trust. Account section facilitates you by
        providing features given below :
      </p>{" "}
      <ul className="font-medium leading-relaxed text-sm">
        <li>
          Once you register to Sikka – I platform, your business account is also
          created.
        </li>
        <li>Provides the information about your total earnings.</li>
        <li>Provides platform to receive and withdraw your earnings.</li>
        <li>
          Provides detail information about your rank, team and their
          performance.
        </li>
      </ul>
    </div>
  );
}

export default AccountTabContent;
