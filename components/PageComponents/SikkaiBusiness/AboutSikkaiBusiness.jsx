import React from "react";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";
import { MdOutlineBusinessCenter } from "react-icons/md";
import AccountTabContent from "./AccountTabContent";
import BusinessTabContent from "./BusinessTabContent";
import OwnershipTabContent from "./OwnershipTabContent";
import thumb1 from "../../../public/thumbnail1.jpg";
import thumb2 from "../../../public/thumbnail2.jpg";
import thumb3 from "../../../public/thumbnail3.jpg";
import Image from "next/image";

function AboutSikkaiBusiness() {
  const [currentTab, setCurrentTab] = useState("account");

  let TabLayout;
  if (currentTab === "account") TabLayout = <AccountTabContent />;
  if (currentTab === "business") TabLayout = <BusinessTabContent />;
  if (currentTab === "ownership") TabLayout = <OwnershipTabContent />;

  return (
    <div className="bg-white mb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 2xl:px-16">
          {/* grid left section  */}
          <div className="lg:col-span-9 ">
            <h1 className="text-4xl uppercase tracking-normal font-extrabold">
              How sikkai can be your <br />
              next
              <span className="text-primary "> business platform</span> ?
            </h1>
            <div className="rounded-xl p-4 bg-gray-50 mt-12 shadow">
              <h4 className="uppercase">About Sikkai business</h4>
              <p className="text-sm leading-relaxed pb-4 font-medium">
                Sikka – I gives the opportunity to earn the active as well as
                passive income with great margin of profit. Sikka – I business
                platform helps to create individual’s business account as well
                as provide the facility of ownership by creating investment
                platform. Different features you get while contributing to
                business platform are given below :
              </p>
            </div>

            {/* tab heading section  */}
            <div className="w-full pr-4">
              <div className="flex flex-wrap items-center mt-8 lg:space-x-4 w-full overflow-auto">
                <div
                  className={`flex items-center space-x-2 cursor-pointer px-8 py-2 my-2 sm:my-0 text-gray-500 font-bold text-sm ${
                    currentTab === "account" &&
                    "bg-primary rounded-md shadow-md text-gray-50"
                  }`}
                  onClick={() => setCurrentTab("account")}
                >
                  <AiOutlineUser className="text-xl" />
                  <p>ACCOUNT</p>
                </div>

                <div
                  className={`flex items-center space-x-2 cursor-pointer px-8 py-2 my-2 sm:my-0 text-gray-500 font-bold text-sm ${
                    currentTab === "business" &&
                    "bg-primary rounded-md shadow-md text-gray-50"
                  }`}
                  onClick={() => setCurrentTab("business")}
                >
                  <MdOutlineBusinessCenter className="text-xl" />
                  <p>BUSINESS</p>
                </div>

                <div
                  className={`flex items-center space-x-2 cursor-pointer px-8 py-2 my-2 sm:my-0 text-gray-500 font-bold text-sm ${
                    currentTab === "ownership" &&
                    "bg-primary rounded-md shadow-md text-gray-50"
                  }`}
                  onClick={() => setCurrentTab("ownership")}
                >
                  <BsPatchCheck className="text-xl" />
                  <p>OWNERSHIP</p>
                </div>
              </div>
            </div>

            {/* tab content section  */}
            <div className="bg-gray-50 rounded-md p-8 mt-8 shadow-md">
              {TabLayout}
            </div>
          </div>

          {/* grid right section  */}
          <div className="lg:col-span-3 border-l px-3">
            <p className="font-bold mb-4">Watch for more info</p>
            <div className="relative w-full h-44 overflow-hidden">
              <Image src={thumb3} layout="responsive" objectFit="contain" />
            </div>
            <h4 className="font-bold my-3">Introduction to sikkai.</h4>

            <div className="relative w-full h-44 overflow-hidden">
              <Image src={thumb2} layout="responsive" objectFit="contain" />
            </div>
            <h4 className="font-bold my-3">How to get started with Sikkai ?</h4>

            <div className="relative w-full h-44 overflow-hidden">
              <Image src={thumb1} layout="responsive" objectFit="contain" />
            </div>
            <h4 className="font-bold my-3 ">
              How to maintain Sikkai profile ?
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSikkaiBusiness;
