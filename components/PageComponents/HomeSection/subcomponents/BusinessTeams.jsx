import React, { useState } from "react";
import Image from "next/image";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdBusinessCenter, MdLibraryBooks } from "react-icons/md";
import { HiCheckCircle } from "react-icons/hi";
import ScrollTo from "react-scroll-into-view";
import image from "../../../../public/kisan.jpg";
function BusinessTeams() {
  const [icon, setIcon] = useState(false);
  const [ids, setIds] = useState("");
  const data = [
    {
      id: 1,
      image: image,
      name: "kisan mahat",
      userId: "51111110248",
      Sp: "600",
      Rp: "300",
    },

    {
      id: 2,
      image: image,
      name: "kisan mahat",
      userId: "51111110248",
      Sp: "600",
      Rp: "300",
    },

    {
      id: 3,
      image: image,
      name: "kisan mahat",
      userId: "51111110248",
      Sp: "600",
      Rp: "300",
    },

    {
      id: 4,
      image: image,
      name: "kisan mahat",
      userId: "51111110248",
      Sp: "600",
      Rp: "300",
    },
  ];
  return (
    <div className="bg-blue-50 lg:pb-20 pt-14 pb-16">
      <div id="a" className="  px-5  ">
        <div className="text-4xl mb-10 text-center font-openSansSeven text-gray-700">
          My Teams
        </div>
        <div className="grid pt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((val, i) => {
            return (
              <div
                key={i}
                className="shadow-xl bg-white w-full  border-t  rounded-md  gap-5 
                hover:scale-105 transition-all duration-300 delay-100 ease-in-out shadow-gray-400 p-5 cursor-pointer"
              >
                <div
                  className="font-openSansFive flex  items-center 
                gap-1 mb-2 text-gray-600 text-xs"
                >
                  <div className="">ID:{val.userId}</div>
                  <div>
                    <MdLibraryBooks className="w-3 h-3" />
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <div className="">
                    <div className="w-28 selection:relative  z-50   rounded-full bg-gray-100">
                      <Image
                        src={image}
                        height={100}
                        width={100}
                        alt="image"
                        placeholder="blur"
                        blurDataURL="image"
                        layout="responsive"
                        className="rounded-sm transition-all duration-300 delay-100 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 my-3">
                    {/* <div className="border-b-2 "></div> */}
                    <div className="font-openSansSeven text-gray-700 text-base ">
                      Name : {val.name}
                    </div>

                    <div className="flex gap-5 items-center">
                      <div className="font-openSansFive text-base text-gray-500">
                        SP : {val.Sp}
                      </div>
                      <div className="font-openSansFive text-base text-gray-500">
                        {" "}
                        RP : {val.Rp}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-8">
          <div
            className="  hover:shadow-sm
                  hover:shadow-gray-300  hover:opacity-75 
                  shadow-xl transition-all duration-300 ease-in-out mt-6 w-fit lg:w-32 h-fit btn-primary rounded-md"
          >
            View More
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessTeams;
