import React, { useState, useEffect } from "react";
import { NavData } from "../NavData/NavData";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/sikkai1.webp";
import SidebarModel from "../../UI/model/SidebarModel";
import { fadeInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";
import cookie from "js-cookie";
import { useRouter } from "next/router";
function Sidebar({ show, setShow, style }) {
  const [showToken] = useState(cookie.get("token"));

  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (showToken) {
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
  }, [showLogin]);

  const styles = {
    fadeInLeft: {
      animation: "x .5s",
      animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
    },
  };

  return (
    <SidebarModel show={show} setShow={setShow}>
      <StyleRoot>
        <div
          style={styles.fadeInLeft}
          className={`  absolute bg-white top-0 z-50 left-0 text-black
        lg:hidden h-screen w-3/4 scroll pb-10`}
        >
          <div className="container mx-auto p-6">
            <div className="w-32 cursor-pointer">
              {/* <Link href={"/"} passHref>
                <Image
                  alt="logo"
                  src={Logo}
                  width={100}
                  height={50}
                  sizes={"80vw"}
                  quality={75}
                  layout="responsive"
                  objectFit="contain"
                />
              </Link> */}
            </div>
            <p></p>
          </div>

          <hr className="my-4" />
          <div className="flex flex-col space-y-4 mx-5 my-2">
            {NavData.map((val, i) => {
              return (
                <div key={i} className=" cursor-pointer">
                  <Link href={val.link}>
                    <p
                      className={` ${
                        router.asPath === val.link ? "text-primary w-fit" : ""
                      } text-base font-openSansFour cursor-pointer`}
                    >
                      {val.title}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>

          <hr className="my-4" />
          <div className=" flex flex-col space-y-4 mx-5 my-2">
            {/* <Link href="/courses" passHref>
              <div
                className={` ${
                  router.asPath === "/courses" ? "text-primary w-fit" : ""
                } text-base font-openSansFour cursor-pointer`}
              >
                Courses
              </div>
            </Link> */}
            <Link href="/CoursesCategory" passHref>
              <div
                className={` ${
                  router.asPath === "/CoursesCategory"
                    ? "text-primary w-fit"
                    : ""
                } text-base font-openSansFour cursor-pointer`}
              >
                Courses Category
              </div>
            </Link>
          </div>

          <hr className="my-4" />
          {/* sub header nav bar  */}

          <div className="text-base font-openSansFour flex flex-col space-y-4  mx-5 my-2">
            <Link href="/">
              <p
                className={` ${
                  router.asPath === "/" ? "text-primary w-fit" : ""
                } text-base font-openSansFour cursor-pointer`}
              >
                Home
              </p>
            </Link>
            <Link href="/AboutUs">
              <p
                className={` ${
                  router.asPath === "/AboutUs" ? "text-primary w-fit" : ""
                } text-base font-openSansFour cursor-pointer`}
              >
                {" "}
                About Us
              </p>
            </Link>
            <Link href="/Download">
              <p
                className={` ${
                  router.asPath === "/Download" ? "text-primary w-fit" : ""
                } text-base font-openSansFour cursor-pointer`}
              >
                {" "}
                Downloads
              </p>
            </Link>
            <Link href="/contact">
              <p
                className={` ${
                  router.asPath === "/contact" ? "text-primary w-fit" : ""
                } text-base font-openSansFour cursor-pointer`}
              >
                {" "}
                Contact Us
              </p>
            </Link>
          </div>
          <hr className="my-4" />

          {/* sub header nav bar ends  */}

          <p className=" hidden  justify-center items-center text-basehover:text-red-500 hover:scale-105 cursor-pointer">
            <FaShoppingCart />
          </p>
          <div
            className={`${
              showLogin ? "block" : "hidden"
            } px-4 space-y-3 mt-14  `}
          >
            <Link href="/auth/login" passHref>
              <div className="btn-outline-Gray rounded-md hover:scale-105 hover:shadow-sm hover:shadow-gray-300 text-gray-100 transition hover:opacity-75">
                Login
              </div>
            </Link>
            <Link href="/auth/signup" passHref>
              <div
                className="btn-primary rounded-md  
              hover:scale-105 hover:shadow-sm hover:shadow-gray-300
               transition hover:opacity-75 shadow-xl "
              >
                Sign up
              </div>
            </Link>
          </div>
        </div>
      </StyleRoot>
    </SidebarModel>
  );
}

export default Sidebar;
