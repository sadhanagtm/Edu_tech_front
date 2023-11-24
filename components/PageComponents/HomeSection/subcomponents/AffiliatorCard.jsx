import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import Image from "next/image";
import React from "react";

function AffiliatorCard({
  message,
  photo,
  color,
  name,
  facebook,
  twitter,
  linkedin,
}) {
  return (
    <div className="p-4">
      <div className="bg-gray-100 p-4 lg:p-8 shadow-md">
        <FaQuoteLeft className="text-primary" />

        <div className="text-center h-56 flex items-center">
          {" "}
          <p className="p-2">{message}</p>
        </div>
        <div className="flex justify-end">
          <FaQuoteRight className="text-primary " />
        </div>
      </div>

      <div className="text-center text-white bg-gray-100 shadow-xl">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full relative overflow-hidden mx-auto border-2">
            <Image
              src={photo}
              alt=""
              objectFit="cover"
              layout="fill"
              objectPosition={"top center"}
              srcSet=""
            />
          </div>
        </div>
        <div className="py-12 -mt-10" style={{ backgroundColor: `${color}` }}>
          <p className="text-lg font-semibold pt-4">{name}</p>
          <div className="flex items-center space-x-4 justify-center my-2">
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="cursor-pointer transition hover:opacity-70" />
            </a>
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="cursor-pointer transition hover:opacity-70" />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="cursor-pointer transition hover:opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AffiliatorCard;
