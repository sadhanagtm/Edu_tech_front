import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";

function Footer() {
  const data = [
    {
      name: "Online Courses",
      description:
        "Adding social icons connect with the company on social networks.",
    },
    {
      name: "Moderalization",
      description:
        "Adding social icons connect with the company on social networks.",
    },
    {
      name: "Business Session",
      description:
        "Adding social icons connect with the company on social networks.",
    },
    {
      name: "Courses",
      description:
        "Adding social icons connect with the company on social networks.",
    },
  ];
  const [Links, setlinks] = useState([
    {
      title: "FAQ",
    },
    {
      title: "Account",
    },
    {
      title: "Business",
    },
    {
      title: "Ownership",
    },
    {
      title: "Downloads",
    },
  ]);
  const [About, setAbout] = useState([
    {
      title: "company",
    },
    {
      title: "Customers",
    },
    {
      title: "Contact us",
    },
    {
      title: "Careers",
    },
  ]);
  return (
    <div className="bg-gray-800 md:pt-14">
      <div className="lg:container lg:mx-auto px-3 sm:px-4 lg:px-8 py-8 md:py-0">
        {/* main grid for upper section starts  */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-8 lg:gap-0 xl:gap-10">
          <div className="md:col-span-2  ">
            <div className="capitalize mb-6 text-primary font-openSansSix  md:text-xl">
              quick links
            </div>
            <div className="capitalize  font-openSansFour   text-white">
              {Links?.map((val, i) => {
                return (
                  <div
                    key={i}
                    className="my-3 text-xs sm:text-base transition hover:opacity-70  w-fit cursor-pointer "
                  >
                    {val.title}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="md:col-span-2  ">
            <div className="capitalize mb-6 font-openSansSix text-primary md:text-xl">
              about
            </div>
            <div className="capitalize text-base font-openSansFour  text-white">
              {About?.map((val, i) => {
                return (
                  <div
                    key={i}
                    className="my-3 text-xs sm:text-base transition hover:opacity-70  w-fit cursor-pointer" >
                    {val.title}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-2">
            <div className="capitalize mb-6 text-primary font-openSansSix md:text-xl">
              contact
            </div>
            <div className="flex flex-col items-start gap-2 text-white">
              <div className="text-base font-openSansFive">Head Office :</div>
              <div className="flex items-center gap-1">
                <div>
                  <IoLocationSharp className="w-4 h-4" />
                </div>
                <div className="text-sm font-openSansThree">
                  Kalikanagar-13 Butwal, Rupandehi
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 text-white mt-8">
              <div className="text-base font-openSansFive">Info Support :</div>
              <div className="flex items-center gap-1">
                <div>
                  <AiFillPhone className="w-4 h-4 " />
                </div>
                <div className="text-sm font-openSansThree">
                  +977-9857074929
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <MdEmail className="w-4 h-4 " />
                </div>
                <div className="text-sm font-openSansThree">
                  sikkaigroup@gmail.com
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-3 text-white ">
            <div className="capitalize mb-6 text-primary font-openSansSix  md:text-xl">
              Newsletter
            </div>
            <p className="text-sm"> Subscribe us to get your updated news !</p>
            <div className="flex items-center my-4">
              <input
                type="text"
                className="py-2 px-2 w-full text-black text-sm rounded-none "
                placeholder="johndoe@gmail.com"
              />
              <button className="bg-orange-600 px-4 py-2 text-sm transition duration-700 hover:opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* main grid ends for upper section  */}

        <hr className="opacity-40 my-8" />

        {/* bottom section starts  */}

        <div className="flex flex-col md:flex-row items-start justify-between py-5 space-y-5 md:space-y-0">
          <Link href={"/"} passHref>
            <div className="w-28 -mt-2 cursor-pointer">
              <Image
                src="/sikkai1.webp"
                alt="logo"
                height={50}
                sizes={"80vw"}
                width={100}
                placeholder="blur"
                priority={"true"}
                loading="eager"
                blurDataURL="/sikkai1.webp"
                layout="responsive"
                quality={75}
                objectFit="contain"
              />
            </div>
          </Link>

          {/* privacy policy section starts  */}
          <div className=" flex-1 md:mx-8 lg:mx-16">
            <div className="flex items-center space-x-1 md:space-x-2 text-white font-medium  text-xs sm:text-sm">
              <Link href="">
                <p className="cursor-pointer transition hover:opacity-80">
                  Terms & Condition
                </p>
              </Link>
              <span className="h-4 w-0.5 bg-white"></span>
              <Link href="/Policy_Aggrement/privacy_policy">
                <p className="cursor-pointer transition hover:opacity-80">
                  Privacy Policy
                </p>
              </Link>
              <span className="h-4 w-0.5 bg-white"></span>
              <Link href="">
                <p className="cursor-pointer transition hover:opacity-80">
                  Lisence Aggrement
                </p>
              </Link>
            </div>
            <p className="mt-5  md:my-4 text-xs text-white">
              Copyright &copy; {new Date().getFullYear()}, Sikkai
            </p>
          </div>

          {/* privacy policy section ends  */}
          {/* social media icons section  */}
          <div className="flex items-center space-x-4 text-xl">
            <FaFacebookF className="text-white cursor-pointer transition hovertext" />
            <BsTwitter className="text-white cursor-pointer transition hovertext" />
            <AiFillInstagram className="text-white cursor-pointer transition hovertext" />
            <FaTiktok className="text-white cursor-pointer transition hovertext" />
            <BsWhatsapp className="text-white cursor-pointer transition hovertext" />
          </div>
          {/* social media icon section ends  */}
        </div>

        {/* bottom section ends  */}
      </div>
    </div>
  );
}

export default Footer;
