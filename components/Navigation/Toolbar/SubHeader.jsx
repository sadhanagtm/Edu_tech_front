import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { NavData } from "../NavData/NavData";

import Link from "next/link";
import { MdEmail } from "react-icons/md";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

function SubHeader() {

  const [data, setData] = React.useState([]);
  const router = useRouter();
  const [Route, setRotue] = useState("");

  useEffect(() => {
    if (router.isReady) {
      console.log(router);
      setRotue(router.asPath);
      console.log(router.asPath);
    }
  }, [router.isReady]);
  return (
    
    <div className="flex justify-between bg-green-500 capitalize items-center lg:px-20 py-4">

       {/* <div className="hidden lg:block bg-green-500 capitalize mx-auto lg:px-12 py-4">
       <div className="flex justify-end lg:mx-20 space-x-4 text-white font-serif font-black"> */}

    {/* <div className="lg:flex hidden capitalize items-center lg:space-x-4 xl:space-x-8 2xl:space-x-10 w-full justify-center"> */}
    <div className="lg:flex space-x-8 text-white text-lg">
              {NavData.map((val, i) => {
                if (val.disable === undefined) {
                  return (
                    <div
                      className="flex flex-col items-center relative"
                      key={i}
                    >
                      <Link href={val.link} passHref>
                        <div
                          className={`w-fit  cursor-pointer font-medium text-base ${val.link === Route ? "font-medium " : null
                            } active:border-b-2 transition hover:text-red-700`}
                        >
                          {val.title}
                        </div>
                      </Link>
                      {/* {val.link === Route && (
                        <div className="h-0.5 w-2/3 bg-primary absolute top-7"></div>
                      )} */}
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="flex flex-col items-center relative"
                      key={i}
                    >
                      <div href={val.link}>
                        <div
                          className={`w-fit cursor-not-allowed font-medium lg:text-sm ${val.link === Route ? "font-medium " : null
                            } active:border-b-2 transition hover:opacity-60`}
                        >
                          {val.title}
                        </div>
                      </div>
                      {val.link === Route && (
                        <div className="h-0.5 w-2/3 bg-primary absolute top-7"></div>
                      )}
                    </div>
                  );
                }
              })}
            </div>


    {/* <div className="hidden lg:block bg-green-500 capitalize mx-auto lg:px-60 py-4">  */}
     <div className="flex justify-end lg:mx-20 space-x-6 text-white font-serif font-black">
        {/* right section  */}
        <div>
          {" "}
          <Link href="/" passHref>
            <p className="transition hover:text-red-600 cursor-pointer">Home</p>
          </Link>
        </div>
        <div>
          {" "}
          <Link href="/AboutUs" passHref>
            <p className="transition hover:text-red-600 cursor-pointer">
              About Us
            </p>
          </Link>
        </div>
        <div>
          {" "}
          <Link href="/AllInstructor" passHref>
            <p className="transition hover:text-red-600 cursor-pointer">
              Gurus
            </p>
          </Link>
        </div>
        <div>
          {" "}
          {/* <Link href="/" passHref>
            <p className="transition  hover:opacity-80 cursor-pointer">
              live Seminar
            </p>
          </Link> */}
        </div>
        <div>
          {" "}
          <Link href="/Download" passHref>
            <p className="transition hover:text-red-600 cursor-pointer">
              Downloads
            </p>
          </Link>
        </div>
        <div>
          {" "}
          <Link href="/contact" passHref>
            <p className="transition hover:text-red-600 cursor-pointer">
              Contact Us
            </p>
          </Link>
        </div>
      </div>
    </div>

  // </div>
  );
}

export default SubHeader;
