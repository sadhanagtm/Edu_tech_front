import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

import Link from "next/link";
import { MdEmail } from "react-icons/md";
import React from "react";

function SubHeader() {
  return (
    <div className="hidden lg:block bg-primary capitalize  mx-auto lg:px-8 py-3">
      <div className="flex justify-end lg:mx-8  space-x-4 text-white font-openSansFive">
        {/* right section  */}
        <div>
          {" "}
          <Link href="/" passHref>
            <p className="transition hover:opacity-80 cursor-pointer">Home</p>
          </Link>
        </div>
        <div>
          {" "}
          <Link href="/AboutUs" passHref>
            <p className="transition hover:opacity-80 cursor-pointer">
              About Us
            </p>
          </Link>
        </div>
        <div>
          {" "}
          <Link href="/AllInstructor" passHref>
            <p className="transition hover:opacity-80 cursor-pointer">
              Gurus
            </p>
          </Link>
        </div>
        <div>
          {" "}
          <Link href="/" passHref>
            <p className="transition  hover:opacity-80 cursor-pointer">
              live Seminar
            </p>
          </Link>
        </div>
        <div>
          {" "}
          <Link href="/Download" passHref>
            <p className="transition hover:opacity-80 cursor-pointer">
              Downloads
            </p>
          </Link>
        </div>
        <div>
          {" "}
          <Link href="/contact" passHref>
            <p className="transition hover:opacity-80 cursor-pointer">
              Contact Us
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
